$(document).ready(
  function()
  {
    makeBtn();
  }
);

function makeBtn()
{
  for (var i = 0; i < 16; i++)
  {
    btnSide = "";
    for (var j = 1; j < 5; j++)
    {

      btnSide  += "<div class='boardBtnSide' style='transform: rotateX(45deg) rotateZ("+90*j+"deg) translateZ(-6vw);'></div>"
    }

    $(".soundboard3d .board").append("<div class='boardBtn'><div class='boardBtnTop'></div>"+btnSide+"</div>");
  }
}
