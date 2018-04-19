@extends('errors.layout2')


@section('message', $exception->getMessage())
@section('details', " 404 Page Not found!")
