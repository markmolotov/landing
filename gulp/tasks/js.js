import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import { path } from '../config/path.js';

export const js = () => {
  return gulp.src(path.src.js, { sourcemaps: true })
    .pipe(plumber(
      notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
};