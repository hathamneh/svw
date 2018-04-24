<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentCollection extends JsonResource
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
            'user_id'         => $this->user_id,
            'post_id'         => $this->post_id,
            'user_url'        => $this->user->profile_url,
            'name'            => $this->user->name,
            'profile_picture' => $this->user->profile_picture,
            'content'         => $this->content,
            'created_at'      => $this->created_at->diffForHumans(Carbon::now(), true, true),
        ];

        return $return;
    }
}
