<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class PostsCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $return = [
            'id'              => $this->id,
            'name'            => $this->user->name,
            'content'         => $this->content,
            'user_id'         => $this->user->id,
            'is_org'          => $this->user->is_org,
            'user_url'        => $this->user->profile_url,
            'profile_picture' => $this->user->profile_picture,
            'post_url'        => $this->post_url,
            'likes'           => $this->likes->count(),
            'liked'           => $this->liked(Auth::user()),
            'created_at'      => $this->created_at->diffForHumans(Carbon::now(), true, true),
            'comments'        => CommentCollection::collection($this->whenLoaded('comments')),
        ];

        return $return;
    }
}
