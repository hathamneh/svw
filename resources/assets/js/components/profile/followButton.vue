<template>
    <div>
    <button v-if="!followed" @click="follow" :disabled="disabled"
            class="btn btn-primary btn-follow"><i class="fa fa-user-plus"></i>
        <template v-if="isOrg">Join</template>
        <template v-else>Follow</template>
    </button>
    <button v-else @click="unfollow" :disabled="disabled"
            class="btn btn-light btn-unfollow"><i class="fa fa-user"></i>
        <template v-if="isOrg">Leave</template>
        <template v-else>Unfollow</template>
    </button>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "follow-button",
        data() {
            return {
                followed: false,
                disabled: false,
                isOrg: this.type == 'organization'
            }
        },
        props: {
            userId: {
                type: Number,
                required: true
            },
            type: String
        },
        methods: {
            follow() {
                if(this.userId > 0) {
                    this.disabled = true
                    axios.post("/api/user/follow", {
                        "user_id": this.userId
                    }).then((res)=>{
                        if(res.data && res.data.followed) {
                            this.followed = true
                            EventBus.$emit("userFollowed")
                        }
                    }).finally(()=> {
                        this.disabled = false
                    })
                }
            },
            unfollow() {
                if(this.userId > 0) {
                    this.disabled = true
                    axios.post("/api/user/unfollow", {
                        "user_id": this.userId
                    }).then((res)=>{
                        if(res.data && res.data.unfollowed) {
                            this.followed = false
                            EventBus.$emit("userUnfollowed")
                        }
                    }).finally(()=> {
                        this.disabled = false
                    })
                }
            },
            check() {
                if(this.userId > 0) {
                    axios.get("/api/user/following/check/"+this.userId).then((res)=>{
                        if(res.data && res.data.followed) {
                            this.followed = true
                        }
                    })
                }
            }
        },
        created() {
            this.check()
        }
    }
</script>
