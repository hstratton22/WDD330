//window.onload = function () {
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);
/*
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function () {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}*/
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
    console.log(context);
};
drawGradient();

function drawCircle(canvas) {
    var canvas = document.getElementById("demo4");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath(); 
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke(); 
};
drawCircle();

function drawCircle2(canvas) {
    var canvas = document.getElementById("demo5");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath(); 
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke(); 
};
drawCircle2();

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);