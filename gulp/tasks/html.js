import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import { path } from '../config/path.js';

export const html = () => {
  return gulp.src(path.src.html)
    .pipe(plumber(
      notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
};