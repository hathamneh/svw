<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
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
        'username', 'email', 'password', 'is_org',
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
            ->where("is_org", "=", true)->organization();
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
}
