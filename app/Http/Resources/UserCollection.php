<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'              => $this->id,
            'username'        => $this->username,
            'email'           => $this->email,
            'is_org'          => $this->is_org,
            'provider'        => $this->provider,
            'provider_id'     => $this->provider_id,
            'ready'           => $this->ready(),
            'profile_picture' => $this->profile_picture,
            'cover_picture'   => $this->cover_picture,
        ];
    }
}
