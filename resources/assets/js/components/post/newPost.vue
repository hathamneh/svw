<template>
    <div class="new-post">
        <!--<div class="new-post_avatar">-->
            <!--<div class="avatar-thumb">-->
                <!--<img src="/images/default-avatar.jpg" alt="User Name">-->
            <!--</div>-->
        <!--</div>-->

        <div class="new-post_content">
                    <textarea name="post_text" id="post_text" cols="30" rows="1" class="form-control" v-autosize
                              placeholder="What is your status" @focus="showActions" @blur="blurTextarea"></textarea>
            <div class="new-post_actions" style="display: none;">
                <div class="add-post-attachment">
                    <button class="btn btn-primary btn-sm" title="Upload Image"><i class="fa fa-image"></i></button>
                </div>
                <button class="btn btn-secondary btn-sm btn-publish">Post</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "new-post",
        methods: {
            showActions() {
                $(".new-post_actions").slideDown();
                $(".new-post_content textarea").focus(function () {
                    $(".new-post").addClass("focused");
                })
            },
            blurTextarea() {
                $(".new-post_content textarea").blur(function () {
                    $(".new-post").removeClass("focused");
                })
            }
        }
    }
</script>
