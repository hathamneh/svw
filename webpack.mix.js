let mix = require('laravel-mix');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');
const webpackConfig = {};


if (mix.config.inProduction) {
    webpackConfig.plugins.push(new BabiliPlugin());

    mix.options({
        uglify: false
    });
    mix.disableNotifications();
    //    mix.version();

} else {
    mix.sourceMaps().version()
}


mix.webpackConfig(webpackConfig);

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
   .copyDirectory('resources/assets/images', 'public/images');

