<template>
    <div class="row">
        <w-education @educationAdded="(val) => { step3.education = val }"></w-education>
        <w-experience @experienceAdded="(val) => { step3.experience = val }"></w-experience>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                step3: {
                    education: [],
                    experience: []
                }
            }
        },
        watch: {
            step3: {
                handler(val) {
                    this.$emit('step3Updated', val);
                },
                deep: true
            }

        },
    }
</script>