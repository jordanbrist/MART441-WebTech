var imageTag = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20",];
var imagePath = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png", "images/image5.png", "images/image6.png", "images/image7.png", "images/image8.png", "images/image9.png", "images/image10.png"];
var back = "images/back.jpg";
var images = new Array();
var cardOne = -1;
var cardTwo = -1;
var attempts = 0;
var pairs = 0;
var player = { "firstname": "", "lastname": "", "age": 0, "attempts": 0 }; //JSON


function printBack() {

    createRandomImageArray();

    for (var i = 0; i < imageTag.length; i++) {
        document.getElementById(imageTag[i]).src = back;
    }

}

function createRandomImageArray() {

    var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    while (images.length < 20) {
        var randomNumber = Math.floor(Math.random() * imagePath.length)
        if (count[randomNumber] < 2) {
            images.push(imagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flip(number) {

    if (cardOne >= 0) {
        cardTwo = number;
        document.getElementById(imageTag[number]).src = images[cardTwo];

    }
    else if (cardOne < 0) {
        cardOne = number;
        document.getElementById(imageTag[cardOne]).src = images[cardOne];

    }
    if (images[cardTwo] != images[cardOne] && cardOne >= 0 && cardTwo >= 0) {
        attempts++;
        setTimeout(imageReset, 1000);
    }
    else if (images[cardTwo] == images[cardOne] && cardOne >= 0 && cardTwo >= 0) {
        attempts++;
        pairs++;

        cardOne = -1;
        cardTwo = -1;
        
        if (pairs == images.length / 2) {
            player.attempts = attempts;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "pageEnd.html";
        }
    }
}

function imageReset() {

    console.log(cardOne);

    document.getElementById(imageTag[cardOne]).src = back;
    document.getElementById(imageTag[cardTwo]).src = back;

    cardOne = -1;
    cardTwo = -1;
}


function addInfo() {
    
    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById("inputLastName").value;
    var age = document.getElementById("inputAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;

    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}


function playerInfo() {

    var playerInformation = localStorage.getItem("playerInfo");

    player = JSON.parse(playerInformation);

    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
        "Age: " + player.age + "<br>" +
        "Score (lower is better): " + player.attempts;

    if (document.getElementById("endScore") != null) {
        document.getElementById("endScore").innerHTML = str;
    }


}


