
var temp;
var anzahl;

$(document).ready(
  function()
  {
    $("button").click(
      function()
      {
        macheSterne();
      }
    );


  }
);


function macheSterne()
{
  var stern = '<div class="sterne"><div class="spitze1 farbe"></div><div class="spitze2 farbe"></div></div>';

  var sterne = '';

  anzahl = parseInt(document.getElementById('anzahlS').value);

  for (var i = 0; i < anzahl; i++)
  {
    sterne += stern;
  }

  document.getElementById("sternenhimmel").innerHTML = sterne;

  randomize();
}

function randomize()
{
  var sterne = document.getElementsByClassName("sterne");
  var farben = ["rgb(255, 207, 0)","rgb(245, 175, 18)","rgb(247, 235, 153)","rgb(245, 255, 186)","rgb(251, 78, 67)","rgb(34, 96, 153)"];
  var rand;
  var rand2;

  for (var i = 0; i < sterne.length*2; i++)
  {
    if(i%2==0)
    {
      rand = Math.round((Math.random()*100)%farben.length);
    }

    $(".farbe:eq("+i+")").css("background",farben[rand]);

    if(i<sterne.length)
    {
      $(sterne[i]).css("top",(Math.random()*1000)%window.screen.availHeight);
      $(sterne[i]).css("left",(Math.random()*1000)%window.screen.availWidth*2);

      sterne[i].style.transform = "rotate("+(Math.random()*1000)%360+"deg)";

      rand2 = ((Math.random()*100)%40)+10;
      $(sterne[i]).css("width",rand2);
      $(sterne[i]).css("height",rand2);
    }

  }
  setInterval(randomizeA,100);
}

var jetzt = 0;

function randomizeA()
{
  var sterne = document.getElementsByClassName("sterne");
  var rand;


  rand = Math.round((Math.random()*100)%40)+10;

  if(rand%3==0)
  {
    $(sterne[jetzt]).animate({height: 'toggle' });
    $(sterne[jetzt]).animate({height: 'toggle' });
  }

  jetzt++;

  if(jetzt==sterne.length)
  {
    jetzt = 0;
  }
}

function sternebewegen(event)
{
  var sterne = document.getElementsByClassName("sterne");

  var xm = event.clientX;
  var ym = event.clientY;
  var temp2;



  for (var i = 0; i < sterne.length; i++)
  {

    if( (parseInt($(sterne[i]).css("top"))-ym)<200&&(parseInt($(sterne[i]).css("top"))-ym>=0))
    {

      if( (parseInt($(sterne[i]).css("left"))-xm)<200&&(parseInt($(sterne[i]).css("left"))-xm>=0))
      {
        temp2 = parseInt($(sterne[i]).css("top"));
        $(sterne[i]).css("top",((Math.random()*100)%200)+temp2);

        temp2 = parseInt($(sterne[i]).css("left"));
        $(sterne[i]).css("left",((Math.random()*100)%200)+temp2);
      }
    }

    if( (parseInt($(sterne[i]).css("top"))-ym)>-200&&(parseInt($(sterne[i]).css("top"))-ym<0))
    {

      if( (parseInt($(sterne[i]).css("left"))-xm)>-200&&(parseInt($(sterne[i]).css("left"))-xm<0))
      {
        temp2 = parseInt($(sterne[i]).css("top"));
        $(sterne[i]).css("top",(temp2-(Math.random()*1000)%200));

        temp2 = parseInt($(sterne[i]).css("left"));
        $(sterne[i]).css("left",(temp2-(Math.random()*1000)%200));
      }
    }
  }
}

function morerandom()
{
  var temp2;
  var sterne = document.getElementsByClassName("sterne");

  for (var i = 0; i < sterne.length; i++)
   {
      temp2 = parseInt($(sterne[i]).css("top"));
      $(sterne[i]).css("top",((((Math.random()*1000)%300)-150)+temp2));

      temp2 = parseInt($(sterne[i]).css("left"));
      $(sterne[i]).css("left",((((Math.random()*1000)%300)-150)+temp2));
    }

}
