@extends('layouts.app')

@section('content')
    <div class="landing-page image-container">
        <div class="filter"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-7 col-12 ml-auto">
                    <div class="landing-message">
                        <span class="typed"></span>
                    </div>

                </div>
                <div class="col-md-4 col-sm-5 col-12 mr-auto">
                    <div class="card card-register">
                        <h3 class="card-title text-center">Register</h3>
                        <div class="social">
                            <a href="/redirect/facebook" class="btn btn-just-icon btn-neutral btn-facebook"><i
                                        class="fab fa-facebook-f"></i></a>
                            <a href="/redirect/google" class="btn btn-just-icon btn-neutral btn-google"><i
                                        class="fab fa-google"></i></a>
                        </div>

                        <div class="division">
                            <div class="line l"></div>
                            <span>or</span>
                            <div class="line r"></div>
                        </div>
                        <form class="register-form" action="{{ route('register') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="form-group{{ $errors->has('register_email') ? " has-danger" : "" }}">
                                <label>Email</label>
                                <input type="text"
                                       class="form-control{{ $errors->has('register_email') ? " form-control-danger" : "" }}"
                                       placeholder="Email"
                                       name="register_email" id="email" value="{{ old('register_email') }}">
                                @if ($errors->has('register_email'))
                                    <div class="form-control-feedback">{{ $errors->first('register_email') }}</div>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('register_username') ? " has-danger" : "" }}">
                                <label>Username</label>
                                <input type="text"
                                       class="form-control{{ $errors->has('register_username') ? " form-control-danger" : "" }}"
                                       placeholder="Username"
                                       name="register_username" id="username" value="{{ old('register_username') }}">
                                @if ($errors->has('register_username'))
                                    <div class="form-control-feedback">{{ $errors->first('register_username') }}</div>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('register_password') ? " has-danger" : "" }}">
                                <label>Password</label>
                                <input type="password"
                                       class="form-control{{ $errors->has('register_password') ? " form-control-danger" : "" }}"
                                       placeholder="Password"
                                       name="register_password" id="password">
                                @if ($errors->has('register_password'))
                                    <div class="form-control-feedback">{{ $errors->first('register_password') }}</div>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('register_password_confirmation') ? " has-danger" : "" }}">
                                <label>Confirm Password</label>
                                <input type="password"
                                       class="form-control{{ $errors->has('register_password_confirmation') ? " form-control-danger" : "" }}"
                                       placeholder="Confirm Password"
                                       name="register_password_confirmation" id="password_confirmation">
                                @if ($errors->has('register_password_confirmation'))
                                    <div class="form-control-feedback">{{ $errors->first('register_password_confirmation') }}</div>
                                @endif
                            </div>
                            <button class="btn btn-primary btn-block btn-round">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
