var zahl = 2;
var geschwindigkeit = 4000;

function folgen(event)
{
//Mausposition Auslesen:
  var x = event.clientX + "px";
  var y = event.clientY + "px";
  
//Mausposition Übergeben:
  document.getElementById("kreis").style.left = x;
  document.getElementById("kreis").style.top = y;

  var schatten = document.getElementsByClassName("schatten");
  for (var i = 0; i < schatten.length; i++) {
    schatten[i].style.left = x;
    schatten[i].style.top = y;
  }
}

function maus(event)
{
//Mausposition Auslesen:
  var xm = event.clientX + "px";
  var ym = event.clientY + "px";
//Mausposition Übergeben:
  document.getElementById("maus").style.left = xm;
  document.getElementById("maus").style.top = ym;
}
