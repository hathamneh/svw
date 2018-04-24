<?php

namespace App\Http\Controllers;

use App\Event;
use App\Http\Resources\EventCollection;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{


    public function show(Event $event)
    {
        return view('events.show')->with('event', $event);
    }

    public function create()
    {
        return view("events.create");
    }
}
