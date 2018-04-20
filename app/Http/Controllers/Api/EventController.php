<?php

namespace App\Http\Controllers\Api;

use App\Event;
use App\Http\Requests\EventRequest;
use App\Http\Resources\EventCollection;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\UnauthorizedException;

class EventController extends Controller
{

    public function show(Event $event)
    {
        return new EventCollection($event);
    }

    public function store(EventRequest $request)
    {
        /** @var User $user */
        $user = Auth::user();
        $org = $user->organization;

        $eventData = [
            'name'        => $request->get('name'),
            'description' => $request->get('description'),
            'date_from'   => $request->get('date_from'),
            'date_to'     => $request->get('date_from'),
        ];
        if ($request->has('date_to'))
            $eventData['date_to'] = $request->get('date_to');

        if ($request->has('country'))
            $eventData['country'] = $request->get('country');
        if ($request->has('city'))
            $eventData['city'] = $request->get('city');
        if ($request->has('address'))
            $eventData['address'] = $request->get('address');

        if ($request->hasFile('picture')) {
            $tmpFile = $request->file('picture');
            $fileName = $tmpFile->hashName();
            $request->file('picture')->storeAs('events', $fileName);
            $eventData['picture'] = Storage::url('events/' . $fileName);
        }

        /** @var Event $event */
        $event = $org->events()->create($eventData);

        if ($request->has('imageEncoded') && $request->has('imageExt'))
            $event->uploadImageEncoded($request->get('imageEncoded'), $request->get('imageExt'));

        return new EventCollection($event);
    }
}