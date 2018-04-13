<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use PeterColes\Countries\CountriesFacade as Countries;

class CountriesController extends Controller
{
    public function index()
    {
        return Countries::lookup('ar');
    }
}
