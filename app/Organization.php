<?php

namespace App;

use App\Http\Resources\OrganizationCollection;
use App\MyModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Organization extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'founded_date'];

    protected $fillable = ['name', 'founded_date', 'website', 'about', 'country', 'city', 'address'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function specialities()
    {
        return $this->belongsToMany(Speciality::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function eventsCount()
    {
        return $this->hasMany(Event::class)->count();
    }

    public function getFullNameAttribute()
    {
        return $this->name;
    }

    public function getProfilePictureAttribute($val)
    {
        return !is_null($val) ? $val : asset("images/default-avatar.jpg");
    }

    public function getCoverPictureAttribute($val)
    {
        return !is_null($val) ? $val : asset("images/default-cover.jpg");
    }

    public function getProfileUrlAttribute()
    {
        return route("profile.organization", ["username" => $this->user->username]);
    }

    public static function search($s)
    {
        $results = self::where("name", "LIKE", "%$s%")
            ->simplePaginate(15);
        return $results;
    }
}
