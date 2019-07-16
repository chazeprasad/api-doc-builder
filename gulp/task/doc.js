import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import browserSync from 'browser-sync';


gulp.task('doc', function () {
    return gulp.src(config.doc.src)
        .pipe(changed(config.doc.dest)) // Ignore unchanged files
        // Optimize
        .pipe(gulp.dest(config.doc.dest))
        .pipe(browserSync.stream());
});


