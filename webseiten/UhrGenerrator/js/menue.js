"use strict";
var menueausgemacht = false;

function menueausmachen()
{
  document.getElementById("menue_off").classList.toggle("menueaus");

  if (menueausgemacht)
  {
    document.getElementById("menue_off_machen").style.left = "80px";
    document.getElementById("mode").style.left = "0px";
    menueausgemacht = false;
  }
  else
  {
    document.getElementById("menue_off_machen").style.left = "-120px";
    document.getElementById("mode").style.left = "-200px";
    menueausgemacht = true ;
  }
}

function master()
{
  var farbe = document.getElementById("color_master").value;

  document.getElementById("Uhr").style.boxShadow = "0 0 50px "+ farbe;
  document.getElementById("Uhr").style.borderColor = farbe;
  document.getElementById("h_zeiger").style.borderColor = farbe;
  document.getElementById("m_zeiger").style.borderColor = farbe;
  document.getElementById("s_zeiger").style.borderColor = farbe;
  document.getElementById("kreis").style.background = farbe;
  document.getElementById("Uhr").style.color = farbe;
  document.getElementById("zeit").style.color = farbe;

  var striche_array = document.getElementsByClassName("striche");

  for (var i = 0; i < striche_array.length; i++)
  {
    striche_array[i].style.background = farbe;
    if (markBSanzeigen)
    {
      striche_array[i].style.boxShadow = "0 0 15px "+farbe;
    }
    else
    {
      striche_array[i].style.boxShadow = "0 0 0 "+farbe;
    }
  }

  document.getElementById("color_BSmark").value  = farbe;
  document.getElementById("color_mark").value  = farbe;
  document.getElementById("color_zeiger").value  = farbe;
  document.getElementById("color_zahlen").value  = farbe;
  document.getElementById("color_textschatten").value  = farbe;
  document.getElementById("color_schatten").value  = farbe;
  if (schattentext)
  {
      document.getElementById("zeit").style.textShadow = "0 0 15px "+ farbe;
  }

    var classen = document.getElementsByClassName("zeiger");
    if (zeigeranzBS)
    {
      for (var i = 0; i < classen.length; i++)
      {
        classen[i].style.boxShadow  = "0 0 15px "+farbe;
      }
    }
    else
    {
      for (var i = 0; i < classen.length; i++)
      {
        classen[i].style.boxShadow  = "0 0 0 "+farbe;
      }
    }
    document.getElementById("color_zeigerBS").value  = farbe;
}

function colormark()
{
  var farbe = document.getElementById("color_mark").value;

  var striche_array = document.getElementsByClassName("striche");

  for (var i = 0; i < striche_array.length; i++)
  {
    striche_array[i].style.background = farbe;
  }
}

var markanzeigen = true;
function markanz()
{
  document.getElementById("anzeigemark").classList.toggle("rechts");
  var striche_array = document.getElementsByClassName("striche");

  if (markanzeigen)
  {
    markanzeigen = false;
    var array = document.getElementsByClassName("Generator_Mark");
    for (var i = 0; i < array.length; i++)
    {
      array[i].style.display  = "none";
    }
    for (var i = 0; i < striche_array.length; i++)
    {
      striche_array[i].style.display  = "none";
    }
  }
  else
  {
    markanzeigen = true;
    var array = document.getElementsByClassName("Generator_Mark");
    for (var i = 0; i < array.length; i++)
    {
      array[i].style.display  = "inline";
    }

    for (var i = 0; i < striche_array.length; i++)
    {
      striche_array[i].style.display  = "block";
    }
}

  var striche_array = document.getElementsByClassName("striche");
  for (var i = 0; i < striche_array.length; i++)
  {
      if (markanzeigen)
      {
          striche_array[i].style.display = "block";
      }
      else
      {
        striche_array[i].style.display = "none";
    }
  }
}

