<?php

namespace App\Http\Controllers;

use App\Event;
use App\Http\Resources\EventCollection;
use Illuminate\Http\Request;

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
