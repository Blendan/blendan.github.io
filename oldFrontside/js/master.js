"use strict";

$( document ).ready(
    function()
    {
      $(window).scroll(
          function()
          {
            var wScroll = $(window).scrollTop();

            $('#Frontseite').css('background-position', 'center ' + (wScroll*0.5) + 'px');
            $('#Frontseite').css('filter', 'blur( ' + (wScroll*0.005) + 'px)');
        }
      );
    }
);
