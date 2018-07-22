
"use strict";

$(document).ready(
  function()
  {
    setInterval(drehenHaupt,3000);
  }
);

var dehen_aktuell = 0;

function drehenHaupt()
{
  var haupt_text = document.getElementsByClassName("haupt_ueberschrift");

  $(".rotateOut").addClass("rotadeHidden");
  $(".rotateOut").removeClass("rotateOut");

  for (var i = 0; i < haupt_text.length; i++)
  {
    //alert(i==(dehen_aktuell-1)&&i!=0);
    if (i==dehen_aktuell)
    {
      $(haupt_text[i]).addClass("rotateIN");
      $(haupt_text[i]).removeClass("rotadeHidden");
    }
    else if (i==(dehen_aktuell-1)&&i!=(haupt_text.length-1)||0==dehen_aktuell&&i==(haupt_text.length-1))
    {
      $(haupt_text[i]).addClass("rotateOut");
      $(haupt_text[i]).removeClass("rotateIN");
    }
    else
    {
      $(haupt_text[i]).addClass("rotadeHidden");
      $(haupt_text[i]).removeClass("rotateIN");
    }
  }
  dehen_aktuell ++;
  if (dehen_aktuell==haupt_text.length)
  {
    dehen_aktuell = 0;
  }
}
