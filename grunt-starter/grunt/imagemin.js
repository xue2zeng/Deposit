// imagemin
module.exports = {
  dynamic: {
    options: {
      optimizationLevel: 7,
      progressive: true
    },
    files: [{
      expand: true,
      cwd: '<%= settings.src %>/<%= settings.imagesDir %>',
      src: [
        '**/*.{png,jpg,gif}',
        '!<%= settings.spriteDir %>/*.png'
      ],
      dest: '<%= settings.dist %>/<%= settings.imagesDir %>'
    }]
  }
};
