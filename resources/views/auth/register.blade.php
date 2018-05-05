@extends('layouts.app')

@section("after_body")
    <div class="bgimg"></div>
@endsection
@section("content")
    <main class="image-container">
        <div class="filter"></div>

        <div class="container-fluid login-page">
            <div class="row align-items-center">
                <div class="col-sm-6 mx-auto">

                    <div class="login-form card">
                        <div class="card-body">
                            <social-buttons></social-buttons>
                            <div class="divider">
                                <hr>
                                <span>OR</span>
                            </div>
                            <p>
                                Create new account:
                            </p>
                            <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                                {{ csrf_field() }}
                                <div class="form-group">

                                    <input id="username" type="text" class="form-control" name="register_username"
                                           value="{{ old('username') }}"
                                           required autofocus placeholder="Username...">

                                    @if ($errors->has('register_username'))
                                        <span class="help-block text-danger">
                                        <strong>{{ $errors->first('register_username') }}</strong>
                                    </span>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <input id="email" type="email" class="form-control" name="register_email"
                                           value="{{ old('email') }}"
                                           required placeholder="Email...">

                                    @if ($errors->has('register_email'))
                                        <span class="help-block text-danger">
                                        <strong>{{ $errors->first('register_email') }}</strong>
                                    </span>
                                    @endif
                                </div>

                                <div class="row align-items-center">
                                    <div class="col-sm-6 form-group">
                                        <input id="password" type="password" class="form-control"
                                               name="register_password"
                                               required placeholder="Choose your password...">
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input id="password-confirm" type="password" class="form-control"
                                               name="register_password_confirmation"
                                               required placeholder="Re-Enter your password...">
                                    </div>
                                    <div class="col-sm-12">
                                        @if ($errors->has('register_password'))
                                            <span class="help-block text-danger">
                                            <strong>{{ $errors->first('register_password') }}</strong>
                                        </span>
                                        @endif
                                    </div>

                                </div>


                                <div class="form-group d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-user-plus"></i> Register
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div class="card-footer">
                            <div class="row no-gutters">
                                <a class="mr-auto" href="/login"><i class="fa fa-key"></i> Do you have an account?
                                    Login</a>
                                <a href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
@endsection
