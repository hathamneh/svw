<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Pluralizer;

/**
 * @property String bio
 */
class Volunteer extends Model
{
    protected $fillable = ['first_name', 'last_name', 'birthday',
        'gender', 'country', 'city', 'phone', 'profile_picture',
        'cover_picture', 'bio'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function educations()
    {
        return $this->hasMany(Education::class);
    }

    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    public function capabilities()
    {
        return $this->hasMany(Capability::class);
    }

    public function saveEducations($educations)
    {
        $arr = [];
        foreach ($educations as $item) {
            $arr[] = [
                'school' => $item->school,
                'field_of_study' => $item->field_of_study,
                'graduation_year' => $item->gdate,
            ];
        }
        return $this->educations()->createMany($arr);
    }

    public function saveExperiences($experiences)
    {
        $arr = [];
        foreach ($experiences as $item) {
            $arr[] = [
                'position' => $item->position,
                'organization_name' => $item->organization,
                'period' => $item->period,
                'description' => $item->desc,
            ];
        }
        return $this->experiences()->createMany($arr);
    }

    public function saveCapabilities($capabilities)
    {
        $arr = [];
        foreach ($capabilities as $type => $values) {
            $type_singular = Pluralizer::singular($type);
            foreach ($values as $value) {
                $arr[] = [
                    'type' => $type_singular,
                    'value' => json_encode($value),
                ];
            }
        }
        return $this->capabilities()->createMany($arr);
    }
}
