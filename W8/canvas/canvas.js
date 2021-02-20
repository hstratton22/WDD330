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
    //window.open(canvas5.toDataURL("image/png"));
    console.log(canvas5.toDataURL("image/png"));
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

window.addEventListener("load", drawImageToCanvas, false);
function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
}

//doesn't work. See grascale.html and color-manipulation.js instead
function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 68, 68);
    var imageData = context.getImageData(0, 0, 200, 200);
    //console.log(imageData);
    
    var red, green, blue, greyscale;
    
    for (var i = 0; i < imageData.data.length; i += 4) {//This is because each pixel takes up four values in the imageData array—one number each for the R, G, B, and A values.
    red = imageData.data[i];
    green = imageData.data[i + 1];
    blue = imageData.data[i + 2];
    grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
    imageData.data[i] = grayscale; 
    imageData.data[i + 1] = grayscale;  
    imageData.data[i + 2] = grayscale;
    
    context.putImageData(imageData, 0, 0);
    }
}
//manipulateImage();

//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
/*var img = new Image();
img.crossOrigin = 'anonymous';
img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/69/Crystal_Project_browser.png';

var canvas = document.getElementById('demo7');
var ctx = canvas.getContext('2d');

img.onload = function() {
    ctx.drawImage(img, 0, 0);
};

var original = function() {
    ctx.drawImage(img, 0, 0);
};

var invert = function() {
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
        data[i]     = 255 - data[i];     // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
};

var grayscale = function() {
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i]     = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
};

const inputs = document.querySelectorAll('[name=color]');
for (const input of inputs) {
    input.addEventListener("change", function(evt) {
        switch (evt.target.value) {
            case "inverted":
                return invert();
            case "grayscale":
                return grayscale();
            default:
                return original();
        }
    });
}
*/
