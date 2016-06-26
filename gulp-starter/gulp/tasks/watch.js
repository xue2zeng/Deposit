var gulp = require('gulp'),
  watch = require('gulp-watch'),
  path = require('path'),
  config = require('../config');

var watchTask = function() {
  var watchableTasks = ['script'];

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName];
    if(task) {
      var glob = path.join(config.site.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
      watch(glob, function() {
       require('./' + taskName)();
      });
    };
  });
};

gulp.task('watch', ['browserSync'], watchTask)

module.exports = watchTask
