<template>
    <div class="normal-message">
        <i :class="icon"></i>
        <span>{{ text }}</span>
    </div>
</template>

<script>
    export default {
        name: "normal-message",
        data() {
            return {
                icon: "fa fa-info-circle",
                text: this.$slots.default[0].text
            }
        },
    }
</script>
