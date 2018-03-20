<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

/**
 * @property string username
 * @property bool is_org
 * @property Organization organization
 * @property Volunteer volunteer
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

    public function volunteer()
    {
        return $this->hasOne(Volunteer::class);
    }

    public function organization()
    {
        return $this->hasOne(Volunteer::class);
    }

    public function accountType(string $type)
    {
        if ($type === "volunteer")
            $this->is_org = false;
        elseif ($type === "organization")
            $this->is_org = true;
    }

    public function getNameAttribute()
    {
        if ($this->is_org && !is_null($this->organization))
            return $this->organization->name;
        elseif (!is_null($this->volunteer))
            return $this->volunteer->full_name;
        return $this->username;
    }

}
