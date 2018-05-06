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

    @yield("extraStyles")
</head>
<body class="{{ $body_classes ?? "" }}{{ isset($wizard) ?: " nav-fixed" }}">
@yield("after_body")

<div id="app">
    <nav class="navbar navbar-expand-md{{ isset($wizard) ? " transparent-bg" : " fixed-top" }}">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ url('/') }}">Social<br>Volunteer<br>Work</a>

            <div class="d-md-none navbar-nav mr-2">
                @guest
                    @if(!isset($login) || !$login)
                        <a href="/login" class="btn btn-sm btn-secondary"><i class="fa fa-key"></i> Login</a>
                    @endif
                @endguest
            </div>
            <div class="d-flex" style="flex:1;">
                @auth
                    @if(!isset($wizard))
                        <form action="{{ route("search") }}" class="header-search-form d-none d-md-flex">
                            <input type="text" placeholder="Find Organization, Events, Volunteers ..."
                                   name="s" value="{{ $s ?? "" }}" class="form-control">
                            <input type="hidden" name="type" value="{{ $type ?? "" }}">
                            <button class="search-button" type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    @endif
                @endauth
                <div class="navbar-nav ml-auto ">
                    @guest
                        @if(!isset($login) || !$login)
                            <form class="form-login d-none d-md-flex" action="{{ route('login') }}" method="post">
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
                        <ul class="nav nav-pills header-navigation">
                            @if(!isset($isSearch))
                                <li class="nav-item d-md-none">
                                    <a class="nav-link px-3 search-mobile-toggle" href="/search">
                                        <i class="fa fa-search"></i>
                                    </a>
                                </li>
                            @endif
                            <li class="nav-item">
                                <a class="nav-link" href="{{{ auth()->user()->profile_url }}}">
                                    <img src="{{ auth()->user()->profile_picture }}" width="25"
                                         alt="{{{ auth()->user()->name }}}"> <span
                                            class="d-none d-md-inline">{{{ auth()->user()->name }}}</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle px-3" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="{{ $current_user->edit_url }}"><i
                                                class="fa fa-cogs"></i> Profile Settings</a>
                                    <div class="dropdown-divider"></div>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                          style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                                    ><i class="fa fa-sign-out-alt"></i> Logout</a>
                                </div>
                            </li>
                        </ul>

                    @endguest
                </div>
            </div>
        </div>
    </nav>
    <div class="search-mobile{{ isset($isSearch) ? " expanded in-search-page" : "" }}">
        <form action="{{ route("search") }}" class="header-search-form">
            <input type="text" placeholder="Find Organization, Events, Volunteers ..."
                   name="s" value="{{ $s ?? "" }}" class="form-control">
            <input type="hidden" name="type" value="{{ $type ?? "" }}">
            <button class="search-button" type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>

    @yield('content')
    @yield("page_footer")
</div>

<!-- Scripts -->
<script src="{{ route("assets.lang") }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
