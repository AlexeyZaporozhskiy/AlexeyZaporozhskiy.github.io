
 
var gulp            = require('gulp');
    sass            = require('gulp-sass');
    browserSync     = require('browser-sync').create();
    autoprefixer    = require('gulp-autoprefixer');
    cleanCSS        = require('gulp-clean-css');
    wait	        = require('gulp-wait'),

    dir = {
    styles: {
        src: 'src/sass/*.+(scss|sass)',
        project: 'production/css'
    }
}; 

function serv() {
    browserSync.init({
        server: "./"
    });
}

function watch(){
    gulp.watch(dir.styles.src, style).on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
}

function style() {
    return gulp.src(dir.styles.src)
        .pipe(wait(500))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        //.pipe(cleanCSS({
           // level: 2
        //}))
        .pipe(gulp.dest(dir.styles.project))
        .pipe(browserSync.stream());

}

var server = gulp.parallel(serv, watch);

gulp.task('default', server);