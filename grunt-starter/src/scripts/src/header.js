/* globals document */

'use strict';

rm.header = {
  init : function() {
    console.log('The header script loading.');
    this.dropdowns();
    console.log('The header script load completed.');
  },
  dropdowns : function() {
    $(document).ready(function() {
      console.log('Load drop dropdowns script');
    });
  }
};
