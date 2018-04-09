<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
        return $this->belongsToMany(User::class, "likes", "post_id", "user_id");
    }

    public function addLike(User $user)
    {
        $user->likes()->attach($this);
    }

    public function removeLike(User $user)
    {
        $user->likes()->detach($this);
    }

    public function liked(User $user)
    {
        return DB::table('likes')
                ->wherePostId($this->id)
                ->whereUserId($user->id)
                ->count() > 0;

    }
}
