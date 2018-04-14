<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use PeterColes\Countries\CountriesFacade;

class OrganizationCollection extends JsonResource
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
            'name'            => $this->name,
            'country'         => CountriesFacade::lookup()[$this->country],
            'city'            => $this->city,
            'address'         => $this->address,
            'about'           => $this->about,
            'profile_picture' => $this->profile_picture,
            'cover_picture'   => $this->cover_picture,
            'website'         => $this->website,
            'founded_date'    => optional($this->founded_date)->toFormattedDateString(),
            'category'        => $this->category->name,
            'specialities'    => implode(",", $this->specialities),
        ];
    }
}
