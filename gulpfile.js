var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    autoprefixer = require('autoprefixer'), //https://www.npmjs.com/package/autoprefixer#gulp
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'), //https://www.npmjs.com/package/gulp-sourcemaps
    environments = require('gulp-environments'), //https://www.npmjs.com/package/gulp-environments
    concat = require('gulp-concat'), //https://www.npmjs.com/package/gulp-concat
    uglify = require('gulp-uglify'), //https://www.npmjs.com/package/gulp-uglify
    runSequence = require('run-sequence'), //https://www.npmjs.com/package/run-sequence
    del = require('del'), //https://www.npmjs.com/package/del
    plumber = require('gulp-plumber'), //https://www.npmjs.com/package/gulp-plumber
    // setup environments
    development = environments.development, //use flag --env development
    production = environments.production //use flag --env production
;

var paths = {
    scsssrc: './src/scss/**/*.scss',
    scssout: './src'
}



//SASS Processor//
gulp.task('app-scss', () => {
    var postCssOpts = [
        // autoprefixer({ 
        //     browsers: ['last 2 versions', '> 2%'],
        //     cascade: false 
        // }),
        cssnano
    ];
    return gulp.src(paths.scsssrc)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(postCssOpts))
        .pipe(rename('App.min.css'))
        .pipe(development(sourcemaps.write('.'))) //write sourcemap only when run as development use --env production to run as production to remvoe sourcemap in prod env
        .pipe(gulp.dest(paths.scssout));
});
//SASS Processor *** END//



gulp.task('default', gulp.series(
    gulp.parallel('app-scss'),
    (done) => {
        gulp.watch(paths.scsssrc, gulp.parallel('app-scss')),
        done();
    })
);