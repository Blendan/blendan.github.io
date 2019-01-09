"use strict";

function starten()
{
  var zeiger = document.getElementsByClassName("zeiger");

  for (var i = 0; i < zeiger.length; i++)
  {
    zeiger[i].classList.add("gray");
  }
  setInterval(sekundenAnzeigen, 1000);
}

function sekundenAnzeigen()
{
  var zeiger = document.getElementsByClassName("zeiger");
  var d = new Date();
  var sekunden = d.getSeconds();
  var h = d.getHours();
  var m = d.getMinutes();

  if(m<10)
  {
    m = "0"+m;
  }

  if(h<10)
  {
    h = "0"+h;
  }

  document.getElementById("zeit").innerHTML = h+":"+m;

  for (var i = 0; i < zeiger.length; i++)
  {
    if (i<=sekunden)
    {
      if (zeiger[i].classList.contains("gray"))
      {
        zeiger[i].classList.remove("gray");
      }

      if (!zeiger[i].classList.contains("weiss"))
      {
        zeiger[i].classList.add("weiss");
      }


    }
    else
    {
      if (zeiger[i].classList.contains("weiss"))
      {
        zeiger[i].classList.remove("weiss");
      }

      if (!zeiger[i].classList.contains("gray"))
      {
        zeiger[i].classList.add("gray");
      }
    }
  }
}
