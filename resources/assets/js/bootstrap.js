window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    require('jquery-validation');
    require('moment');

} catch (e) {
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

window.token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.token.content;
    window.intReqHeaders = {
        'X-CSRF-TOKEN': window.token.content,
        'accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


require('./helpers')

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

try {
    window.onerror = logError = function (err, line) {
        //api url
        var apiUrl = '/api/logging/error';

        //suppress browser error messages
        var suppressErrors = true;

        axios.post(apiUrl, {
            errorMsg: err,
            errorLine: line,
            queryString: document.location.search,
            url: document.location.pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent
        });

        return suppressErrors;
    };
} catch (e) {
}