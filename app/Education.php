<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property  school
 * @property  field_of_study
 * @property  graduation_year
 */
class Education extends Model
{
    protected $fillable = ['school', 'field_of_study', 'graduation_year'];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }
}
