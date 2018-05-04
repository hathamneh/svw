<div class="home-sidebar-left sidebar-sticky">
    <div class="sidebar_user-details">
        <div class="sidebar_user-details__image">
            <div class="avatar-thumb large">
                <img src="{{ $current_user->profile_picture }}" alt="User">
            </div>
        </div>
        <div class="sidebar_user-details__text">
            <a href="{{ $current_user->profile_url }}">
                <div>{{ $current_user->name }}</div>
            </a>
            <small>{{ "@" . $current_user->username }}</small>
        </div>
    </div>
    <profile-numbers :is-org="{{ $current_user->is_org ? "true" : "false" }}" class="profile-numbers-sm"
                     :user-id="{{ $current_user->id }}"></profile-numbers>

    <hr>
    <div>
        <small><b class="text-muted">Your Events Schedule</b></small>
        <event-list size="tiny" :schedule="true"></event-list>
    </div>
    @if($current_user->is_org)
        <a href="/event/create">Create new event</a>
    @endif

</div>
