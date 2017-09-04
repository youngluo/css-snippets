const Eagle = require('gulp-eagle')

Eagle.config.buildPath = 'css'
Eagle.config.sourcemaps = false;

Eagle(function (mix) {
    mix.sass('./scss/*.scss')
})