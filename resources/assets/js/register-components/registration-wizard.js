import Vue from 'vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(VueFormWizard);

Vue.component('my-wizard', require('../components/wizard/myWizard'))

// wizard tabs
Vue.component('w-account-type', require('../components/wizard/account-type'));
Vue.component('w-about', require('../components/wizard/about'));
Vue.component('w-step3', require('../components/wizard/step3'));
Vue.component('w-more', require('../components/wizard/more/more'));
Vue.component('add-more', require('../components/wizard/more/addMore'));

