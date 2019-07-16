import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('serve', ['clean'], function (cb) {
    global.isProd = false;
    runSequence('doc', 'swagger', 'browser-sync', 'watch', cb)

});
