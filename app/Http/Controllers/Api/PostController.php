<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\PostsCollection;
use App\Post;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param User|null $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(User $user = null)
    {
        if (is_null($user))
            return PostsCollection::collection(Auth()->user()->posts);
        else
            return PostsCollection::collection($user->posts);
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
     * @param  \Illuminate\Http\Request $request
     * @return PostsCollection|Post|\Illuminate\Http\Response
     * @throws \Exception
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'content' => 'required|max:1000',
        ])->validate();
        /** @var User $user */
        $user = Auth::user();

        $newPost = new Post;
        $newPost->content = $request->get("content");
        $newPost->user()->associate($user);
        if ($newPost->save())
            return new PostsCollection($newPost);
        throw new \Exception("Post insertion Error");
    }

    /**
     * Display the specified resource.
     *
     * @param  Post $post
     * @return \Illuminate\Http\Response|Post
     */
    public function show(Post $post)
    {
        return $post;
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
     * @return array
     */
    public function destroy(Post $post)
    {
        try {
            return ["deleted" => $post->delete()];
        } catch (\Exception $e) {
            return ["deleted" => false];
        }
    }
}
