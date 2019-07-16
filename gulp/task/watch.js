import config from '../config';
import gulp from 'gulp';
import debug from 'debug';

var log = debug(`API-DOCS-Watch:log`);
debug.enable(`API-DOCS-Watch:log`);

function onChange(e) {
    log('File ' + e.path + ' has been changed. Updating..');
}

gulp.task('watch', [], function () {
    global.isWatching = true;
    gulp.watch(config.doc.src, ['doc']).on('change', onChange);
    gulp.watch(config.swagger.src, ['swagger']).on('change', onChange);

});
