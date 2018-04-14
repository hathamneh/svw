<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function subscribers() {
        return $this->belongsToMany(User::class);
    }
}
