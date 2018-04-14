<template>
    <div>
        <volunteer-tabs :user_id="user_id" :mode="mode" v-if="!isOrg"></volunteer-tabs>
        <organization-tabs :user_id="user_id" :mode="mode" v-else></organization-tabs>
    </div>
</template>

<script>
    export default {
        props: {
            user_id: {
                type: Number,
                required: true
            },
            mode: String,
            isOrg: Boolean
        },
        mounted() {

        }
    };
</script>
