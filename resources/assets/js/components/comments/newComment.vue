<template>
    <div class="new-comment">
        <textarea name="comment_text" id="comment_text" v-model="content" cols="30" rows="1" class="form-control"
                  v-autosize :enabled="editEnabled"
                  placeholder="Add comment..." @focus="showActions" @blur="blurTextarea"></textarea>
        <button class="new-comment__button">
            <i class="fas fa-chevron-circle-right"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: "new-comment",
        data() {
            return {
                content: "",
                editEnabled: true
            }
        },
        props: {
            postId: Number
        }
    }
</script>