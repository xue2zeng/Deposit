var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  config = require('../config');


var browserSyncTask = function() {
  browserSync.init(config.tasks.browserSync);
};

gulp.task('browserSync', browserSyncTask)

module.exports = browserSyncTask
