<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    protected $fillable = ['name', 'description', 'picture', "date_from", "date_to", "address", "city", "country"];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function subscribers() {
        return $this->belongsToMany(User::class);
    }
}
