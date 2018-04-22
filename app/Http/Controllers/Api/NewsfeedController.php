<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\PostsCollection;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class NewsfeedController extends Controller
{
    public function index()
    {
        /** @var User $user */
        $user = Auth::user();
        return PostsCollection::collection($user->newsfeed());
    }
}
