// Sass
module.exports = {
  dist: {
    options: {
      style: 'expanded',
      debugInfo: true,
      precision: 10
    },
    files: {
      '<%= settings.dist %>/<%= settings.stylesDir %>/style.css': '<%= settings.src %>/<%= settings.stylesDir %>/style.scss',
      '<%= settings.dist %>/<%= settings.stylesDir %>/IEFix.css': '<%= settings.src %>/<%= settings.stylesDir %>/IEFix.scss'
    }
  }
};
