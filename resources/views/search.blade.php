@extends("layouts.app")

@section("content")
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
                    <ul class="nav nav-pills flex-column nav-pills-warning mb-3" id="pills-tab" role="tablist" data-toggle="pills">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-events-tab" data-toggle="pill" href="#pills-events"
                               role="tab" aria-controls="pills-events" aria-selected="true"><i
                                        class="fa fa-calendar-alt"></i> @lang("Events")</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-volunteers-tab" data-toggle="pill" href="#pills-volunteers"
                               role="tab" aria-controls="pills-volunteers" aria-selected="false"><i
                                        class="fa fa-user-circle"></i> @lang("Volunteers")</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-organizations-tab" data-toggle="pill"
                               href="#pills-organizations" role="tab" aria-controls="pills-organizations"
                               aria-selected="false"><i class="fa fa-building"></i> @lang("Organizations")</a>
                        </li>
                    </ul>

                </div>
                <div class="col-sm-9">
                    <div class="tab-content search-results" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-events" role="tabpanel"
                             aria-labelledby="pills-events-tab">
                            <ul class="row">
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results__item col-sm-6">
                                    <a href="#" class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3 item-image">
                                                    <img src="{{ asset("images/default-avatar.jpg") }}" alt="">
                                                </div>
                                                <div class="col-sm-9 item-content">
                                                    <h3>Title of result</h3>
                                                    <p class="text-muted">Description goes in this area below the title of this item of
                                                        search result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="pills-volunteers" role="tabpanel"
                             aria-labelledby="pills-volunteers-tab">...
                        </div>
                        <div class="tab-pane fade" id="pills-organizations" role="tabpanel"
                             aria-labelledby="pills-organizations-tab">...
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection