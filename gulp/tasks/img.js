import gulp from 'gulp';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { path } from '../config/path.js';

export const img = () => {
  return gulp.src(path.src.img)
    .pipe(plumber(
      notify.onError({
        title: 'IMG',
        message: 'Error: <%= error.message %>'
      }))
    )
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.stream());
};