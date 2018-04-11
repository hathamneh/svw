<template>
    <div class="comments-wrapper">
        <div class="comments-group">
            <comment-item v-for="(comment, i) in comments" :key="i" :comment-data="comment"></comment-item>
            <div class="comments-group-item new-comment-wrapper">
                <new-comment></new-comment>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comments-list",
        data() {
            return {
                comments: this.commentsData
            }
        },
        props: {
            commentsData: Array,
            postId: Number
        }
    }
</script>
