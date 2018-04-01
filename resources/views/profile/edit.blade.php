@extends("layouts.app")

@section("content")
    <div class="sub-heading">
        <div class="container">
            <h3>@lang("Edit your profile")</h3>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sticky-top">
                    <small class="text-muted font-weight-bold">@lang("profile.edit_profile")</small>
                    <hr>

                    <nav class="nav nav-pills nav-pills-warning flex-column">
                        <a class="nav-link active" href="#"><i
                                    class="fas fa-user-circle"></i> @lang("profile.personal_information")</a>
                        <a class="nav-link" href="#"><i class="fa fa-graduation-cap"></i> @lang("profile.education")</a>
                        <a class="nav-link" href="#"><i class="fas fa-hand-rock"></i> @lang("profile.experience")</a>
                        <a class="nav-link" href="#"><i class="fa fa-trophy"></i> @lang("profile.other_information")</a>
                        <hr>
                        <a class="nav-link" href="#"><i class="fa fa-wrench"></i> @lang("profile.account_settings")</a>
                    </nav>
                </div>
            </div>
            <div class="col-md-7">
                <edit-personal-info></edit-personal-info>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
@endsection