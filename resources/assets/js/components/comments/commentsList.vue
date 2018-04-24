<template>
    <div class="comments-wrapper">
        <div class="comments-group">
            <transition-group name="fade">
                <comment-item v-for="(comment, i) in comments" :key="i" :comment-data="comment"></comment-item>
            </transition-group>
            <div class="comments-group-item new-comment-wrapper">
                <new-comment :post-id="postId" @newCommentAdded="appendComment"></new-comment>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comments-list",
        components: {
            CommentItem: () => import('./comment'),
            NewComment: () => import('./newComment')
        },
        data() {
            return {
                comments: this.commentsData || []
            }
        },
        props: {
            commentsData: Array,
            postId: Number
        },
        methods: {
            appendComment(val) {
                this.comments.push(val)
            }
        }
    }
</script>
