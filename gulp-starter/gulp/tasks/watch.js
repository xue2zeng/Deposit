const gulp = require('gulp')
const watch = require('gulp-watch')
const path = require('path')
const config = require('../config')

const watchTask = function () {
  const watchableTasks = ['script']

  watchableTasks.forEach(function (taskName) {
    const task = config.tasks[taskName]
    if (task) {
      const glob = path.join(config.site.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      watch(glob, function () {
        require('./' + taskName)()
      })
    };
  })
}

gulp.task('watch', ['browserSync'], watchTask)

module.exports = watchTask
