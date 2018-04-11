@extends("layouts.appWithFooter")

@section("content")
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <post :post-id="{{ $post_id  }}" :with-comments="true"></post>
            </div>
        </div>
    </div>
@endsection