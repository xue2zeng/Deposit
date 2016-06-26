// uglify
module.exports = function(grunt) {
  return {
    dist: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      files: {
        '<%= settings.dist %>/<%= settings.scriptsDir %>/scripts.min.js': '<%= settings.dist %>/<%= settings.scriptsDir %>/scripts.js'
      }
    }
  };
};
