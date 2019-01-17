"use strict";

$( document ).ready(
    function()
    {
      $('hintergrund').css('background-position', 'center ' + (wScroll*-0.1) + 'px');
      $(window).scroll(
          function()
          {
            var wScroll = $(window).scrollTop();

            $('hintergrund').css('background-position', 'center ' + (wScroll*-0.1) + 'px');
        }
      );
    }
);
