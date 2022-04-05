var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var x3 = 500;
var y3 = 500;
var x4 = 200;
var y4 = 400;
var square1;
var square2;
var square3;
var square4;



createSquares();

drawSquare();


setInterval(moveSquare2, 1500);
setInterval(moveSquare3, 2500);
setInterval(moveSquare4, 1000);


function createSquares() {
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "red");
    square3 = new Square(x3, y3, 60, 60, "green");
    square4 = new Square(x4, y4, 40, 40, "purple");
}


function moveSquare2() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));

    drawSquare();
}

function moveSquare3() {

    square3.setX(Math.floor(Math.random() * canvas.width));

    drawSquare();
}

function moveSquare4() {

    square4.setY(Math.floor(Math.random() * canvas.height));

    drawSquare();
}


function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
    ctx.fillStyle = square3.theColor;
    ctx.fillRect(square3.theX, square3.theY, square3.theWidth, square3.theHeight);
    ctx.fillStyle = square4.theColor;
    ctx.fillRect(square4.theX, square4.theY, square4.theWidth, square4.theHeight);

}

//jQuery for keypress
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});


function getKey(event) {

    var didCollide1 = hasCollided(square1, square2);
    if (didCollide1) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);

    }

    var didCollide2 = hasCollided(square1, square3);
    if (didCollide2) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setWidth(square1.theWidth + 2);
        square1.setHeight(square1.theHeight + 2);
        square3.setWidth(square3.theWidth + 5);
        square3.setHeight(square3.theHeight + 1);
    }

     var didCollide3 = hasCollided(square1, square4);
     if (didCollide3) {
         canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
         square1.setWidth(square1.theWidth + 5);
         square1.setHeight(square1.theHeight + 5);
         square4.setWidth(square4.theWidth + 1);
        square4.setHeight(square4.theHeight + 10);
     }
 
    
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w" && y + square1.height > 0) {
        moveUp();
    } else if (actualLetter == "s" && y + square1.height < canvas.height) {
        moveDown();
    } else if (actualLetter == "d" && x + square1.width < canvas.width) {
        moveRight();
    } else if (actualLetter == "a" && x + square1.width > 0) {
        moveLeft();
    }

    drawSquare();

    var hitBoundary = boundaryCollide1(square1);
    if (hitBoundary) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setX(square1.theX + 20);
        square1.setY(square1.theY + 20);

    }

    var hitBoundary2 = boundaryCollide2(square1);
    if (hitBoundary2) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setX(square1.theX - 20);
        square1.setY(square1.theY - 20);

    }

    drawSquare();
}


function moveUp() {
    square1.setY(square1.theY - 10);
}

function moveDown() {
    square1.setY(square1.theY + 10);
}

function moveLeft() {
    square1.setX(square1.theX - 10);
}

function moveRight() {
    square1.setX(square1.theX + 10);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function boundaryCollide1(object1) {
    return (
        ((object1.y + object1.height) < 5) ||
        ((object1.x + object1.width) < 5)
    );
}

function boundaryCollide2(object1) {
    return (
        ((object1.y + object1.height) > 590) ||
        ((object1.x + object1.width) > 790)
    );
}

