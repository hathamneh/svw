@extends("layouts.appWithFooter")

@section("extraStyles")
    <style>
        .full-height {
            height: 75vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .content {
            text-align: center;
            color: #999;
        }

        .title {
            font-size: 36px;
            padding: 20px;
            font-family: 'Fugaz One', cursive;
        }
    </style>
@endsection

@section("content")
    <main>
        <div class="flex-center position-ref full-height">
            <div class="content d-flex flex-column flex-center">
                <i class="fa fa-exclamation-circle fa-5x"></i>
                <div class="title">
                    @yield('message')
                </div>
                <hr>
                <span>
                @yield('details')
            </span>

            </div>
        </div>
    </main>
@endsection