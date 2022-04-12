var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;
var square2;
var collectibles1;
var squareArray = [];
var collectiblesArray = [];
var direction;
var lives = 3;
var score = 0;

$(document).ready(function () {
    setup();
    $(this).keypress(function (event) {
        getKey(event);

    });
});


function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(x, y, 20, 20, "blue");

    collectibles1 = new Square(200, 200, 25, 25, "yellow");
    $.getJSON("DATA/collectibles.json", function (data) {
        for (var i = 0; i < data.collectibles.length; i++) {
            collectiblesArray.push(new Square(data.collectibles[i].x, data.collectibles[i].y, data.collectibles[i].h, data.collectibles[i].w, data.collectibles[i].color));
        }})

    
    square2 = new Square(400, 400, 100, 100, "red");
    $.getJSON("DATA/squares.json", function (data) {
        for (var i = 0; i < data.squares.length; i++) {
            squareArray.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
}

function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    
    ctx.fillStyle = square1.color;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

    ctx.fillStyle = square2.color;
    ctx.fillRect(square2.x, square2.y, square2.w, square2.h);
    for (var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = squareArray[i].color;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
    ctx.fillStyle = collectibles1.color;
    ctx.fillRect(collectibles1.x, collectibles1.y, collectibles1.w, collectibles1.h);
    for (var i = 0; i < collectiblesArray.length; i++) {
        ctx.fillStyle = collectiblesArray[i].color;
        ctx.fillRect(collectiblesArray[i].x, collectiblesArray[i].y, collectiblesArray[i].width, collectiblesArray[i].height);
    }
    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + lives, 150, 20);

    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);

}

    function getKey(event) {

        var char = event.which || event.keyCode;
        var actualLetter = String.fromCharCode(char);
        if (actualLetter == "w") 
        {
            moveUp();
        } 
        else if (actualLetter == "s") 
        {
            moveDown();
        } 
        else if (actualLetter == "a") 
        {
            moveLeft();
        } 
        else if (actualLetter == "d") 
        {
            moveRight();
        }

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

    var test3 = hasCollided(square1,collectibles1);
    var test4 = false;
    for(var i = 0; i < collectiblesArray.length; i++)
    {

        test4 = hasCollided(square1,collectiblesArray[i]);
        if(test4 == true)
        {
            break;
        }
        
        //console.log(test2);
    }
    if(test3 || test4)
    {
        score++;
    }




        drawSquare();

    }

    function moveUp() {
        y-=10;
        square1.setY(y);
    }
    
    function moveDown() {
        y+=10;
        square1.setY(y);
    }
    
    function moveLeft() {
        x-=10;
        square1.setX(x);
    }
    
    function moveRight() {
        x+=10;
        square1.setX(x);
    }
    


function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
