const gulp = require('gulp'),
    connect = require('gulp-connect'),
    //pipe = require('gulp-pipe'),
    reload = require('gulp-livereload');

// gulp.task('reloadPage', function () {
//    return gulp.reload();
// });

gulp.task('watch', function () {
    reload.listen();
    gulp.watch('/app.js', reload());
});
