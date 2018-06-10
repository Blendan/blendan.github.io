"use strict";

function toggeleAuswahl(was)
{
  var auswahl  = document.getElementsByClassName("auswahl");

  for (var i = 0; i < auswahl.length; i++)
  {
    if (i != was) {
      $(auswahl[i]).slideUp();
    }
  }

  $(auswahl[was]).slideToggle();
}
