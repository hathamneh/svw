import Vue from 'vue'

Vue.component("new-post", require('../components/post/newPost'))
Vue.component("post", require('../components/post/post'))
Vue.component("post-list", require('../components/post/postList'))

Vue.component("comment-item", require('../components/comments/comment'))
Vue.component("comments-list", require('../components/comments/commentsList'))
Vue.component("new-comment", require('../components/comments/newComment'))