<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AccomplishmentsController extends Controller
{
    public function index()
    {
        if(Auth::check() && !is_null($volunteer = Auth::user()->volunteer)) {

        }
    }
}
