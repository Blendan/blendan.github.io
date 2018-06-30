
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

  for (var i = 0; i < 100; i++)
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

  if(rand%15==0)
  {
    if(rand%2==0)
    {
      sterne[jetzt].style.transform = "rotate("+(Math.random()*1000)%360+"deg)";
    }
    else
    {
      $(sterne[jetzt]).css("width",rand);
      $(sterne[jetzt]).css("height",rand);
    }
  }

  jetzt++;

  if(jetzt==sterne.length)
  {
    jetzt = 0;
  }
}
