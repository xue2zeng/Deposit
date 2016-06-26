// copy
module.exports = {

  fonts: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= settings.src %>/fonts',
      dest: '<%= settings.dist %>/fonts/',
      src: [
        '**/*' // copy all font types within font directory
      ]
    }]
  },
  images: {
    files: [{
      expand: true,
      filter: 'isFile',
      cwd: '<%= settings.src %>/<%= settings.imagesDir %>/',
      dest: '<%= settings.dist %>/<%= settings.imagesDir %>/',
      src: [
        '**', // copy all image types within images directory and any subdirectories
        '!<%= settings.spritesDir %>/*.png',
        '!<%= settings.svgIconsDir %>/*.svg',
        '!<%= settings.svgIconsCompressedDir %>/*.svg'
      ]
    }]
  },
  svg: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= settings.src %>/<%= settings.imagesDir %>',
      dest: '<%= settings.dist %>/<%= settings.imagesDir %>',
      src: '<%= settings.name %>.svg.'
    }]
  },
  html: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= settings.dist %>/templates/pages',
      dest: '<%= settings.dist %>',
      src: '**/*.html'
    }]
  },
  json: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= settings.src %>/templates/jsondata',
      dest: '<%= settings.dist %>/jsondata',
      src: '**/*.json'
    }]
  }
};
