let angel = -45;
let timer = null;
let background = "lightgray";

$(document).ready(
    function ()
    {

        for (let i = 0; i < 4; i++)
        {
            const id = "sub-box-" + i;
            $("#box").append("<div id='" + id + "' class='sub-box'></div>");
        }

        timer = window.setInterval(countUp, 50);

        $("#stop-start").click(
            function ()
            {
                if(timer)
                {
                    clearInterval(timer);
                    timer = null;
                }
                else
                {
                    timer = window.setInterval(countUp, 50);
                }
            }
        );
    }
);

function countUp()
{
    console.log(angel);
    angel += 0.5;

    if (angel > 360)
    {
        angel = 0;
    }

    changeAngel();
}


function changeAngel()
{
    let temp_angel = angel;
    for (let i = 0; i < 4; i++)
    {
        const id = "#sub-box-" + i;
        $(id).css("background", "linear-gradient(" + temp_angel + "deg, "+background+" 50%, rgba(0, 0, 0, 0) 50%)");
        temp_angel += 90;
        if (i === 1)
        {
            temp_angel += 90;
        }
        else if (i === 2)
        {
            temp_angel -= 90 * 2;
        }
    }

    $("#box").css("transform", "rotate(" + (360 - angel) + "deg)");
}