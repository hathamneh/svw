<template>
    <div class="profile-numbers">
        <div class="profile-numbers_item followers">
            <div class="item-number">{{ followers }}</div>
            <div>Follower</div>
        </div>
        <div class="profile-numbers_item followers">
            <span class="item-number">{{ following }}</span>
            <div>Following</div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "profile-numbers",
        data() {
            return {
                following: 0,
                followers: 0
            }
        },
        props: {
            userId: {
                type: Number,
                required: true
            }
        },
        methods: {
            refresh() {
                if(this.userId > 0) {
                    axios.get("/api/user/"+this.userId+"/followers?count").then((res)=>{
                        this.followers = res.data;
                    })
                    axios.get("/api/user/"+this.userId+"/following?count").then((res)=>{
                        this.following = res.data;
                    })
                }
            }
        },
        mounted() {
            this.refresh()
            EventBus.$on("userFollowed", this.refresh)
            EventBus.$on("userUnfollowed", this.refresh)
        }
    }
</script>