var markBSanzeigen = false;
function markBSanz()
{
  document.getElementById("anzeigemarkBS").classList.toggle("rechts");

  if (markBSanzeigen)
  {
    markBSanzeigen = false;
    document.getElementById("markirung_BS_anz").innerHTML = "0";
  }
  else {
    markBSanzeigen = true;
    document.getElementById("markirung_BS_anz").innerHTML = "15px";
  }
  var farbe = document.getElementById("color_BSmark").value;
  var striche_array = document.getElementsByClassName("striche");
    for (var i = 0; i < striche_array.length; i++) {
        if (markBSanzeigen)
        {
          striche_array[i].style.boxShadow = "0 0 15px "+farbe;
        }
        else
        {
          striche_array[i].style.boxShadow = "0 0 0 "+farbe;
        }
    }
}

function colorBSmark()
{
  var farbe = document.getElementById("color_BSmark").value;

  var striche_array = document.getElementsByClassName("striche");
  for (var i = 0; i < striche_array.length; i++) {
      if (markBSanzeigen) {
        striche_array[i].style.boxShadow = "0 0 15px "+farbe;
      }
      else {
        striche_array[i].style.boxShadow = "0 0 0 "+farbe;
    }
  }
}

function setradiusmark()
{
  var grose = document.getElementById('radius_mark').value

  var striche_array = document.getElementsByClassName("striche");
  for (var i = 0; i < striche_array.length; i++)
  {
  striche_array[i].style.marginTop = grose *-1 +"px";
  }
}

function setrundung()
{
  var rundung = document.getElementById("rundung").value;

  if(!isNaN(rundung))
  {
    document.getElementById("Uhr").style.borderRadius = rundung + "px";
  }
}

function setsize()
{
  var size = document.getElementById("size").value;

  if(!isNaN(size))
  {
    document.getElementById("Uhr").style.height = size + "px";
    document.getElementById("Uhr").style.width = size + "px";
  }
}

function setoben()
{
  var oben = document.getElementById("abstand_oben").value;

  if(!isNaN(oben))
  {
    document.getElementById("Uhr").style.top = oben + "px";
  }
}

function textschattne_color()
{
  var farbe = document.getElementById("color_textschatten").value;
  if (schattentext)
  {
      document.getElementById("zeit").style.textShadow = "0 0 15px "+farbe;
  }
}

var textangezeigt  = true;
function textanz()
{
  document.getElementById("anzeigetext").classList.toggle("rechts");
  document.getElementById("zeit").classList.toggle("hide");
  var classen = document.getElementsByClassName("Generator_zahlen");
  if (textangezeigt)
  {
    textangezeigt = false;
    for (var i = 0; i < classen.length; i++) {
      classen[i].style.display  = "none";
    }
  }
  else
  {
    textangezeigt = true;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.display  = "block";
    }
}
}

function hintergrund()
{
  var farbe = document.getElementById("color_hintergrund").value;
  document.body.style.backgroundColor = farbe;
}

function schatten()
{
  var farbe = document.getElementById("color_schatten").value;
  document.getElementById("Uhr").style.boxShadow = "0 0 50px "+ farbe;
  document.getElementById("Uhr").style.borderColor = farbe;
}

function zeiger()
{
  var farbe = document.getElementById("color_zeiger").value;

    document.getElementById("h_zeiger").style.borderColor = farbe;
    document.getElementById("m_zeiger").style.borderColor = farbe;
    document.getElementById("s_zeiger").style.borderColor = farbe;
    document.getElementById("kreis").style.background = farbe;
}

function zeiger2()
{
  var farbe = document.getElementById("color_zeiger2").value;

    document.getElementById("h_zeiger").style.background = farbe;
    document.getElementById("m_zeiger").style.background = farbe;
    document.getElementById("s_zeiger").style.background = farbe;
}

function zahlen()
{
  var farbe = document.getElementById("color_zahlen").value;
  document.getElementById("zeit").style.color = farbe;
}

function setgrossezahlen()
{
  var grosse = document.getElementById("grosse_zahlen").value;
  document.getElementById("zeit").style.fontSize = grosse + "px" ;
}

