<?php

namespace App\Http\Controllers\Api;

use App\Post;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function like(Post $post)
    {
        try {
            /** @var User $user */
            $user = Auth::user();
            $user->likePost($post);
            return ['success' => true];
        } catch (\Exception $ex) {
            return self::jsonException($ex);
        }
    }
    public function unlike(Post $post)
    {
        try {
            /** @var User $user */
            $user = Auth::user();
            $user->unlikePost($post);
            return ['success' => true];
        } catch (\Exception $ex) {
            return self::jsonException($ex);
        }
    }
}
