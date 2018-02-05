var canvas = document.getElementById("thecanvas");
var ctx = canvas.getContext('2d');
var clearbutton = document.getElementById("clear");
var togglebutton = document.getElementById("toggle");
var shape = 0;
var oldX = 0;
var oldY = 0;
var started = 0;
ctx.fillStyle="red";
ctx.beginPath();


var clear = function(e){
    ctx.clearRect(0,0,500,500);
    oldX = 0;
    oldY = 0;
    started = 0;
};

var toggle = function(e){

    if (shape == 0){
	shape = 1;
    }
    else{
	shape = 0;
    }
    console.log(shape);
};

var draw = function(e){
    if(shape == 0){
	ctx.beginPath();
	moveTo(e.offsetX,e.offsetY);
	ctx.arc(e.offsetX,e.offsetY,10,0,2 * Math.PI);
	if(started != 0){
	    ctx.lineTo(oldX,oldY);
	}
	else{
	    started = 1;
	}
	ctx.fill();
	ctx.stroke();
	oldX = e.offsetX;
	oldY = e.offsetY;
    }
    else{
	ctx.fillRect(e.offsetX,e.offsetY,20,20);
    }
};


clearbutton.addEventListener("click",clear);
togglebutton.addEventListener("click",toggle);
canvas.addEventListener("click",draw);
