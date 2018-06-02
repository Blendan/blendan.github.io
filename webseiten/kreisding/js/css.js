var groesse = 200;

function start() {
  var schatten = document.getElementsByClassName("schatten");
  var s;
  var ob;
  var gros;

  var jetzt = schatten.length;
  for (var i = 0; i < schatten.length; i++) {

    s = (jetzt-i)/12+0.5;
    ob = 255-(jetzt-i)*15;
    gros = groesse-(jetzt-i)*10;

    schatten[i].style.background = "rgba("+ob+", "+ob+", "+ob+")";
    schatten[i].style.transition = "all "+s+"s linear";
    schatten[i].style.width = gros+"px";
    schatten[i].style.height = gros+"px";
  }
}
