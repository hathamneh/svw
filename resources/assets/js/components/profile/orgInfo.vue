<template>
    <div class="card sidebar-card">
        <div class="card-body">
            <div class="sidebar-section section-bio" v-if="organization.about != null">
                <div class="section-title">About</div>
                {{ organization.about }}
            </div>
            <div class="sidebar-section section-personalInfo">
                <ul>
                    <li v-if="organization.founded_date != null"><b>Founded at</b>: <span>{{ organization.founded_date
                        }}</span></li>
                    <li v-if="organization.city != null"><b>Location</b>: <span>{{ organization.city }}, {{ organization.country }}</span></li>
                    <li v-else><b>Location</b>: <span>{{ organization.country }}</span></li>
                    <li><b>Category</b>: <span>{{ organization.category }}</span></li>
                    <li v-if="organization.specialities != ''"><b>Specialities</b>: <span>{{ organization.specialities }}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "org-info",
        data() {
            return {
                organization: {},
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
                axios.get('/api/organization' + id_url)
                    .then((response) => {
                        //console.log(response.data)
                        this.organization = response.data
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