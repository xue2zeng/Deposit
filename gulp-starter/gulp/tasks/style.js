'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  path = require('path'),
  config = require('../config');

var styleTask = function() {
  return gulp.src(path.join(config.site.src, config.tasks.style.src, '/**/*.{' + config.tasks.style.extensions + '}'))
    .pipe(sourcemaps.init())
    .pipe(sass(config.tasks.style.sass).on('error', sass.logError))
    .pipe(rename({ basename: config.site.name }))
    .pipe(gulp.dest(path.join(config.site.dist, config.tasks.style.dist)))
    .pipe(autoprefixer(config.tasks.style.autoprefixer))
    .pipe(cssnano({autoprefixer: false}))
    .pipe(sourcemaps.write())
    .pipe(rename({ basename: config.site.name, suffix: '.min' }))
    .pipe(gulp.dest(path.join(config.site.dist, config.tasks.style.dist)))
    .pipe(browserSync.stream())
};

gulp.task('style', styleTask);

module.exports = styleTask;
