@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 mx-auto">
                <div class="Event">
                    <div class="Event__header">
                        <div class="Event__image" style="background-image: url('{{ $event->picture }}')">
                            <div class="Event__image__overlay"></div>
                        </div>
                        <div class="Event__top-text">
                            <h3 class="Event__name">{{ $event->name }}</h3>
                            <div class="Event__sub-text">
                                {{ __("By: ") . $event->organization->name }}
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-secondary"><i class="far fa-arrow-alt-circle-right"></i> Going</button>
                                </div>
                                <div class="col d-flex justify-content-end">
                                    Going {{ $event->subscribers->count() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection