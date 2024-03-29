import Vue from 'vue'

Vue.component('volunteer-tabs', require('../components/profile/volunteer/volunteerTabs'))
Vue.component('volunteer-info', require('../components/profile/volunteer/VolunteerInfo'))
Vue.component('profile-picture', require('../components/profile/profile-picture'))
Vue.component('cover-picture', require('../components/profile/cover-picture'))
Vue.component('profile-tabs', require('../components/profile/profileTabs'))
Vue.component('profile-numbers', require('../components/profile/numbers'))
Vue.component('follow-button', require('../components/profile/followButton'))

Vue.component('edit-personal-info', require('../components/profile/volunteer/personalInfo'))


// organization
Vue.component('organization-tabs', require('../components/profile/organization/organizationTabs'))
Vue.component('org-info', require('../components/profile/organization/orgInfo'))

Vue.component('edit-org-details', require('../components/profile/organization/details'))
Vue.component('org-cat-edit', require('../components/profile/organization/CatEdit'))

