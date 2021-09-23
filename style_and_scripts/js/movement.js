function get_x_y_pos()
{
    var clientHeight = document.getElementById('KH8_container').clientHeight;
    var clientWidth = document.getElementById('KH8_container').clientWidth;
    document.getElementById("x_pos_div").innerHTML = "X pos div: " + clientWidth.toString();
    document.getElementById("y_pos_div").innerHTML = "Y pos div: " + clientHeight.toString();
}

function eventclick()
{
    document.getElementById("x_pos_div_mouse").innerHTML = "X pos div (mouse): " + event.clientX;
    document.getElementById("y_pos_div_mouse").innerHTML = "Y pos div (mouse): " + event.clientY;
    document.getElementById("Echo").innerHTML = "Echo: " + Math.random();
}
