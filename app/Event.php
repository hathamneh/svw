<?php

namespace App;

use App\Http\Resources\EventCollection;
use App\Http\Resources\UserCollection;
use App\MyModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

/**
 * @property Collection subscribers
 */
class Event extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'description', 'picture', "date_from", "date_to", "address", "city", "country"];

    protected $dates = ['date_from', 'date_to', 'deleted_at'];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function subscribers()
    {
        return $this->belongsToMany(User::class);
    }

    public function getSubscribers()
    {
        return UserCollection::collection($this->subscribers);
    }

    public function getUrlAttribute()
    {
        return route('event.show', $this->id);
    }

    public function going(User $user) {
        return $this->subscribers()->attach($user);
    }

    public function leave(User $user) {
        return $this->subscribers()->detach($user);
    }

    public function isGoing()
    {
        return $this->subscribers()->where('id', Auth::user()->id)->get()->count() > 0;
    }

    public function getPictureAttribute($val)
    {
        if(is_null($val) || empty($val))
            return asset('images/event-default.jpg');
        return url($val);
    }

    public function getDateRangeAttribute()
    {
        return $this->date_from->eq($this->date_to) ?
            $this->date_from->toFormattedDateString() :
            $this->date_from->toFormattedDateString() . " " . trans("to") . " " . $this->date_to->toFormattedDateString();
    }

    /**
     * @param $target
     * @param $image_data
     * @param $extension
     */
    public function uploadImageEncoded($image_data, $extension)
    {

        $file_name = md5($this->username . time()) . "." . $extension;
        Storage::disk('events')->put($file_name, base64_decode($image_data));
        $uploaded_url = Storage::disk('events')->url($file_name);
        $this->update(['picture' => $uploaded_url]);
    }

    public function isOwner($user)
    {
        if ($user instanceof User)
            return $this->organization->user->id == $user->id;
        elseif ($user instanceof Organization)
            return $this->organization_id == $user->id;
        else
            throw new \InvalidArgumentException();
    }

    public static function search($s)
    {
        $orgs = Organization::where('name', 'LIKE', "%$s%")->pluck('id');

        $results = self::where("name", "LIKE", "%$s%")
            ->orWhere("city", "LIKE", "%$s%")
            ->orWhere("country", "LIKE", "%$s%")
            ->orWhere("address", "LIKE", "%$s%")
            ->whereIn("organization_id", $orgs, "or")
            ->simplePaginate(15);
        return $results;
    }
}
