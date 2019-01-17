"use strict";

$( document ).ready(
    function()
    {
      $(window).scroll(
          function()
          {
            var wScroll = $(window).scrollTop();

            $('hintergrund').css('background-position', 'center ' + (wScroll*-0.1) + 'px');
        }
      );
    }
);
