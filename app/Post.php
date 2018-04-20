<?php

namespace App;

use App\MyModel as Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * @property mixed comments
 */
class Post extends Model
{

    // this is a recommended way to declare event handlers
    protected static function boot() {
        parent::boot();

        static::deleting(function(Post $post) { // before delete() method call this
            $post->comments()->delete();
        });
    }

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

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function addComment($content, User $user = null)
    {
        if (is_null($user)) $user = Auth::user();
        $comment = new Comment;
        $comment->content = $content;
        $comment->user()->associate($user);
        return $this->comments()->save($comment);
    }

    public function getPostUrlAttribute()
    {
        return route("posts.show", $this->id);
    }

}
