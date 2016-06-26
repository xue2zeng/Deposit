// rig
module.exports = {
  // Site files to build
  core: {
    files: {
      '<%= settings.dist %>/<%= settings.scriptsDir %>/index.js': ['<%= settings.src %>/scripts/index.js']
    }
  },
  src: {
    files: {
      '<%= settings.dist %>/<%= settings.scriptsDir %>/src.js': ['<%= settings.src %>/scripts/src.js']
    }
  },
  plugins: {
    files: {
      '<%= settings.dist %>/<%= settings.scriptsDir %>/plugins.js': ['<%= settings.src %>/scripts/plugins.js']
    }
  }
};
