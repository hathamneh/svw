<template>
    <div class="org-members users-list row">
        <div class="users-list__item col-sm-6"
             v-for="member in members">
            <a class="item-link" :href="member.profile_url">
                <div class="item-main">
                    <div class="item-image">
                        <div class="avatar-thumb large">
                            <img :src="member.profile_picture" alt="">
                        </div>
                    </div>
                    <div class="item-content">
                        <h3>{{ member.full_name }}</h3>
                        <p>@{{ member.username }}</p>
                    </div>
                </div>
            </a>
        </div>
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
        props: {
            userId: Number
        },
        methods: {
            loadMembers() {
                let url = "/api/organization/members"
                if(this.userId)
                    url = "/api/organization/"+this.userId+"/members"
                axios.get(url)
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
