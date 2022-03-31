import gulp from 'gulp';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { fonts } from './gulp/tasks/fonts.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { path } from './gulp/config/path.js';

const watcher = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
};

const tasks = gulp.series(fonts, gulp.parallel(html, scss, js, img));
const dev = gulp.series(reset, tasks, gulp.parallel(watcher, server));

gulp.task('default', dev);