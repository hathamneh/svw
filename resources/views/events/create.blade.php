@extends("layouts.appWithFooter")

@section("content")
    <main>
    <div class="sub-heading">
        <div class="container">
            <h3><i class="fa fa-calendar mr-3"></i>@lang("Create New Event")</h3>
            <p>
                The events represent any activity you are going to do for your volunteers. It could be online activity only,
                or on-ground activity.
            </p>
        </div>
    </div>
    <div class="container">
        <event-wizard></event-wizard>
    </div>
    </main>
@endsection