<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'id'         => $this->id,
            'content'    => $this->content,
            'username'   => $this->user->username,
            'created_at' => $this->created_at->diffForHumans(Carbon::now(), true, true),
        ];

        if (!$this->user->is_org) {
            $volunteer = $this->user->volunteer;
            $return += [
                'name'            => $volunteer->full_name,
                'profile_picture' => $volunteer->profile_picture,
            ];
        }
        return $return;
    }
}
