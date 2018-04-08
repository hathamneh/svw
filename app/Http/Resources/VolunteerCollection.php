<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VolunteerCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request) + ['full_name'=>$this->full_name];
    }
}
