<template>
    <div class="row memberships users-list">
        <div class="col-sm-6 users-list__item" v-for="membership in memberships" :key="membership.id">
            <a :href="membership.profile_url" class="item-link">
                <div class="item-main">
                    <div class="item-image">
                        <div class="avatar-thumb large">
                            <img :src="membership.profile_picture" alt="">
                        </div>
                    </div>
                    <div class="item-content">
                        <h3>{{ membership.name }}</h3>
                        <p>@{{ membership.username }}</p>
                    </div>
                </div>
            </a>
        </div>

    </div>
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
