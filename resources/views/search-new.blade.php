@extends("layouts.app")

@section("content")
    <main class="search-page">
        @if(!empty($s))
            <div class="sub-heading">
                <div class="container">
                    <h3>@lang("Results for ") {{ $s }}</h3>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="d-md-none">
                            <a data-toggle="collapse" href="#searchToolsCollapse" role="button" aria-expanded="false"
                               aria-controls="searchToolsCollapse" class="btn btn-light"><i class="fa fa-filter"></i>
                                Search Filters</a>
                            <div class="collapse mt-2" id="searchToolsCollapse">
                                <b>Search for:</b>
                                <div class="nav nav-pills nav-pills-warning flex-column" id="searchTabs">

                                    {{--<a class="nav-item nav-link {{ $type == "all" ? "active" : "" }}"--}}
                                    {{--id="pills-all-tab"--}}
                                    {{--href="{{ route("search",["s"=>$s, "type"=>"all"]) }}"> @lang("All")</a>--}}

                                    <a class="nav-item nav-link {{ $type == "volunteer" ? "active" : "" }}"
                                       id="pills-volunteers-tab"
                                       href="{{ route("search",["s"=>$s, "type"=>"volunteer"]) }}"><i
                                                class="fa fa-user-circle"></i> @lang("Volunteers")</a>

                                    <a class="nav-item nav-link {{ $type == "event" ? "active" : "" }}"
                                       id="pills-events-tab"
                                       href="{{ route("search",["s"=>$s, "type"=>"event"]) }}"><i
                                                class="fa fa-calendar-alt"></i> @lang("Events")</a>

                                    <a class="nav-item nav-link {{ $type == "organization" ? "active" : "" }}"
                                       id="pills-organizations-tab"
                                       href="{{ route("search",["s"=>$s, "type"=>"organization"]) }}"><i
                                                class="fa fa-building"></i> @lang("Organizations")</a>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-md-block">
                            <small class="text-muted font-weight-bold">@lang("Search Tools")</small>
                            <hr>
                            <nav>
                                <div class="nav nav-pills nav-pills-warning flex-column" id="searchTabs">

                                    {{--<a class="nav-item nav-link {{ $type == "all" ? "active" : "" }}"--}}
                                    {{--id="pills-all-tab"--}}
                                    {{--href="{{ route("search",["s"=>$s, "type"=>"all"]) }}"> @lang("All")</a>--}}

                                    <a class="nav-item nav-link {{ $type == "volunteer" ? "active" : "" }}"
                                       id="pills-volunteers-tab"
                                       href="{{ route("search",["s"=>$s, "type"=>"volunteer"]) }}"><i
                                                class="fa fa-user-circle"></i> @lang("Volunteers")</a>

                                    <a class="nav-item nav-link {{ $type == "event" ? "active" : "" }}"
                                       id="pills-events-tab"
                                       href="{{ route("search",["s"=>$s, "type"=>"event"]) }}"><i
                                                class="fa fa-calendar-alt"></i> @lang("Events")</a>

                                    <a class="nav-item nav-link {{ $type == "organization" ? "active" : "" }}"
                                       id="pills-organizations-tab"
                                       href="{{ route("search",["s"=>$s, "type"=>"organization"]) }}"><i
                                                class="fa fa-building"></i> @lang("Organizations")</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div class="search-results">
                            @if(isset($results['volunteers']) || isset($results['organizations']) || isset($results['events']))
                                <b class="text-muted">Volunteers Results:</b>
                                <search-results type="volunteer" :results="{{ $results['volunteers']->toJson() }}"></search-results>
                                {!! $results['volunteers']->appends(['s' => $s, 'type'=>$type])->links() !!}

                                <hr>
                                <b class="text-muted">Organizations Results:</b>
                                <search-results type="organization" :results="{{ $results['organizations']->toJson() }}"></search-results>
                                {!! $results['organizations']->appends(['s' => $s, 'type'=>$type])->links() !!}

                                <hr>
                                <b class="text-muted">Events Results:</b>
                                <search-results type="event" :results="{{ $results['events']->toJson() }}"></search-results>
                                {!! $results['events']->appends(['s' => $s, 'type'=>$type])->links() !!}

                            @else
                                <search-results type="{{ $type }}" :results="{{ json_encode($results->toArray()['data']) }}"></search-results>
                                {!! $results->appends(['s' => $s, 'type'=>$type])->links() !!}
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        @else
            <list-message>Please enter search term above</list-message>
        @endif
    </main>
@endsection
