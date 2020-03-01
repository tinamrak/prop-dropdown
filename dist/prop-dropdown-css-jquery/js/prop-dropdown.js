 (function($) {
  'use strict';

  // Transitions Only After Page Load
  // https://css-tricks.com/transitions-only-after-page-load/  
  $('body').removeClass('preload');

  // PROP Dropdown
  var $parentWithSubmenu = '.menu-item--expanded > a';

  $($parentWithSubmenu).each(function() {
    var $this = $(this),
        parentWidth = $(this).width();

    // Set minimum width for submenu
    $this.parent().find('ul').css('min-width', parentWidth + 'px');

    // Display submenu
    $this.on('click', function(ev) {
      ev.preventDefault();
      $this.parent().toggleClass('is-dropped');
      $($parentWithSubmenu).not($this).parent().removeClass('is-dropped');
    });
  });

  // Set active state to items that don't have submenu
  var $parentWithoutSubmenu = $('li:not(.menu-item--expanded) > a');
  $parentWithoutSubmenu.on('click', function(ev) {
    var $this = $(this);
    ev.preventDefault();
    $this.parent().toggleClass('is-active');
    $parentWithoutSubmenu.not($this).parent().removeClass('is-active');
  });

  // Disable active state when clicking outside of it
  $(document).on('click', function(e) {
    if (!$(e.target).closest($parentWithSubmenu).length) {
      $('.menu-item--expanded').removeClass('is-dropped');
    }
    if (!$(e.target).closest($parentWithoutSubmenu).length) {
      $('li:not(.menu-item--expanded)').removeClass('is-active');
    }
  });
 
 })(jQuery);
 