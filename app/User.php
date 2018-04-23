<?php

namespace App;

use App\Http\Resources\PostsCollection;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\UploadedFile;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Laravel\Passport\HasApiTokens;

/**
 * @property string username
 * @property bool is_org
 * @property Organization organization
 * @property Volunteer volunteer
 * @property Collection[User] followers
 * @property Collection[User] following
 */
class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password', 'is_org', 'provider', 'provider_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'is_org' => 'boolean',
    ];

    public function volunteer()
    {
        return $this->hasOne(Volunteer::class);
    }

    public function getProfileUrlAttribute()
    {
        if ($this->ready())
            if ($this->is_org)
                return $this->organization->profile_url;
            else
                return $this->volunteer->profile_url;
        return "#";
    }

    public function organization()
    {
        return $this->hasOne(Organization::class);
    }

    public function ready()
    {
        return !is_null($this->volunteer) || !is_null($this->organization);
    }

    public function accountType(string $type)
    {
        if ($type === "volunteer")
            $this->is_org = false;
        elseif ($type === "organization")
            $this->is_org = true;
        $this->save();
    }

    public function getNameAttribute()
    {
        if ($this->is_org && !is_null($this->organization))
            return $this->organization->name;
        elseif (!is_null($this->volunteer))
            return $this->volunteer->full_name;
        return $this->username;
    }

    public function getEditUrlAttribute()
    {
        if($this->is_org)
            return route("profile.organization.edit", ['username' => $this->username]);
        else
            return route("profile.volunteer.edit", ['username' => $this->username]);
    }

    public function following()
    {
        if ($this->is_org)
            return $this->belongsToMany(User::class, "followers", "follower_id", "following_id");
        else
            return $this->belongsToMany(User::class, "followers", "follower_id", "following_id")
                ->where("is_org", "!=", true);
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, "followers", "following_id", "follower_id");
    }

    public function posts()
    {
        return $this->hasMany(Post::class)->orderBy("created_at", "desc");
    }

    public function likes()
    {
        return $this->belongsToMany(Post::class, "likes", "user_id", "post_id");
    }

    public function memberOf()
    {
        return $this->belongsToMany(User::class, "followers", "follower_id", "following_id")
            ->where("is_org", "=", true);
    }

    public function memberships()
    {
        $ids = $this->memberOf()->pluck('user.id');
        return Organization::whereIn('user_id',$ids)->get();
    }

    public function likePost(Post $post)
    {
        $post->likes()->attach($this);
    }

    public function unlikePost(Post $post)
    {
        $post->likes()->detach($this);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function events()
    {
        return $this->belongsToMany(Event::class);
    }

    public function postsfeed()
    {
        $ids = DB::table('followers')->where('follower_id','=',$this->id)->pluck('following_id')->toArray();
        array_push($ids, $this->id);
        $posts = Post::whereIn("user_id",$ids)->latest()->get();
        return $posts;
    }

    public function eventsfeed()
    {
        $ids = $this->memberships()->pluck('id')->toArray();
        if($this->is_org)
            array_push($ids, $this->organization->id);
        $events = Event::whereIn("organization_id",$ids)->orderBy('date_from', 'asc')->get();
        return $events;
    }


    public function getProfilePictureAttribute($val)
    {
        return !is_null($val) && $val !== "" ? $val : asset("images/default-avatar.jpg");
    }

    public function getCoverPictureAttribute($val)
    {
        return !is_null($val) && $val !== "" ? $val : asset("images/default-cover.jpg");
    }

    public function uploadImage($target, UploadedFile $file)
    {
        $fname = md5($this->username . time()) . '.' . $file->getClientOriginalExtension();
        Storage::putFileAs('public/avatars/' . $this->id . '/', $file, $fname);
        $uploadedUrl = Storage::disk("public")->url('/avatars/' . $this->id . '/' . $fname);
        switch ($target) {
            case "profile":
                $this->profile_picture = $uploadedUrl;
                $this->save();
                break;
            case "cover":
                $this->cover_picture = $uploadedUrl;
                $this->save();
                break;
        }
        return $uploadedUrl;
    }

    /**
     * @param $target
     * @param $image_data
     * @param $extension
     */
    public function uploadImageEncoded($target, $image_data, $extension)
    {
        $target = in_array($target, ['profile', 'cover']) ? $target : false;
        if (!$target)
            throw new \InvalidArgumentException("Target should be profile or cover picture");

        $file_name = 'avatars/' . $this->id . '/' . md5($this->username . time()) . "." . $extension;
        Storage::disk('public')->put($file_name, $image_data);
        $uploaded_url = Storage::disk('public')->url($file_name);
        logger($uploaded_url);
        switch ($target) {
            case "profile":
                $this->profile_picture = $uploaded_url;
                $this->save();
                break;
            case "cover":
                $this->cover_picture = $uploaded_url;
                $this->save();
                break;
        }
    }
}
