<?php

namespace App\Http\Controllers\Api;

use App\Comment;
use App\Http\Resources\CommentCollection;
use App\Post;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\UnauthorizedException;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Post $post
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Post $post)
    {
        return CommentCollection::collection($post->comments);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Post $post
     * @param  \Illuminate\Http\Request $request
     * @return CommentCollection
     */
    public function store(Post $post, Request $request)
    {
        Validator::make($request->all(), [
            'content' => 'required|max:1000',
        ])->validate();
        $comment = $post->addComment($request->get("content"));
        if ($comment instanceof Comment)
            return new CommentCollection($comment);
        else
            return $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @param Comment $comment
     * @return CommentCollection
     */
    public function show(Post $post, Comment $comment)
    {
        return new CommentCollection($comment);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @param Comment $comment
     * @return array
     * @throws \Exception
     */
    public function destroy(Post $post, Comment $comment)
    {
        $cuser = Auth::user();
        if ($cuser->id !== $comment->user_id)
            throw new UnauthorizedException();

        if ($comment->post_id !== $post->id)
            throw new ModelNotFoundException("This comment was not found with this post");

        return ["deleted" => $comment->delete()];
    }
}
