<?php

namespace App;

use App\MyModel as Model;

class Like extends Model
{
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
