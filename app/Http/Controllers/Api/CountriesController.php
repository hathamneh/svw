<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use PeterColes\Countries\CountriesFacade as Countries;
use PeterColes\Countries\CountriesFacade;

class CountriesController extends Controller
{

    public function index()
    {
        return Countries::lookup(app()->getLocale());
    }

    public function keyValue()
    {
        return Countries::keyValue(app()->getLocale(), 'value', 'text');
    }
}
