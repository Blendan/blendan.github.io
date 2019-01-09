"use strict";

function GeneratorEND()
{
  document.getElementById("Generator").style.top = "-100%";
  document.getElementById("rest").classList.toggle("hide");
  document.getElementById("zurück").style.top = "-50%";
}

function GeneratorMaster()
{
  document.getElementById("Generator").style.top = "0%";
  document.getElementById("rest").classList.toggle("hide");
  document.getElementById("zurück").style.top = "2%";

  var farbe = document.getElementById("color_schatten").value;

  document.getElementById("schatten_farbe1").innerHTML = farbe;
  document.getElementById("schatten_farbe2").innerHTML = farbe;

  farbe = document.getElementById("color_zeiger").value;

  document.getElementById("schatten_color").innerHTML = farbe;
  document.getElementById("zeiger_farbe1").innerHTML = farbe;
  document.getElementById("zeiger_farbe2").innerHTML = farbe;
  document.getElementById("zeiger_farbe3").innerHTML = farbe;
  document.getElementById("zeiger_farbe4").innerHTML = farbe;

  farbe = document.getElementById("color_zahlen").value;
  document.getElementById("zahlen_color").innerHTML = farbe;

  farbe = document.getElementById("color_textschatten").value;
  document.getElementById("zahlen_TS_color").innerHTML = farbe;

  if (schattentext)
  {
    document.getElementById("zahlen_TS_Toggle").innerHTML = "15px";
  }
  else
  {
    document.getElementById("zahlen_TS_Toggle").innerHTML = "0";
  }

  var grose = document.getElementById("grosse_zahlen").value;
  document.getElementById("zahlen_FS").innerHTML = grose + "px";

  grose = document.getElementById("hohe_zahlen").value;
  document.getElementById("zahlen_top").innerHTML = grose + "px";

  farbe = document.getElementById("color_hintergrund").value;
  document.getElementById("BG").innerHTML = farbe;

  grose = document.getElementById("size").value;
  document.getElementById("schatten_width").innerHTML = grose + "px";
  document.getElementById("schatten_height").innerHTML = grose + "px";

  grose = document.getElementById("abstand_oben").value;
  document.getElementById("schatten_top").innerHTML = grose + "px";

  grose = document.getElementById("rundung").value;
  document.getElementById("schatten_BR").innerHTML = grose + "px";

  grose = document.getElementById("grosse_zeiger").value;

  document.getElementById("grose_s").innerHTML = grose + "px";
  document.getElementById("grose_m").innerHTML = grose/1.5 + "px";
  document.getElementById("grose_h").innerHTML = grose/2 + "px";

  farbe = document.getElementById("color_mark").value;
  document.getElementById("colormark_gen").innerHTML = farbe;

  farbe = document.getElementById("color_BSmark").value;
  document.getElementById("colorBSmark_gen").innerHTML = farbe;

  grose = document.getElementById("radius_mark").value;
  document.getElementById("obenmark_gen").innerHTML = grose + "px";

  if (zeigeranzBS)
  {
    document.getElementById("zeigerBSanzeigen").innerHTML = "0";
  }
  else {
    document.getElementById("zeigerBSanzeigen").innerHTML = "15px";
  }

  farbe = document.getElementById("color_zeigerBS").value;
  document.getElementById("zeigerBSfarbe").innerHTML = farbe;

  grose = document.getElementById("staerke_3d").value;
  document.getElementById("starke3d_gen").innerHTML = grose + "deg" +" )&quot;;";

  farbe = document.getElementById("color_zeiger2").value;
  document.getElementById("zeigerBG").innerHTML = farbe;
}
