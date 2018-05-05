<template>
    <div>
        <h5 class="info-text"> Are you a volunteer or an organization? </h5>
        <div class="row">
            <div class="col-sm-8 offset-sm-2 row">
                <div class="col-sm-6">
                    <div class="choice" data-toggle="wizard-radio">
                        <input type="radio" id="volunteer-type" name="account-type" value="volunteer">
                        <div class="card card-checkboxes card-hover-effect" @click="accType = 'volunteer'">
                            <i class="fa fa-user-circle"></i>
                            <p>Volunteer</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="choice" data-toggle="wizard-radio">
                        <input type="radio" id="org-type" name="account-type" value="organization">
                        <div class="card card-checkboxes card-hover-effect" @click="accType = 'organization'">
                            <i class="fa fa-building"></i>
                            <p>Organization</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-12">
                <div class="alert alert-danger w-100" v-for="error in errorsData">
                    {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                accType: "",
                errorsData: this.errors
            };
        },
        props: {
            errors: Array
        },
        watch: {
            accType: function (val, oldVal) {
                this.$emit("accTypeUpdated", val)
            },
            errors: function(val, old) {
                this.errorsData = val
            }
        },
        mounted() {
            this.errorsData = this.errors
        }
    }
</script>
