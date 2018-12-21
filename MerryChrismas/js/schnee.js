$(document).ready(
  function()
  {
    createSnow(100);
  }
);

function createSnow(anzahl)
{
  for (var i = 0; i < anzahl; i++)
  {
    $(".snowbox").append("<div></div>");
    var random = Math.random()*30+20;
    $(".snowbox div").eq(i).css("width",random);
    $(".snowbox div").eq(i).css("height",random);
    random = Math.random()*100;
    $(".snowbox div").eq(i).css("left",random+"%");
    random = Math.random()*5;
    $(".snowbox div").eq(i).css("filter","blur("+random+"px)");
    $(".snowbox div").eq(i).css("transform","rotate("+Math.random()*100+"deg)");
    $(".snowbox div").eq(i).css("animation-delay",Math.random()*100+"s");
    $(".snowbox div").eq(i).css("animation","fall "+(Math.random()*20+10)+"s linear infinite");
  }
}
