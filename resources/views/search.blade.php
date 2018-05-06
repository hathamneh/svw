@extends("layouts.app")

@section("content")
    <main class="search-page">
        <div class="sub-heading">
            <div class="container">
                <h3>@lang("Results for ") {{ $s }}</h3>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <small class="text-muted font-weight-bold">@lang("Search Tools")</small>
                    <hr>
                    <nav>
                        <div class="nav nav-pills nav-pills-warning flex-column" id="searchTabs">

                            <a class="nav-item nav-link {{ $type == "volunteer" ? "active" : "" }}"
                               id="pills-volunteers-tab"
                               href="{{ route("search",["s"=>$s, "type"=>"volunteer"]) }}"><i
                                        class="fa fa-user-circle"></i> @lang("Volunteers")</a>

                            <a class="nav-item nav-link {{ $type == "event" ? "active" : "" }}" id="pills-events-tab"
                               href="{{ route("search",["s"=>$s, "type"=>"event"]) }}"><i
                                        class="fa fa-calendar-alt"></i> @lang("Events")</a>

                            <a class="nav-item nav-link {{ $type == "organization" ? "active" : "" }}"
                               id="pills-organizations-tab"
                               href="{{ route("search",["s"=>$s, "type"=>"organization"]) }}"><i
                                        class="fa fa-building"></i> @lang("Organizations")</a>
                        </div>
                    </nav>

                </div>
                <div class="col-sm-9">
                    <div class="search-results">
                        @if($results->count())
                            <ul class="row">
                                @if($type !== "event")
                                    @foreach($results as $result)
                                        <?php /** Volunteer $result */ ?>
                                        <li class="search-results__item col-sm-6">
                                            <a href="{{ $result->profile_url }}" class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-sm-3 item-image">
                                                            <img src="{{ $result->user->profile_picture }}" alt="">
                                                        </div>
                                                        <div class="col-sm-9 item-content">
                                                            <h3>{{ $result->full_name }}</h3>
                                                            <p class="text-muted">{{ "@".$result->user['username'] }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    @endforeach
                                @else
                                    @foreach($results as $result)
                                        <?php /** Event $result */ ?>
                                        <li class="search-results__item event-result col-sm-6">
                                            <a href="{{ $result->url }}" class="card">
                                                <div class="card-body">
                                                    <div class="d-flex flex-column">
                                                        <div class="item-image">
                                                            <img src="{{ $result->picture }}" alt="">
                                                        </div>
                                                        <div class="item-content">
                                                            <h3>{{ $result->name }}</h3>
                                                            <p class="text-muted">
                                                                {{ __("By") }}: {{ $result->organization->name }}
                                                                <br>
                                                                {{ __("When") }}: {{ $result->date_range }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    @endforeach
                                @endif
                            </ul>
                            {!! $results->appends(['s' => $s, 'type'=>$type])->links() !!}
                        @else
                            <normal-message class="mt-4">{{ __("No Results") }}</normal-message>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection