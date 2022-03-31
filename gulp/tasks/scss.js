import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import { path } from '../config/path.js';

const sass = gulpSass(dartSass);

export const scss = () => {
  return gulp.src(path.src.scss)
    .pipe(plumber(
      notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(sass())
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
};