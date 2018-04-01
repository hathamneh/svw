<?php

namespace App\Http\Controllers\Api;

use App\Util\Countries;
use App\Http\Controllers\Controller;

class CountriesController extends Controller
{
    public function index()
    {
        return Countries::all();
    }
}
