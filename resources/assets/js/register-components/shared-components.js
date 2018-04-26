import Vue from 'vue'

Vue.component('loading-component', require("../components/shared/LoadingComponent"))

Vue.component('normal-message', require("../components/shared/messages/normalMessage"))
Vue.component('list-message', require("../components/shared/messages/listMessage"))

Vue.component('w-experience', require('../components/shared/experience'))
Vue.component('w-education', require('../components/shared/education'))

Vue.component('education-item', require('../components/shared/EducationItem'))
Vue.component('experience-item', require('../components/shared/ExperienceItem'))

Vue.component('home-tabs', require('../components/homeTabs'))
Vue.component('users-list', require('../components/shared/usersList'))