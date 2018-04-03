<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SearchController as sController;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends sController
{
    public function show($s, $type = "volunteer")
    {
        return $this->doSearch($s, $type);
    }

}
