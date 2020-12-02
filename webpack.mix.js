const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const postcssColorMod = require('postcss-color-mod-function');

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/css/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js'), postcssColorMod() ],
  });
