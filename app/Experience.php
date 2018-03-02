<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = ['position', 'organization_name', 'period', 'description', 'attachment'];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }
}
