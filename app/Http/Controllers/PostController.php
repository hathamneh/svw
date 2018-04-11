<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function show($post)
    {
        return view("posts.post")->with("post_id", $post);
    }
}
