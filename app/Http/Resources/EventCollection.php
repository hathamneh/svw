<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $out = [
            'id' => $this->id,
            'name' => $this->name,
            'subscribers' => $this->subscribers->count(),
            'organization' => $this->organization->name,
            'description' => $this->description,
            'date_from' => $this->date_from->toFormattedDateString(),
            'date_to' => $this->date_to->toFormattedDateString(),
            'country' => $this->country,
            'city' => $this->city,
            'address' => $this->address,
            'picture' => $this->picture,
            'url' => $this->url
        ];
        $out['date_range'] = $this->date_range;

        return $out;
    }
}
