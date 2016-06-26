/* globals localStorage */
/* globals sessionStorage */


'use strict';

rm.utilities = {
  sapCall: false,

  init: function() {
    console.log('Load utilities script init function.');
  },

  addItemToStorage: function(key, value) {
    if (sessionStorage) {
      rm.utilities.addItemToBrowserStorage(sessionStorage, key, value);
    } else if (localStorage) {
      rm.utilities.addItemToBrowserStorage(localStorage, key, value);
    }
  },

  addItemToBrowserStorage: function(storage, key, value) {
    if (storage !== null) {
      storage.setItem(key, value);
    }
  },

  addItemToArrayStorage: function(key, value) {
    if (sessionStorage) {
      rm.utilities.addItemToArrayBrowserStorage(sessionStorage, key, value);
    } else if (localStorage) {
      rm.utilities.addItemToArrayBrowserStorage(localStorage, key, value);
    }
  },

  addItemToArrayBrowserStorage: function(storage, key, value) {
    if (storage !== null) {
      var arr;
      if (storage.getItem(key) === null) {
        arr = [];
      } else {
        arr = storage.getItem(key).split(',');
      }
      arr.push(value);
      storage.setItem(key, arr);
    }
  },

  removeItemFromArrayStorage: function(key, value) {
    if (sessionStorage) {
      rm.utilities.removeItemFromArrayBrowserStorage(sessionStorage, key, value);
    } else if (localStorage) {
      rm.utilities.removeItemFromArrayBrowserStorage(localStorage, key, value);
    }
  },

  removeItemFromArrayBrowserStorage: function(storage, key, value) {
    if (storage !== null) {
      var arr;
      if (storage.getItem(key) !== null) {
        arr = storage.getItem(key).split(',');
        arr = jQuery.grep(arr, function(item) {
          return item !== value;
        });
      }
      storage.setItem(key, arr);
    }
  },

  removeItemFromStorage: function(key) {
    if (sessionStorage) {
      rm.utilities.removeItemFromBrowserStorage(sessionStorage, key);
    } else if (localStorage) {
      rm.utilities.removeItemFromBrowserStorage(localStorage, key);
    }
  },

  removeItemFromBrowserStorage: function(storage, key) {
    if (storage !== null) {
      storage.removeItem(key);
    }
  },

  getArrayFromStorage: function(key) {
    if (sessionStorage) {
      return rm.utilities.getArrayFromBrowserStorage(sessionStorage, key);
    } else if (localStorage) {
      return rm.utilities.getArrayFromBrowserStorage(localStorage, key);
    }
  },

  getArrayFromBrowserStorage: function(storage, key) {
    if (storage !== null && storage.getItem(key) !== null) {
      return storage.getItem(key).split(',');
    }
  }
};
