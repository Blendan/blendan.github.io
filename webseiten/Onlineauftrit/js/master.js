
"use strict";
var name_text = false;

$(document).ready(
  function()
  {
    tippenAnimaton();
  }
);

var text_haupt;

function tippenAnimaton()
{

  if (name_text)
  {
    text_haupt = "Webseiten und mehr";
    name_text = false;
  }
  else
  {
    text_haupt = "Name";
    name_text = true;
  }
  stelle_text = 0;

  tippenAnimatonstarten();
}

var stelle_text = 0;
var schreiben = true;
var text_split;
var text_abbruch;


function tippenAnimatonstarten()
{
  text_split = text_haupt.split("");
  if (!schreiben)
  {
    stelle_text = text_split.length;
    text_abbruch = setInterval(function() {
      tippenAnimatonLoeschen();
    },100);
    schreiben = true;
  }
  else
  {
    text_abbruch = setInterval(function() {
      tippenAnimatonTippen();
    },100);
    schreiben = false;
  }
}

function tippenAnimatonTippen()
{
  var ausgabe = "";
  for (var i = 0; i <= stelle_text; i++)
  {
    ausgabe += text_split[i];
  }
  ausgabe += "|";
  $("#haupt_ueberschrift").text(ausgabe);

  stelle_text++;

  if(stelle_text>=text_split.length)
  {
    clearInterval(text_abbruch);
    setTimeout(tippenAnimatonstarten,1000,"");
  }
}

function tippenAnimatonLoeschen()
{
  var ausgabe = "";
  if(stelle_text!=0)
  {
    for (var i = 0; i < stelle_text; i++)
    {
      ausgabe += text_split[i];
    }
  }
  ausgabe += "|";
  $("#haupt_ueberschrift").text(ausgabe);

  stelle_text--;

  if(stelle_text<0)
  {
    clearInterval(text_abbruch);
    setTimeout(tippenAnimaton,300);
  }
}
