<template>
    <div class="profile-numbers">
        <div class="profile-numbers_item followers">
            <div class="item-number">{{ followers }}</div>
            <div v-if="isOrg">Members</div>
            <div v-else>Followers</div>
        </div>
        <div class="profile-numbers_item events" v-if="showEvents">
            <span class="item-number">{{ events }}</span>
            <div>Events</div>
        </div>
        <div class="profile-numbers_item followers" v-else>
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
                followers: 0,
                events: 0,
                showEvents: this.isOrg && this.mode === "other"
            }
        },
        props: {
            userId: {
                type: Number,
                required: true
            },
            isOrg: Boolean,
            mode: String
        },
        methods: {
            refresh() {
                if (this.userId > 0) {
                    axios.get("/api/user/" + this.userId + "/follow/numbers").then((res) => {
                        if (res.data) {
                            if (res.data.followers) this.followers = res.data.followers
                            if (res.data.following) this.following = res.data.following
                            if (this.isOrg && res.data.events) this.events = res.data.events
                        }
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
