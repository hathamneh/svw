@extends('layouts.app')

@section('content')
    <?php /** @var \App\Volunteer $volunteer */ ?>

    <div class="container pt-4">
        <div class="row">
            <div class="col-md-3">
                <div class="home-sidebar-left sidebar-sticky">
                    <div class="sidebar_user-details">
                        <div class="sidebar_user-details__image">
                            <div class="avatar-thumb large">
                                <img src="{{ $personal->profile_picture }}" alt="User">
                            </div>
                        </div>
                        <div class="sidebar_user-details__text">
                            <a href="{{ $personal->profile_url }}">
                                <div>{{ $personal->full_name }}</div>
                            </a>
                            <small>{{ "@" . $user->username }}</small>
                        </div>
                    </div>
                    <profile-numbers class="profile-numbers-sm" :user-id="{{ $user->id }}"></profile-numbers>
                </div>
            </div>
            <div class="col-md-7">
                <new-post></new-post>
                <post-list></post-list>
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
