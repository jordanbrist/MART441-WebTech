var imageTag = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20",];
var imagePath = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png", "images/image5.png", "images/image6.png", "images/image7.png", "images/image8.png", "images/image9.png", "images/image10.png"];
var back = "images/back.jpg";
var images = new Array();

function printBack()
{
    createRandomImageArray();

    for(var i = 0; i < imageTag.length; i++)
    {
        document.getElementById(imageTag[i]).src= back;
    }
}


function createRandomImageArray()

{
    var count = [0,0,0,0,0,0,0,0,0,0];

    while(images.length < 20)
    {
        var randomNumber = Math.floor(Math.random() * imagePath.length)
        if(count[randomNumber] < 2)
        {
            images.push(imagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }

}

function flip(number)
{
    document.getElementById(imageTag[number]).src= images[number];
}