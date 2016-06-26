var gulp = require('gulp'),
  sequence = require('gulp-sequence');

var defaultTask = function(cb) {
  sequence('clean', 'script', 'watch', cb);
};

gulp.task('default', defaultTask);

module.exports = defaultTask;
