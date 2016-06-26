var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  path = require('path'),
  config = require('../config');

var scriptTask = function() {
  return gulp.src(path.join(config.site.src, config.tasks.script.src, '/**/*.{' + config.tasks.script.extensions + '}'))
    .pipe(concat(config.site.name + '.js'))
    .pipe(gulp.dest(path.join(config.site.dist, config.tasks.script.dist)))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.join(config.site.dist, config.tasks.script.dist)));
};

gulp.task('script', scriptTask);

module.exports = scriptTask;
