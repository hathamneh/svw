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
            'description' => $this->description,
            'date_from' => $this->date_from->toFormattedDateString(),
            'date_to' => $this->date_to->toFormattedDateString(),
            'country' => $this->country,
            'city' => $this->city,
            'address' => $this->address,
            'picture' => $this->picture,
            'url' => $this->url
        ];
        $out['date_range'] = $this->date_from->eq($this->date_to) ?
            $this->date_from->toFormattedDateString() :
            $this->date_from->toFormattedDateString() . " " . trans("to") . " " . $this->date_to->toFormattedDateString();

        return $out;
    }
}