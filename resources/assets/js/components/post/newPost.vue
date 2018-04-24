<template>
    <div class="new-post">
        <div class="new-post_content">
            <el-input type="textarea" name="post_text" id="post_text" v-model="content" cols="30" rows="1"
                      class="form-control"
                      :autosize="{ minRows: 1, maxRows: 8}" :disabled="!editEnabled"
                      placeholder="What is your status" @focus="showActions" @blur="blurTextarea"></el-input>
            <div class="new-post_actions" style="display: none;">
                <div class="add-post-attachment">
                    <button class="btn btn-primary btn-sm" title="Upload Image" :disabled="!editEnabled"><i
                            class="fa fa-image"></i></button>
                </div>
                <button @click="publishPost" :disabled="!btnEnabled" class="btn btn-secondary btn-sm btn-publish">Post
                </button>
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
                editEnabled: true,
            }
        },
        methods: {
            showActions() {
                $(".new-post_actions").slideDown();
                $(".new-post").addClass("focused");
            },
            blurTextarea() {
                $(".new-post").removeClass("focused");
            },
            publishPost() {
                if (this.content !== "") {
                    this.editEnabled = false
                    console.log("clicked")
                    axios.post("/api/post", {
                        "content": this.content
                    }).then((res) => {
                        if (res.data) {
                            EventBus.$emit("postAdded", res.data)
                        }
                    }).catch((res) => {
                        console.error(res)
                    }).finally(() => {
                        this.editEnabled = true
                        this.content = ""
                    })
                }
            }
        },
        mounted() {
            let $textarea = $('.new-post textarea')
            var rtlChar = /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/mg;
            $textarea.keyup(function () {
                var isRTL = this.value.match(rtlChar);
                if (isRTL !== null) {
                    this.style.direction = 'rtl';
                }
                else {
                    this.style.direction = 'ltr';
                }
            });
        }
    }
</script>
