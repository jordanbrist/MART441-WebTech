var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var mySquare;
var squares;
var square1, square2, square3, square4;
var collectibles1, collectibles2, collectible3;
var squareArray = [];
var collectiblesArray = [];
var lives = 5;
var collectibles = 0;

var myX = [];
for (let i = 1; i < 4; i++) {
    myX.push(squares.x);
}

var myY = [];
for (let i = 1; i < 4; i++) {
    myY.push(squares.y);
}

var myW = [];
for (let i = 1; i < 4; i++) {
    myW.push(squares.w);
}

var myH = [];
for (let i = 1; i < 4; i++) {
    myH.push(squares.h);
}

var myColor = [];
for (let i = 1; i < 4; i++) {
    myColor.push(squares.color);
}

createSquares();

drawSquare();



function createSquares() {
    mySquare = new Square(x, y, 10, 10, "blue");
    square1 = new Square(myX, myY, myW, myH, myColor);
    square2 = new Square(myX, myY, myW, myH, myColor);
    square3 = new Square(myX, myY, myW, myH, myColor);
    square4 = new Square(myX, myY, myW, myH, myColor);
}



function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 10, 10);
    ctx.fillStyle = square1.color;
    ctx.fillRect(square1.x, square1.y, square1.w, square1.h);
    ctx.fillStyle = square2.color;
    ctx.fillRect(square2.x, square2.y, square2.w, square2.h);
    ctx.fillStyle = square3.color;
    ctx.fillRect(square3.x, square3.y, square3.w, square3.h);
    ctx.fillStyle = square4.color;
    ctx.fillRect(square4.x, square4.y, square4.w, square4.h);

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

