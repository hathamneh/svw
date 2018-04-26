<template>
    <users-list class="memberships" :users="memberships"></users-list>
</template>

<script>
    export default {
        name: "membership",
        data() {
            return {
                memberships: []
            }
        },
        props: {
            userId: Number
        },
        methods: {
            loadMemberships() {
                let url = '/api/volunteer/memberships'
                if (this.userId)
                    url = '/api/volunteer/' + this.userId + '/memberships'
                axios.get(url)
                    .then(res => {
                        console.log(res.data)
                        if (res.data && Array.isArray(res.data))
                            this.memberships = res.data
                    })
            }
        },
        mounted() {
            this.loadMemberships()
        }
    }
</script>
