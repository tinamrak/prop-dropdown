 (function($) {
  'use strict';

  // Menu first link.
  var parentLinks = '.header .menu > .menu-item--expanded > a';

  $(parentLinks).each(function() {
    var $this = $(this),
        parentWidth = $(this).width();

    // Set minimum width for submenu
    $this.parent().find('ul').css('min-width', parentWidth + 'px');

    $this.on('click', function(ev) {
      ev.preventDefault();
      
      // Display submenu
      $this.parent().toggleClass('show-submenu');
      $(parentLinks).not($this).parent().removeClass('show-submenu');
    });
  });

  // Hide dropdown when clicking outside of it.
  $(document).on('click', function(e) {
    if (!$(e.target).closest(parentLinks).length) {
      $('.menu-item--expanded').removeClass('show-submenu');
    }
  });
 
 })(jQuery);
 