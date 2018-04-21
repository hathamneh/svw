<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SearchController as sController;
use App\Http\Resources\EventCollection;
use App\Http\Resources\OrganizationCollection;
use App\Http\Resources\VolunteerCollection;

class SearchController extends sController
{
    public function doSearch($s, $type = "volunteer")
    {
        $results = parent::doSearch($s, $type);
        switch ($type) {
            case "event":
                return EventCollection::collection($results);
            case "organization":
                return OrganizationCollection::collection($results);
            default:
                return VolunteerCollection::collection($results);
        }
    }

}
