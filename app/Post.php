<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('created_at', 'desc')->get();
    }

    public function likes()
    {
        return $this->belongsToMany(User::class);
    }

    public function addLike(User $user)
    {
        $user->likes()->attach($this);
    }
    public function removeLike(User $user)
    {
        $user->likes()->detach($this);
    }
}
