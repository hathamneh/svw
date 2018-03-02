<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body class="{{ $body_classes ?? "" }}">
@yield("after_body")

<div id="app">
    <nav class="navbar navbar-expand-sm fixed-top">
        <div class="container">
            <div class="navbar-translate">
                <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar"></span>
                    <span class="navbar-toggler-bar"></span>
                    <span class="navbar-toggler-bar"></span>
                </button>
                <a class="navbar-brand text-secondary" href="{{ url('/') }}">Social<br>Volunteer<br>Work</a>
            </div>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <div class="ml-auto">
                @guest
                            <form class="form-login" action="{{ route('login') }}" method="post">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-sm" name="login_email"
                                           placeholder="Email or Username" value="{{ old('login_email') }}">
                                    @if ($errors->has('login_email'))
                                        <div class="form-control-feedback">{{ $errors->first('login_email') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-sm" name="login_password"
                                           placeholder="Password">
                                    @if ($errors->has('login_password'))
                                        <div class="form-control-feedback">{{ $errors->first('login_password') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-round" type="submit"><i class="fa fa-key"></i>
                                        Login
                                    </button>
                                </div>
                                <a class='pink-text' style="font-size: 0.6rem;"
                                   href='{{ route('password.request') }}'><b>Forgot your<br>password?</b></a>
                            </form>

                @else
                <!-- Right Side Of Navbar -->

                        <el-menu class="el-menu-demo" mode="horizontal">
                            <el-submenu index="1">
                                <template slot="title">Welcome {{{ auth()->user()->username }}}</template>
                                <el-menu-item index="1-1">
                                    <a href="{{ route('logout') }}"
                                       onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                                    >Logout</a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                          style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </el-menu-item>
                            </el-submenu>
                        </el-menu>

                @endguest
                </div>
            </div>
        </div>
    </nav>

    @yield('content')
</div>

<!-- Scripts -->
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
