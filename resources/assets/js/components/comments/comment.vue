<template>
    <div class="comments-group-item Comment">
        <el-dropdown v-if="editable" trigger="click" @command="handleCommentMenu">
            <span class="Comment_menu-icon el-dropdown-link">
                <i class="fas fa-angle-down"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="delete"><i class="fa fa-trash"></i> {{ trans("common.delete") }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="Comment_profile-picture">
            <a :href="comment.user_url" class="avatar-thumb">
                <img :src="comment.profile_picture" alt="">
            </a>
        </div>
        <div class="Comment_content">
            <div class="Comment_content-top">
                <a :href="comment.user_url" class="Comment_username">{{ comment.name }}</a>
                <span class="Comment_date"> - <a href="#">{{ comment.created_at }}</a></span>
            </div>
            <div class="Comment_text" v-html="comment.content"></div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "comment-item",
        data() {
            return {
                comment: this.commentData,
                editable: false
            }
        },
        props: {
            commentData: Object,
            commentId: Number
        },
        methods: {
            handleCommentMenu(command) {
                switch (command) {
                    case "delete":
                        this.deleteComment()
                        break
                }
            },
            deleteComment() {
                let postId = this.comment.post_id
                let url = "/api/post/"+postId+"/comment/" + this.comment.id
                axios.delete(url).then(res => {
                    if (res.data && res.data.deleted) {
                        EventBus.$emit("commentDeleted", this.comment.id);
                        console.log(res.data)
                    }
                }).catch(res => {
                    console.log(res.data)
                })
            },
        },
        mounted() {
            this.comment.content = this.$linkify(this.comment.content)
            this.$editable(this.comment.user_id, result => this.editable = result)
        }
    }
</script>