function sethohezahlen()
{
  var hohe = document.getElementById("hohe_zahlen").value;

  if(!isNaN(hohe))
  {
    document.getElementById("zeit").style.top = hohe + "px";
  }
}

var sextra = false;
function sekundenextra()
{
  document.getElementById("anzeigewechselharkig").classList.toggle("rechts");
  document.getElementById("s").classList.toggle("harkig");

  if (sextra)
  {
    sextra = false;
    document.getElementById("harkig_anz").style.display  = "none";
  }
  else
  {
    sextra = true;
    document.getElementById("harkig_anz").style.display  = "inline";
  }
}

function gorssezeiger()
{
  var grosse = document.getElementById("grosse_zeiger").value;

  document.getElementById("h_zeiger").style.borderTop = grosse / 2 + "px solid";
  document.getElementById("m_zeiger").style.borderTop = grosse / 1.5 + "px solid";
  document.getElementById("s_zeiger").style.borderTop = grosse + "px solid";

  zeiger();
}

var schattentext = false;

function textschatten()
{
  document.getElementById("anzeigetextschatten").classList.toggle("rechts");
  var farbe = document.getElementById("color_textschatten").value;
  if (schattentext)
  {
      document.getElementById("zeit").style.textShadow = "0 0 0"
      schattentext = false;
  }
  else
  {
    document.getElementById("zeit").style.textShadow = "0 0 15px "+farbe;
    schattentext = true;
  }
}

var zeigeranz = true;
function zeiger_anz()
{
  document.getElementById("anzeigenzeiger").classList.toggle("rechts");
  document.getElementById("analog").classList.toggle("hide");

  var classen = document.getElementsByClassName("Generator_zeiger");
  if (zeigeranz)
  {
    zeigeranz = false;
    for (var i = 0; i < classen.length; i++) {
      classen[i].style.display  = "none";
    }
  }
  else
  {
    zeigeranz = true;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.display  = "block";
    }
  }
}

function master3d_anz()
{
  document.getElementById("master3d").classList.toggle("rechts");
  var classen = document.getElementsByClassName("Generator_3d");
  if (dreidanz) {
    dreidanz = false;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.display  = "none";
    }
    document.getElementById("liveanzeige").style.transform = "rotate3d(1 ,1, 0, 0deg)";
  }
  else
  {
    dreidanz = true;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.display  = "block";
    }
  }
}

var zeigeranzBS = false;
function zeigerBS_anz()
{
  document.getElementById("anzeigenBSzeiger").classList.toggle("rechts");

  var classen = document.getElementsByClassName("zeiger");
  var farbe = document.getElementById("color_zeigerBS").value;
  if (zeigeranzBS)
  {
    zeigeranzBS = false;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.boxShadow  = "0 0 0 "+farbe;
    }
  }
  else {
    zeigeranzBS = true;
    for (var i = 0; i < classen.length; i++) {
      classen[i].style.boxShadow  = "0 0 15px "+farbe;
    }
  }
}

function zeigerBS()
{
  var classen = document.getElementsByClassName("zeiger");
  var farbe = document.getElementById("color_zeigerBS").value;
  if (zeigeranzBS)
  {
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.boxShadow  = "0 0 15px "+farbe;
    }
  }
  else {
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.boxShadow  = "0 0 0 "+farbe;
    }
  }
}

function sekzeiger_anz()
{
  document.getElementById("sekanzeigenzeiger").classList.toggle("rechts");
  document.getElementById("s").classList.toggle("hide");
  document.getElementById("sekunden_anzeigen").classList.toggle("hide");
}

var puls_an = false;

function Pulsieren_an()
{
  var classen = document.getElementsByClassName("Generator_puls");
  if (puls_an) {
    puls_an = false;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.display  = "none";
    }
  }
  else
  {
    puls_an = true;
    for (var i = 0; i < classen.length; i++)
    {
      classen[i].style.display  = "block";
    }
  }
  document.getElementById("Pulsieren_anz").classList.toggle("rechts");
}
