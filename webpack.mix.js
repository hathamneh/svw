let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/assets/js/app.js',
    'resources/assets/js/bootstrap-datetimepicker.min.js',
    'resources/assets/js/bootstrap-switch.min.js',
    'resources/assets/js/paper-kit.js',], 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sourceMaps().version();
