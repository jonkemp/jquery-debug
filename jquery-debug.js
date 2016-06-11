(function ($) {
  'use strict'

  $.fn.extend({
    debug: function() {
      var self = this;

      try {
        if (!self.length) {
          throw {
            name: 'Error',
            message: 'The jQuery selector \'' + self.selector + '\' was not found in the context of \'' + self.context.nodeName.toLowerCase() + '\'.'
          };
        }
      } catch(e) {
        console.error(e.name + ': ' + e.message);
      }


      return self;
    }
  });

}(jQuery));
