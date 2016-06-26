// spritesheets
module.exports = {
  dist: {
    src: ['<%= settings.src %>/<%= settings.imagesDir %>/<%= settings.spritesDir %>/*.png'],
    dest: '<%= settings.dist %>/<%= settings.imagesDir %>/<%= settings.spritesDir %>.png',
    destCss: '<%= settings.src %>/<%= settings.stylesDir %>/core/_sprites.scss',
    cssFormat: 'scss',
    imgPath: '<%= settings.dist %>/<%= settings.imagesDir %>/<%= settings.spritesDir %>.png'
  }
};
