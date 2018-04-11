<template>
    <div class="new-comment">
        <textarea name="comment_text" id="comment_text" v-model="content" cols="30" rows="1" class="form-control"
                  v-autosize :enabled="editEnabled" @keydown="commentInputKey"
                  placeholder="Add comment..."></textarea>
        <button class="new-comment__button" @click="addComment">
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
        },
        methods: {
            addComment() {
                if(this.content !== "") {
                    this.btnEnabled = false
                    axios.post("/api/post/"+this.postId+"/comment", {
                        "content": this.content
                    })
                        .then(res => {
                            this.$emit("newCommentAdded", res.data)
                        })
                        .finally(() => {
                            this.content = ""
                            this.btnEnabled = true
                        })
                }
            },
            commentInputKey(e) {
                if(e.ctrlKey && e.keyCode === 13) {
                    $(e.target).val(function (i, old) {
                        return old+ "\n";
                    })
                    return
                }
                if (e.keyCode === 13) {
                    e.preventDefault()
                    this.addComment()
                }
            }
        }
    }
</script>