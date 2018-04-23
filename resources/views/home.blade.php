@extends('layouts.app')

@section('content')
    <?php /** @var \App\Volunteer $volunteer */ ?>

    <div class="container pt-4">
        <div class="row">
            <div class="col-md-3">
                @include('layouts.mainSidebar')
            </div>
            <div class="col-md-7">
                <b-tabs pills class="nav-fill newsfeed-tabs">
                    <b-tab title="{{ __("Latest Posts") }}" active>
                        <new-post></new-post>
                        <post-list :newsfeed="true"></post-list>
                    </b-tab>
                    <b-tab title="{{ __("Latest Events") }}">
                        Tab Contents 2
                    </b-tab>
                </b-tabs>


            </div>
            <div class="col-md-2">
                <div class="sidebar-home-right sidebar-sticky">
                    <small class="text-muted"><b>Suggestions</b></small>
                    <div class="suggestion-item demo">

                    </div>
                    <div class="suggestion-item demo">

                    </div>
                    <hr>
                    <small style="font-size: 0.65rem;" class="text-muted"><b>All rights reserved &copy; SVW 2018</b>
                    </small>
                </div>
            </div>
        </div>
    </div>

@endsection
