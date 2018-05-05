<template>

    <div>
        <form action="/register/wizard" method="POST" id="wizardForm">
            <input type="hidden" name="_token" :value="csrf_token">
            <input type="hidden" name="data" :value="JSON.stringify(volunteerFormData)">
        </form>
        <!--        You can switch " data-color="orange" "  with one of the next bright colors: "blue", "green", "orange", "red", "azure"          -->
        <form-wizard title="Create your profile" subtitle="This information will let us know more about you."
                     color="#51cbce" @on-validate="handleValidation" shape="tab"
                     @on-error="handleErrorMessage" @on-complete="completed">
            <tab-content :before-change="validateType">
                <w-account-type :errors="errorMsg"
                        @accTypeUpdated="(val) => { volunteerFormData.accountType = val; is_org = val === 'organization'}"></w-account-type>
            </tab-content>
            <tab-content :before-change="validateAbout">
                <w-about :old="old" v-if="!is_org" :errors="errorMsg" ref="aboutFormRef"
                         :countries="countries"
                         @aboutUpdated="(val) => { volunteerFormData.personal_info = val }"></w-about>
                <w-org-about v-if="is_org" @orgAboutUpdated="(val) => {orgFormData.details = val}"
                             :countries="countries"></w-org-about>
            </tab-content>
            <tab-content :before-change="validateStep3">
                <w-step3 v-if="!is_org"
                         @step3Updated="(val) => { volunteerFormData.educationAdded = val.education; volunteerFormData.experienceAdded= val.experience; }"></w-step3>
                <org-category v-if="is_org"
                              @categoryChanged="val => orgFormData.category = val"></org-category>
            </tab-content>
            <tab-content>
                <w-more v-if="!is_org" @newCaps="(val) => { volunteerFormData.capabilities = val }"></w-more>
                <org-specialities v-if="is_org" @specialityChanged="val => orgFormData.specialities = val"></org-specialities>
            </tab-content>
        </form-wizard>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                errorMsg: [],
                volunteerFormData: {
                    accountType: "",
                    personal_info: {},
                    educationAdded: {},
                    experienceAdded: {},
                    capabilities: [],
                },
                orgFormData: {
                    details: {},
                    category: "",
                    specialities: []
                },
                csrf_token: "",
                is_org: false
            };
        },
        methods: {
            handleValidation(isValid, tabIndex) {
                //console.log('Tab: ' + tabIndex + ' valid: ' + isValid)
            },
            handleErrorMessage(errorMsg) {
                this.errorMsg = errorMsg
            },
            validateType() {
                return new Promise((resolve, reject) => {
                    if (this.volunteerFormData.accountType === "")
                        reject(["Please select your account type first"]);
                    else
                        resolve(true);

                })
            },
            validateAbout() {
                if (this.is_org)
                    return this.validateOrgDetails()
                else
                    return this.validatePersonalInfo()
            },
            validatePersonalInfo() {
                let valid = this.$refs.aboutFormRef.validateForm()
                console.log(valid)
                return new Promise((resolve, reject) => {
                    if (!valid)
                        reject()
                    else
                        resolve(true)
                })
            },
            validateOrgDetails() {
                let errors = []
                let details = this.orgFormData.details;
                return new Promise((resolve, reject) => {
                    if (details.name === undefined || details.name === "")
                        errors.push("Organization name required")
                    if (details.founded_date === undefined || details.founded_date === "")
                        errors.push("Foundation date required")
                    if (details.country === undefined || details.country === "")
                        errors.push("Country required")

                    if (errors.length)
                        reject(errors)
                    else
                        resolve(true)
                })
            },
            validateStep3() {
                let errors = [];
                if (this.is_org)
                    return new Promise((resolve, reject) => {
                        if (this.orgFormData.category === undefined || this.orgFormData.category === "")
                            errors.push("You must select category")

                        if (errors.length)
                            reject(errors)
                        else
                            resolve(true)
                    })

                return true;
            },
            submitVolunteer() {
                const loading = this.$loading({
                    lock: true,
                });
                axios.post("/api/registration/volunteer", {"data":this.volunteerFormData})
                    .then(res => {
                        console.log(res)
                        window.location.href = "/"
                    })
                    .catch(res => {
                        console.error(res)
                    })
                    .finally(() => {
                        loading.close()
                    })
            },
            submitOrganization() {
                const loading = this.$loading({
                    lock: true,
                });
                axios.post("/api/registration/organization", {"data":this.orgFormData})
                    .then(res => {
                        console.log(res)
                        window.location.href = "/"
                    })
                    .catch(res => {
                        console.error(res)
                    })
                    .finally(() => {
                        loading.close()
                    })
            },
            completed() {
                //$("#wizardForm").submit();
                if (this.is_org) {
                    this.submitOrganization()
                } else {
                    this.submitVolunteer()
                }
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