@extends("layouts.app")

@section("content")
    <main style="margin-bottom: 6rem;">
        <div class="profile-header">

            <cover-picture src="{{ $user->cover_picture }}" :editable="{{ $view_mode === "self" ? "true" : "false" }}"></cover-picture>
            <div class="container">
                <div class="profile-header__user">
                    <profile-picture src="{{ $user->profile_picture }}" :editable="{{ $view_mode === "self" ? "true" : "false" }}"></profile-picture>
                    <div class="profile-header__right">
                        <div class="user-full_name">
                            <h2>{{ $volunteer->full_name }}</h2>
                            <span>{{ "@".$user->username }}</span>
                        </div>
                        <div class="user-actions">
                            @if($view_mode === "self")
                                <a href="{{ route("profile.volunteer.edit", ["volunteer"=>$user->username]) }}" class="btn btn-light btn-sm"><i class="fa fa-edit"></i> Edit Profile</a>
                            @elseif($view_mode === "other")
                                <follow-button :user-id="{{ $user->id }}"></follow-button>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container mt-5">
            <div class="row">

                <div class="col-md-3 profile-sidebar">
                    <profile-numbers :user-id="{{ $user->id }}"></profile-numbers>

                    <volunteer-info :user_id="{{ $user->id }}"></volunteer-info>
                </div>
                <div class="col-md-7 profile-main">
                    <profile-tabs mode="{{ $view_mode }}" :user_id="{{ $user->id }}"></profile-tabs>
                </div>
                <div class="col-md-2">
                    <small class="text-muted"><b>Suggestions</b></small>
                    <div class="suggestion-item demo">

                    </div>
                    <div class="suggestion-item demo">

                    </div>
                    <hr>
                    <small style="font-size: 0.65rem;" class="text-muted"><b>All rights reserved &copy; SVW 2018</b></small>
                </div>
            </div>
        </div>
    </main>
@endsection