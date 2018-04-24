<?php

namespace App;

use App\MyModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'icon'];

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }
}
