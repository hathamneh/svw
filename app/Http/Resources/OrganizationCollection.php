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
            'user_id'         => $this->user_id,
            'name'            => $this->name,
            'country'         => CountriesFacade::lookup()[$this->country] ?? $this->country,
            'city'            => is_null($this->city) ? "" : $this->city,
            'address'         => is_null($this->address) ? "" : $this->address,
            'about'           => is_null($this->about) ? "" : $this->about,
            'profile_picture' => $this->profile_picture,
            'cover_picture'   => $this->cover_picture,
            'website'         => is_null($this->website) ? "" : $this->website,
            'founded_date'    => is_null($this->founded_date) ? "" : $this->founded_date->toFormattedDateString(),
            'category'        => $this->category->name,
            'specialities'    => implode(",", $this->specialities),
        ];
    }
}
