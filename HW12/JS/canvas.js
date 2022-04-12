var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var collectibles1;
var squareArray = [];
var collectiblesArray = [];
var lives = 3;
var score = 0;

$(document).ready(function(){
    setup();  

    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(x, y, 10, 10, "blue");
    square2 = new Square(400, 400, 100, 100, "red");
    $.getJSON("DATA/squares.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });


function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = "blue";
    ctx.fillRect(square1.x, square1.y, square1.w, square1.h);
    ctx.fillStyle = square2.color;
    ctx.fillRect(square2.x, square2.y, square2.w, square2.h);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].color;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);   

}



function getKey(event) {

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

    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
        //console.log(test2);
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }

    drawSquare(); 
    
}

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

