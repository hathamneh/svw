<div class="home-sidebar-left sidebar-sticky">
    <div class="sidebar_user-details">
        <div class="sidebar_user-details__image">
            <div class="avatar-thumb large">
                <img src="{{ $user->profile_picture }}" alt="User">
            </div>
        </div>
        <div class="sidebar_user-details__text">
            <a href="{{ $user->profile_url }}">
                <div>{{ $user->name }}</div>
            </a>
            <small>{{ "@" . $user->username }}</small>
        </div>
    </div>
    <profile-numbers :is-org="{{ $user->is_org ? "true" : "false" }}" class="profile-numbers-sm"
                     :user-id="{{ $user->id }}"></profile-numbers>
</div>
@if($user->is_org)
    <hr>
    <div>
        <small class="bold">Events</small>
    </div>
    <a href="/event/create">Create new event</a>
@endif
