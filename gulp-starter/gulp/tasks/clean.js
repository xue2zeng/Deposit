var gulp = require('gulp'),
  del = require('del'),
  config = require('../config');

var cleanTask = function(cb) {
  del([config.site.dist]).then(function(paths) {
    cb();
  });
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
