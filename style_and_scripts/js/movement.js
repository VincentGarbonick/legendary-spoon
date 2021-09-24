function get_x_y_pos()
{
    var clientHeight = document.getElementById('KH8_container').clientHeight;
    var clientWidth = document.getElementById('KH8_container').clientWidth;
    document.getElementById("x_pos_div").innerHTML = "X pos div: " + clientWidth.toString();
    document.getElementById("y_pos_div").innerHTML = "Y pos div: " + clientHeight.toString();
    document.getElementById("left_figure").innerHTML = "Left: " + document.getElementById('KH8_container').style.left.toString();
    document.getElementById("top_figure").innerHTML = "Right: " + document.getElementById('KH8_container').style.top.toString();
}

function eventclick()
{
    document.getElementById("x_pos_div_mouse").innerHTML = "X pos div (mouse): " + event.clientX;
    document.getElementById("y_pos_div_mouse").innerHTML = "Y pos div (mouse): " + event.clientY;
    document.getElementById("Echo").innerHTML = "Echo: " + Math.random();
}

/*
function GetScreenCordinates(obj) {
    var p = {};
    p.x = obj.offsetLeft;
    p.y = obj.offsetTop;
    while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
        if (obj == document.getElementsByTagName("body")[0]) {
            break;
        }
        else {
            obj = obj.offsetParent;
        }
    }
    document.getElementById("x_pos_div").innerHTML = "X pos div img: " + p.x;
    document.getElementById("y_pos_div").innerHTML = "Y pos div img: " + p.y;
    return p;
}
*/

function get_image_pos(elem)
{
    var img_x = document.getElementById('KH8_mover').style.LeftPos;
    var img_y = document.getElementById('KH8_mover').style.TopPos;
    document.getElementById("x_pos_div").innerHTML = "X pos div img: " + img_x;
    document.getElementById("y_pos_div").innerHTML = "Y pos div img: " + img_y;
}

var id = null;
function move_image(to_move)
{
    var elem = document.getElementById(to_move);   

    // position of mouse 
    mouse_x = event.clientX;
    mouse_y = event.clientY;
    
    //pos_x = 
    id = setInterval(frame,1);

    // the actual movement 
    function frame()
    {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}

function myMoveII()
{
    
    
    var elem = document.getElementById("K8_mover");   
    
    // get bounds of parent div 
    var parent_bounds = document.getElementById("K8_container").getBoundingClientRect();
    
    var mouse_x = event.clientX; // this is where we want to go to 
    var mouse_y = event.clientY;

    mouse_x -= parent_bounds.left +50;
    mouse_y -= parent_bounds.top  +50;

    var KH8_current_x = parseInt(elem.style.left);
    var KH8_current_y = parseInt(elem.style.top);
   
    // check if NaN
    if(isNaN(KH8_current_x) || isNaN(KH8_current_y))
    {
        KH8_current_x = 1;
        KH8_current_y = 1;
        elem.style.left = 1 + 'px'; 
        elem.style.top = 1 + 'px'; 
    }
    
    clearInterval(id);
    id = setInterval(frame, 1);

    function frame() 
    {
        
        if(KH8_current_x == mouse_x && KH8_current_y == mouse_y) 
        {
            clearInterval(id);
        } 
        /*
        if(KH8_current_x != mouse_x)
        {
            KH8_current_x++;
            elem.style.left = KH8_current_x + 'px'; 
            document.getElementById("left").innerHTML = "Left: " +  elem.style.left;
        }
        if(KH8_current_y != mouse_y) 
        {
            KH8_current_y++;
            elem.style.top = KH8_current_y + 'px'; 
            document.getElementById("top").innerHTML = "Top: " + elem.style.top;
        }
        */
        
        /*
        if(KH8_current_x == mouse_x) 
        {
            clearInterval(id);
        } 
        */
        if(KH8_current_x > mouse_x)
        {
            KH8_current_x--;
            elem.style.left = KH8_current_x + 'px'; 
        }
        if(KH8_current_x < mouse_x)
        {
            KH8_current_x++;
            elem.style.left = KH8_current_x + 'px'; 
        }
        
        /*
        if(KH8_current_y == mouse_y) 
        {
            clearInterval(id);
        }
        */
        if(KH8_current_y > mouse_y) 
        {
            KH8_current_y--;
            elem.style.top = KH8_current_y + 'px'; 
        }
        if(KH8_current_y < mouse_y) 
        {
            KH8_current_y++;
            elem.style.top = KH8_current_y + 'px'; 
        }
    }
}