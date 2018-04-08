<template>
    <div class="card sidebar-card">
        <div class="card-body">
            <div class="sidebar-section section-bio">
                <div class="section-title">Bio</div>
                <template v-if="volunteer.bio != null">{{ volunteer.bio }}</template>
                <normal-message v-else>{{ trans("profile.no_bio") }}</normal-message>
            </div>
            <div class="sidebar-section section-personalInfo">
                <div class="section-title" style="margin: 1rem 0;">Personal Information</div>
                <ul>
                    <li><i class="fa fa-birthday-cake"></i> Born in October 23, 1995</li>
                    <li><i class="fa fa-male"></i> {{ volunteer.gender }}</li>
                    <li><i class="fa fa-map-marker"></i> Lives in {{ volunteer.city }}, {{ volunteer.country }}</li>
                    <li><i class="fa fa-phone"></i> <a :href="'tel://' + volunteer.phone">Contact {{ volunteer.phone }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "volunteer-info",
        data() {
            return {
                volunteer: {},
                currentUser: false,
            }
        },
        props: {
            user_id: {
                type: Number,
                default: () => (0)
            }
        },
        methods: {
            loadData() {
                let id_url = ""
                if (this.user_id)
                    id_url = "/" + this.user_id
                axios.get('/api/volunteer' + id_url)
                    .then((response) => {
                        //console.log(response.data)
                        this.volunteer = response.data
                    })
                    .catch(function (response) {
                        logError(response.data, "unauthorized")
                        this.currentUser = false
                    });
            }
        },
        created() {
            window.currentUser().then((response) => {
                this.currentUser = response.data
            }).catch((response) => {
                logError(response.data, "unauthorized")
            })
            this.loadData()
        }
    }
</script>