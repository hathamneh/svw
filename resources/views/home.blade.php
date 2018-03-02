@extends('layouts.app')

@section('content')
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="card pt-3">
                        <div class="card-body">
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <ul>
                                <li style="border-bottom: 1px solid #aaa;">
                                    <b>Volunteer data:</b>
                                    <pre>{{ print_r($volunteer->toArray()) }}</pre>
                                </li>
                                <li style="border-bottom: 1px solid #aaa;">
                                    <b>Volunteer Education:</b>
                                    <pre>{{ print_r($volunteer->educations->toArray()) }}</pre>
                                </li>
                                <li style="border-bottom: 1px solid #aaa;">
                                    <b>Volunteer Experiences:</b>
                                    <pre>{{ print_r($volunteer->experiences->toArray()) }}</pre>
                                </li>
                                <li style="border-bottom: 1px solid #aaa;">
                                    <b>Volunteer Capabilities:</b>
                                    <pre>{{ print_r($volunteer->capabilities->toArray()) }}</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
