import Vue from 'vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(VueFormWizard);

Vue.component('my-wizard', require('./components/wizard/myWizard'))

// wizard tabs
Vue.component('w-account-type', require('./components/wizard/account-type'));
Vue.component('w-about', require('./components/wizard/about'));
Vue.component('w-step3', require('./components/wizard/step3'));
Vue.component('w-experience', require('./components/wizard/experience'));
Vue.component('w-education', require('./components/wizard/education'));
Vue.component('w-more', require('./components/wizard/more/more'));
Vue.component('add-more', require('./components/wizard/more/addMore'));

Vue.component('education-item', require('./components/EducationItem'))
Vue.component('experience-item', require('./components/ExperienceItem'))