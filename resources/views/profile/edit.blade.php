@extends("layouts.appWithFooter")

@section("content")
    <div class="sub-heading">
        <div class="container">
            <h3>@lang("Edit your profile")</h3>
        </div>
    </div>
    <div class="container edit-profile">
        <div class="row">
            <div class="col-md-3">
                <div class="sticky-top">
                    <small class="text-muted font-weight-bold">@lang("profile.edit_profile")</small>
                    <hr>

                    <nav>
                        <div class="nav nav-pills nav-pills-warning flex-column" id="profilePages" role="tablist">

                            <a class="nav-item nav-link active" id="nav-pinfo-tab" data-toggle="tab" href="#nav-pinfo"
                               role="tab" aria-controls="nav-pinfo" aria-selected="true"><i
                                        class="fas fa-user-circle"></i> @lang("profile.personal_information")</a>

                            <a class="nav-item nav-link" id="nav-education-tab" data-toggle="tab" href="#nav-education"
                               role="tab" aria-controls="nav-education" aria-selected="false"><i
                                        class="fa fa-graduation-cap"></i> @lang("profile.education")</a>

                            <a class="nav-item nav-link" id="nav-experience-tab" data-toggle="tab" href="#nav-experience"
                               role="tab" aria-controls="nav-experience" aria-selected="false"><i
                                        class="fas fa-hand-rock"></i> @lang("profile.experience")</a>

                            <a class="nav-item nav-link" id="nav-more-tab" data-toggle="tab" href="#nav-more"
                               role="tab" aria-controls="nav-more" aria-selected="false"><i
                                        class="fa fa-trophy"></i> @lang("profile.other_information")</a>

                            <hr>

                            <a class="nav-item nav-link" id="nav-account-tab" data-toggle="tab" href="#nav-account"
                               role="tab" aria-controls="nav-account" aria-selected="false"><i
                                        class="fa fa-wrench"></i> @lang("profile.account_settings")</a>

                        </div>
                    </nav>
                </div>
            </div>
            <div class="col-md-7">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-pinfo" role="tabpanel" aria-labelledby="nav-pinfo-tab">
                        <edit-personal-info :volunteer-id="{{ $volunteer->id }}"></edit-personal-info>
                    </div>
                    <div class="tab-pane fade" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab">hi
                    </div>
                    <div class="tab-pane fade" id="nav-experience" role="tabpanel" aria-labelledby="nav-experience-tab">how are you
                    </div>
                    <div class="tab-pane fade" id="nav-more" role="tabpanel" aria-labelledby="nav-more-tab">are you okay?
                    </div>
                    <div class="tab-pane fade" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">good
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
@endsection