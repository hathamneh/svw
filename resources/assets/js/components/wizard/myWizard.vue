<template>

    <div>
        <form action="/register/wizard" method="POST" id="wizardForm">
            <input type="hidden" name="_token" :value="csrf_token">
            <input type="hidden" name="data" :value="JSON.stringify(formData)">
        </form>
        <!--        You can switch " data-color="orange" "  with one of the next bright colors: "blue", "green", "orange", "red", "azure"          -->
        <form-wizard title="Create your profile" subtitle="This information will let us know more about you."
                     color="#51cbce" @on-validate="handleValidation"
                     @on-error="handleErrorMessage" @on-complete="completed">
            <tab-content title="Account Type" icon="fa fa-users" :before-change="validateType">
                <w-account-type @accTypeUpdated="(val) => { formData.accountType = val}"></w-account-type>
            </tab-content>
            <tab-content title="About" icon="fa fa-user-circle" :before-change="validateAbout">
                <w-about :old="old"
                         :countries="countries" @aboutUpdated="(val) => { formData.personal_info = val }"></w-about>
            </tab-content>
            <tab-content title="Experience" icon="fa fa-certificate">
                <w-step3 @step3Updated="(val) => { formData.educationAdded = val.education; formData.experienceAdded= val.experience; }"></w-step3>
            </tab-content>
            <tab-content title="More" icon="fa fa-trophy">
                <w-more @newCaps="(val) => { formData.capabilities = val }"></w-more>
            </tab-content>
            <div v-if="errorMsg">
                <el-alert type="error" v-for="(error , index) in errorMsg" :closable="false" :key="index" :title="error"></el-alert>
            </div>
        </form-wizard>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                errorMsg: "",
                formData: {
                    accountType: "",
                    personal_info: {},
                    educationAdded: {},
                    experienceAdded: {},
                    capabilities: [],
                },
                csrf_token: ""
            };
        },
        methods: {
            handleValidation(isValid, tabIndex) {
                console.log('Tab: ' + tabIndex + ' valid: ' + isValid)
            },
            handleErrorMessage(errorMsg) {
                this.errorMsg = errorMsg
            },
            validateType() {
                return new Promise((resolve, reject) => {
                    if (this.formData.accountType === "")
                        reject(["Please select your account type first"]);
                    else
                        resolve(true);

                })
            },
            validateAbout() {
                let errors = []
                let personal_info = this.formData.personal_info;
                return new Promise((resolve, reject) => {
                    if (personal_info.first_name === undefined || personal_info.first_name === "")
                        errors.push("First name is required")
                    if (personal_info.last_name === undefined || personal_info.last_name === "")
                        errors.push("Last name is required")
                    if (personal_info.birthday === undefined || personal_info.birthday === "")
                        errors.push("Birthday is required")
                    if (personal_info.gender === undefined || personal_info.gender === "")
                        errors.push("Gender is required")
                    if (personal_info.country === undefined || personal_info.country === "")
                        errors.push("Country is required")
                    if (personal_info.city === undefined || personal_info.city === "")
                        errors.push("City is required")
                    if (personal_info.phone === undefined || personal_info.phone === "")
                        errors.push("Phone number is required")


                    if (errors.length)
                        reject(errors)
                    else
                        resolve(true)
                })
            },
            completed() {
                $("#wizardForm").submit();
            }
        },
        props: {
            old: Object,
            countries: Object,
        },
        mounted() {
            this.csrf_token = $("meta[name='csrf-token']").attr('content')
        }
    }
</script>