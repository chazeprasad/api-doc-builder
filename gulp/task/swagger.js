import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import browserSync from 'browser-sync';


gulp.task('swagger', function () {
    return gulp.src(config.swagger.src)
        .pipe(changed(config.swagger.dest)) // Ignore unchanged files
        // Optimize
        .pipe(gulp.dest(config.swagger.dest))
        .pipe(browserSync.stream());
});


