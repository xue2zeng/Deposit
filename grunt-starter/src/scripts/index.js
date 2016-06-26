'use strict'

/***************************************************************
 * Call the initialization function based on the page index
 * eg: The customer page 
 *     if (isCustomerPage) {
 *       rm.customer.init();
 *     }
 *
 ***************************************************************/
$(function() {
  $('body').addClass('loading');

  // Load utilities script init function
  rm.utilities.init();

  // Load header script init fucntion
  rm.header.init();
});
