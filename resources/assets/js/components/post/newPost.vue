<template>
    <div class="new-post">
        <div class="new-post_content">
                    <textarea name="post_text" id="post_text" v-model="content" cols="30" rows="1" class="form-control"
                              v-autosize :enabled="editEnabled"
                              placeholder="What is your status" @focus="showActions" @blur="blurTextarea"></textarea>
            <div class="new-post_actions" style="display: none;">
                <div class="add-post-attachment">
                    <button class="btn btn-primary btn-sm" title="Upload Image" :enabled="editEnabled"><i
                            class="fa fa-image"></i></button>
                </div>
                <button @click="publishPost" :enabled="btnEnabled" class="btn btn-secondary btn-sm btn-publish">Post</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "new-post",
        data() {
            return {
                content: "",
                btnEnabled: (this.content !== ""),
                editEnabled: true
            }
        },
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
            },
            publishPost() {
                if (this.content !== "") {
                    this.editEnabled = false
                    console.log("clicked")
                    axios.post("/api/post", {
                        "content": this.content
                    }).then((res) => {
                        if(res.data) {
                            EventBus.$emit("postAdded", res.data)
                        }
                    }).catch((res) => {
                        console.error(res)
                    }).finally(()=>{
                        this.editEnabled = true
                    })
                }
            }
        }
    }
</script>
