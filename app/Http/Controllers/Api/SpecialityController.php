<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\SpecailityCollection;
use App\Speciality;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SpecialityController extends Controller
{
    public function index()
    {
        return SpecailityCollection::collection(Speciality::all());
    }
}
