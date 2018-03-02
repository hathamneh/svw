<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Capability extends Model
{
    protected $fillable = ['type', 'value'];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }
}
