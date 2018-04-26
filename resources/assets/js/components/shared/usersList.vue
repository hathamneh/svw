<template>
    <div class="users-list row">
        <div class="users-list__item col-sm-6"
             v-for="user in users">
            <a class="item-link" :href="user.profile_url">
                <div class="item-main">
                    <div class="item-image">
                        <div class="avatar-thumb large">
                            <img :src="user.profile_picture" alt="">
                        </div>
                    </div>
                    <div class="item-content">
                        <h3>{{ user.full_name }}</h3>
                        <p>@{{ user.username }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "usersList",
        props: {
            users: Array
        },
    }
</script>