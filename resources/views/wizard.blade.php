@extends("layouts.app")

@section('content')
    <main class="image-container">
        <div class=" set-full-height register-wizard">
            <div class="filter"></div>

            <!--   Big container   -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-8 mx-auto">

                        <!--      Wizard container        -->
                        <div class="wizard-container">

                            <div class="card wizard-card" id="wizardProfile">
                                <my-wizard :old="{{ json_encode(Session::getOldInput(),JSON_FORCE_OBJECT) }}"
                                           :countries="{{ json_encode($countries) }}"
                                           :user_id="{{ auth()->id() }}"></my-wizard>
                            </div>
                        </div> <!-- wizard container -->
                    </div>
                </div><!-- end row -->
            </div> <!--  big container -->
        </div>
    </main>
@endsection