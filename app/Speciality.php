<?php

namespace App;

use App\MyModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Speciality extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];
    protected $fillable = ['name'];

    public function organizations()
    {
        return $this->belongsToMany(Organization::class);
    }
}
