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

                            <a class="nav-item nav-link active" id="nav-odetails-tab" data-toggle="tab" href="#nav-odetails"
                               role="tab" aria-controls="nav-odetails" aria-selected="true"><i
                                        class="fas fa-building"></i> @lang("profile.organization_details")</a>

                            <a class="nav-item nav-link" id="nav-category-tab" data-toggle="tab" href="#nav-category"
                               role="tab" aria-controls="nav-category" aria-selected="false"><i
                                        class="fa fa-check-square"></i> @lang("profile.organization_type")</a>

                            <hr>

                            <a class="nav-item nav-link" id="nav-account-tab" data-toggle="tab" href="#nav-account"
                               role="tab" aria-controls="nav-account" aria-selected="false"><i
                                        class="fa fa-wrench"></i> @lang("profile.account_settings")</a>

                        </div>
                    </nav>
                </div>
            </div>
            <div class="col-md-9">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-odetails" role="tabpanel" aria-labelledby="nav-odetails-tab">
                        <edit-org-details></edit-org-details>
                    </div>
                    <div class="tab-pane fade" id="nav-category" role="tabpanel" aria-labelledby="nav-category-tab">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-check-square"></i> {{ trans("profile.organization_type") }}
                            </div>
                            <div class="card-body">
                                <org-cat-edit></org-cat-edit>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">good
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection