import Vue from 'vue'

Vue.component('list-message', require("./components/shared/messages/listMessage"))

Vue.component('w-experience', require('./components/shared/experience'))
Vue.component('w-education', require('./components/shared/education'))

Vue.component('education-item', require('./components/shared/EducationItem'))
Vue.component('experience-item', require('./components/shared/ExperienceItem'))