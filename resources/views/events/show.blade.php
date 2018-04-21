@extends('layouts.app')

@section('content')
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-3">
                @include('layouts.mainSidebar')
            </div>
            <div class="col-md-9">
                <div class="Event">
                    <div class="Event__header">
                        <div class="Event__image" style="background-image: url('{{ $event->picture }}')"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection