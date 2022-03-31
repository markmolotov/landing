import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { path } from '../config/path.js';

export const fonts = () => {
  return gulp.src(path.src.fonts)
    .pipe(plumber(
      notify.onError({
        title: 'FONTS',
        message: 'Error: <%= error.message %>'
      }))
    )
    .pipe(gulp.dest(path.build.fonts));
};