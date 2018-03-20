import Typed from 'typed.js';
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import '../sass/element-vars.scss';


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

Vue.use(Element,{ locale })

require('./Auth')
require('./shared-components')
require('./registration-wizard')
require('./profile-components')

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