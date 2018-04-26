<template>
    <users-list class="org-members" :users="members"></users-list>
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
