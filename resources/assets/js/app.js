import Typed from 'typed.js';
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import VueAutosize from 'vue-autosize'
import Nl2br from 'vue-nl2br'

Vue.component('nl2br', Nl2br)
fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)


import '../sass/element-vars.scss';


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

Vue.use(Element,{ locale })
Vue.use(VueAutosize)

Vue.prototype.trans = (string, args) => {
    let value = _.get(window.i18n, string, string);

    _.eachRight(args, (paramVal, paramKey) => {
        value = _.replace(value, `:${paramKey}`, paramVal);
    });
    return value;
};

require('./Auth') 
require('./register-components/shared-components')
require('./register-components/registration-wizard')
require('./register-components/profile-components')
require('./register-components/post-components')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

$(document).ready(function () {
    if ($('.typed').length)
        var typed = new Typed('.typed', {
            strings: ["A Place for the Volunteers of the World."],
            typeSpeed: 75
        });
});