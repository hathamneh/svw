<template>
    <div class="list-message">
        <i :class="icon"></i>
        <span>{{ text }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icon: "fa fa-info-circle",
                text: this.$slots.default[0].text
            }
        },
        mounted() {

        }
    }
</script>