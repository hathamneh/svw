<?php

namespace App;

use App\MyModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property  String school
 * @property  String field_of_study
 * @property  String gdate
 * @property int volunteer_id
 */
class Education extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = ['school', 'field_of_study', 'gdate'];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }
}
