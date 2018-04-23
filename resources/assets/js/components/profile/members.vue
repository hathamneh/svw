<template>
    <div class="org-members-list">
        <ul>
            <li class="members-list__item col-sm-6"
                v-for="member in members">
                <a :href="member.profile_url">
                    <div class="row">
                        <div class="col-sm-3 item-image">
                            <img :src="member.profile_picture" alt="">
                        </div>
                        <div class="col-sm-9 item-content">
                            <h3>{{ member.full_name }}</h3>
                            <p class="text-muted">@{{ member.username }}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "members",
        data() {
            return {
                members: []
            }
        },
        methods: {
            loadMembers() {
                axios.get("/api/user/members")
                    .then(res => {
                        if (res.data)
                            this.members = res.data
                    })
            }
        },
        mounted() {
            this.loadMembers()
        }
    }
</script>
