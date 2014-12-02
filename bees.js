var mouseX;
var mouseY;

window.addEventListener('mousemove', setXY)

var setXY = function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
};

