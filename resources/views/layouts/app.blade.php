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
<body class="{{ $body_classes ?? "" }}{{ isset($wizard) ?: " nav-fixed" }}">
@yield("after_body")

<div id="app">
    <nav class="navbar navbar-expand-sm{{ isset($wizard) ? " transparent-bg" : " fixed-top" }}">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">Social<br>Volunteer<br>Work</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                @guest
                @else
                    @if(!isset($wizard))
                        <form action="{{ route("search") }}" class="header-search-form">
                            <input type="text" placeholder="Find Organization, Events, Volunteers ..."
                                   name="s" value="{{ $s ?? "" }}" class="form-control">
                            <button class="search-button" type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    @endif
                @endguest
                <div class="navbar-nav ml-auto ">
                    @guest
                        @if(!isset($login) || !$login)
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
                                    <button class="btn btn-sm btn-primary btn-round" type="submit"><i
                                                class="fa fa-key"></i>
                                        Login
                                    </button>
                                </div>
                                <a class='pink-text' style="font-size: 0.6rem;"
                                   href='{{ route('password.request') }}'><b>Forgot your<br>password?</b></a>
                            </form>
                        @endif
                    @else
                    <!-- Right Side Of Navbar -->

                        <el-menu mode="horizontal">
                            <el-submenu index="1">
                                <template slot="title">
                                    <a href="/volunteer/{{{ auth()->user()->username }}}"><img
                                                src="{{ asset("/images/default-avatar.jpg") }}" width="25"
                                                alt="{{{ auth()->user()->name }}}"> {{{ auth()->user()->name }}}</a>
                                </template>
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
    <main>
        @yield('content')
    </main>
    @yield("page_footer")
</div>

<!-- Scripts -->
<script src="{{ route("assets.lang") }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
