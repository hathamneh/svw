<template>
    <div class="row">
        <div class="col-md-6">
            <b>Education</b><br>
            <span style="font-size: 0.8rem;">What major you are studying?</span>
            <hr>
            <w-education @educationAdded="(val) => { step3.education = val }"></w-education>
        </div>
        <div class="col-md-6">
            <b>Experience</b><br>
            <span style="font-size: 0.8rem;">Do you have any previous experience in a volunteering?</span>
            <hr>
            <w-experience @experienceAdded="(val) => { step3.experience = val }"></w-experience>
        </div>
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