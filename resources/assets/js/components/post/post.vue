<template>
    <div :class="['posts-group-item', withComments ? 'withComments' : '']">
        <div class="post-wrapper Post" :id="'post-'+post.id">
            <el-dropdown v-if="editable" trigger="click" @command="handlePostMenu">
                <span class="Post_menu-icon el-dropdown-link">
                    <i class="fas fa-angle-down"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="delete"><i class="fa fa-trash"></i> {{ trans("common.delete") }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <div class="Post_profile-picture">
                <a :href="post.user_url" class="avatar-thumb">
                    <img :src="post.profile_picture" alt="">
                </a>
            </div>
            <div class="Post_content">
                <div class="Post_content-top">
                    <a :href="post.user_url" class="Post_username">{{ post.name }}</a>
                    <span class="Post_date"> - <a :href="post.post_url">{{ post.created_at }}</a></span>
                </div>
                <div class="Post_text" v-html="post.content" :style="contentStyle"></div>
                <div class="Post_actions">
                    <div :class="['Post_action', 'Post_action-like', post.liked ? 'liked' : '']">
                        <button class="btn-link btn" @click="likePost($event)">
                            <img src="/images/like.svg" alt="">
                            <span class="Post_action-number">{{ post.likes }}</span></button>
                    </div>
                    <div class="Post_action Post_action-comment" v-if="!withComments">
                        <a :href="post.post_url" class="btn-link btn"><i class="far fa-comment-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <comments-list v-if="withComments" :post-id="post.id"></comments-list>
    </div>
</template>

<script>
    import linkifyHtml from 'linkifyjs/html';

    export default {
        name: "post",
        components: {
            CommentsList: () => import('../comments/commentsList')
        },
        data() {
            return {
                post: {
                    id: -1,
                    user_url: '',
                    name: '',
                    post_url: '',
                    created_at: '',
                    liked: false,
                    likes: 0,
                    content: '',
                    user_id: ''
                },
                contentStyle: {
                    direction: 'ltr'
                },
                editable: false
            }
        },
        props: {
            postData: {
                type: Object
            },
            postId: {
                type: Number
            },
            withComments: {
                type: Boolean,
                default: false
            },
            mode: String
        },
        methods: {
            likePost(event) {
                let $target = $(event.target).closest(".Post_action-like");
                let url = "/api/post/like/"
                if ($target.hasClass("liked")) {
                    url = "/api/post/unlike/"
                    this.post.likes--;
                } else {
                    this.post.likes++;
                }
                $target.toggleClass("liked");

                if (this.post && this.post.id) {
                    let postId = this.post.id
                    axios.post(url + postId)
                        .then((res) => {
                            if (res.data && !res.data.success)
                                $(event.target).closest(".Post_action-like").toggleClass("liked");
                        })
                        .catch(() => {
                            $(event.target).closest(".Post_action-like").toggleClass("liked");
                        })
                }
            },
            handlePostMenu(command) {
                switch (command) {
                    case "delete":
                        this.deletePost()
                        break
                }
            },
            deletePost() {
                axios.delete("/api/post/" + this.post.id).then(res => {
                    if (res.data && res.data.deleted) {
                        this.$emit("postDeleted", this.post.id);
                        console.log(res.data)
                        if (this.withComments)
                            window.location.href = "/"
                    }
                }).catch(res => {
                    console.log(res.data)
                })
            },
            afterGet() {
                var rtlChar = /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/mg;

                var isRTL = this.post.content.match(rtlChar);
                if (isRTL !== null) {
                    this.contentStyle.direction = 'rtl'
                    this.contentStyle.textAlign = 'right'
                }
                else {
                    this.contentStyle.direction = 'ltr'
                    this.contentStyle.textAlign = 'left'
                }

                this.post.content = this.$linkify(this.post.content)

                this.$editable(this.post.user_id, result => this.editable = result)
            }
        },
        mounted() {
            if (this.postId)
                axios.get("/api/post/" + this.postId)
                    .then((res) => {
                        this.post = res.data
                        this.afterGet()
                    })
            else {
                this.post = this.postData
                this.afterGet()
            }

        }
    }
</script>
