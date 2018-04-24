<template>
    <div class="comments-wrapper">
        <div class="comments-group">
            <transition-group name="fade">
                <comment-item v-for="(comment, i) in comments" :key="comment.id" :comment-data="comment"></comment-item>
            </transition-group>
            <div class="comments-group-item new-comment-wrapper">
                <new-comment :post-id="postId" @newCommentAdded="appendComment"></new-comment>
            </div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

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
            },
            deleteComment(id) {
                console.log(id)
                this.comments = this.comments.filter(n => {
                    return n.id !== id
                })
            },
            loadComments() {
                let url = '/api/post/'+this.postId+'/comment'
                axios.get(url)
                    .then(res => {
                        console.log(res.data)
                        this.comments = res.data
                    })
            }
        },
        mounted() {
            this.loadComments()
            EventBus.$on('commentDeleted', this.deleteComment)
        }
    }
</script>
