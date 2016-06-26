// Watch
module.exports = {
  sass: {
    files: [
      '<%= settings.src %>/<%= settings.stylesDir %>/**/*.scss'
    ],
    tasks: ['styles']
  },
  scripts: {
    files: [
      '<%= settings.src %>/<%= settings.scriptsDir %>/**/*.js'
    ],
    tasks: ['scripts', 'concat', 'uglify'],
    options: {
      spawn: false
    }
  },
  sprites: {
    files: [
      '<%= settings.src %>/<%= settings.imagesDir %>/<%= settings.spritesDir %>/*.png'
    ],
    tasks: ['images', 'styles'],
    options: {
      spawn: false
    }
  },
  images: {
    files: [
      '<%= settings.src %>/<%= settings.imagesDir %>/**/*.{png,jpg,gif}',
      '!<%= settings.src %>/<%= settings.imagesDir %>/<%= settings.spriteDir %>/*.png',
      '!<%= settings.src %>/<%= settings.imagesDir %>/<%= settings.svgIconsDir %>/*.svg'
    ],
    tasks: ['copy:images'],
    options: {
      spawn: false
    }
  },
  icons: {
    files: [
      '<%= settings.src %>/<%= settings.imagesDir %>/<%= settings.svgIconsDir %>/*.svg'
    ],
    tasks: ['icons'],
    options: {
      spawn: false
    }
  },
  html: {
    files: [
      '<%= settings.src %>/templates/**/*',
      '<%= settings.src %>/modules/**/*.hbs',
    ],
    tasks: ['html'],
    options: {
      spawn: false
    }
  },
  json: {
    files: [
      '<%= settings.src %>/templates/data/*.json'
    ],
    tasks: ['json'],
    options: {
      spawn: false
    }
  }
};
