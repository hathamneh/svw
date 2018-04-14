<?php

namespace App\Http\Resources;

use App\Capability;
use Illuminate\Http\Resources\Json\JsonResource;
use PeterColes\Countries\CountriesFacade;

class VolunteerCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $out = [
            'id'              => $this->id,
            'user_id'         => $this->user_id,
            'full_name'       => $this->full_name,
            'first_name'      => $this->first_name,
            'last_name'       => $this->last_name,
            "birthday"        => $this->birthday->toFormattedDateString(),
            "gender"          => $this->gender,
            "country"         => CountriesFacade::lookup()[$this->country],
            "city"            => $this->city,
            "phone"           => $this->phone,
            "profile_picture" => $this->profile_picture,
            "cover_picture"   => $this->cover_picture,
            "bio"             => $this->bio,
            "user"            => $this->user,
        ];
        if ($request->has("all"))
            $out += [
                "educations"   => $this->educations,
                "experiences"  => $this->experiences,
                "capabilities" => Capability::groupify($this->capabilities),
            ];

        return $out;
    }
}
