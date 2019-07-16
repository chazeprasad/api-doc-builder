import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], function (cb) {

    global.isProd = false;

    runSequence('doc', 'swagger', cb);

});
