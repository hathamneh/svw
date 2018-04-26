@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 mx-auto">
                <div class="Event">
                    <event-header
                            :event-data="{{ json_encode(['picture'=>$event->picture, 'name' => $event->name, 'orgName' => $event->organization->name]) }}">
                    </event-header>
                    <div class="mt-2">
                        <event-tools :event-id="{{ $event->id }}"></event-tools>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-5">
                            <event-details :event="{{ json_encode([
                                'date_range'=>$event->date_range,
                                'description'=>$event->description,
                                'country'=>$event->country,
                                'city'=>$event->city,
                                'address'=>$event->address,
                            ]) }}"></event-details>
                        </div>
                        <div class="col-sm-7">
                            <div class="Event_subscribers-list">
                                <b class="text-muted my-2 d-block">Those who are coming:</b>
                                <users-list :users="{{ json_encode($event->getSubscribers()) }}"></users-list>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection