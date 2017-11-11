var gulp = require('gulp'),
    //connect = require('gulp-connect'),
    //to5 = require('gulp-6to5'),
    reload = require('gulp-livereload');

gulp.task('reload', function () {
    return gulp.src(['src/js/*.js', 'src/views/*.pug'])
        //.pipe(to5())
        //.pipe(gulp.dest('dist/js'))
        .pipe(reload());
});

gulp.task('watch', function () {
    reload.listen();
    gulp.watch(['src/js/*.js', 'src/views/*.pug'], ['reload']);
});
