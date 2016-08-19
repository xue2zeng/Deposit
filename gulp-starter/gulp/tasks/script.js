'use strict'

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const path = require('path')
const config = require('../config')

var scriptTask = function () {
  return gulp.src(path.join(config.site.src, config.tasks.script.src, '/**/*.{' + config.tasks.script.extensions + '}'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat(config.site.name))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest(path.join(config.site.dist, config.tasks.script.dist)))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.join(config.site.dist, config.tasks.script.dist)))
}

gulp.task('script', scriptTask)

module.exports = scriptTask
