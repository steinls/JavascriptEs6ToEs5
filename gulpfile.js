const gulp = require('gulp');
var $ = require('gulp-load-plugins')();
 
gulp.task('default', () => {
    return gulp.src('es6/**/*.js')
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});