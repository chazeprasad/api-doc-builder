import config from '../config';
import url from 'url';
import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('browser-sync', function () {

    const DEFAULT_FILE = 'index.html';

    browserSync.init({
        server: {
            baseDir: config.app.dest
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        ghostMode: {
            links: false
        }
    });

});
