var canvas = document.getElementById("thecanvas");
var ctx = canvas.getContext('2d');
var clearbutton = document.getElementById("clear");
var togglebutton = document.getElementById("toggle");
var shape = 0;

ctx.fillStyle="red";


var clear = function(e){
    ctx.clearRect(0,0,500,500);
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
    ctx.beginPath();
    if(shape == 0){
	ctx.arc(e.clientX-this.offsetLeft,e.clientY-this.offsetTop,10,0,2 * Math.PI);
	ctx.fill();
    }
    else{
	ctx.fillRect(e.clientX-this.offsetLeft,e.clientY-this.offsetTop,20,20);
    }
};


clearbutton.addEventListener("click",clear);
togglebutton.addEventListener("click",toggle);
canvas.addEventListener("click",draw);
