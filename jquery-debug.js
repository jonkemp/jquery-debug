'use strict';

(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function($) {

  $.fn.extend({
    debug: function() {
      var self = this,
        selector,
        nodeName;

      try {
        if (!self.length) {
          selector = self.selector;
          nodeName = self.context.nodeName.toLowerCase();

          throw {
            name: 'jquery-debug',
            message: 'The jQuery selector \'' + selector + '\' was not found in the context of \'' + nodeName + '\'.'
          };
        }
      } catch(e) {
        console.error(e.name + ': ' + e.message);
      }

      return self;
    }
  });

}));
