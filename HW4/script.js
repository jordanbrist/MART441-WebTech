left = 0
right = 0

console.log(left + right);

function doWhileRestart() {
    shouldWeContinue = false;
    do {
        location.reload();

    } while (shouldWeContinue);
}

function getChoice1() //start
{
    var myChoice = document.getElementById("choice").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Left") {
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice2").style.display = "inline";
        document.getElementById("btnSubmit2").style.display = "inline";

        document.getElementById("mainImage").src = "../HW4/images/imageL.png"

        myQuestion.innerHTML = "Upon opening the left door, the other disappears. The door enters into a room, it is pitch black inside. The only light you can see is shining down on two light switches. The one on the left is in the down position and the one on the right is in the up position. Which switch would you like to flip? Left or Right?";

        left = left + 1;
        console.log(left + right);

    }
    else if (myChoice === "Right") {
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice3").style.display = "inline";
        document.getElementById("btnSubmit3").style.display = "inline";

        myQuestion.innerHTML = "Upon opening the right door, the other disappears. The door enters into a room, it is blindingly bright inside, so much so that your eyes begin to hurt. You can barely make out two objects on a table in front of you. On the left is a pair of sunglasses that is accented with valuable gemstones and precious metals. On the right is a pair of ski goggles. Which do you put on? Left or Right?";

        right = right + 1;
        console.log(left + right);

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice2() //L
{
    var answer = document.getElementById("choice2").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Left") //L + L
    {
        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit2").style.display = "none";

        document.getElementById("choice4").style.display = "inline";
        document.getElementById("btnSubmit4").style.display = "inline";

        document.getElementById("mainImage").src = "../HW4/images/imageL+L.png"

        myQuestion.innerHTML = "You flip the switch to the UP position. You immediately feel the ground beneath you give way. You are falling. Sliding down a large chute. You approach a fork, a path to the left and a path to the right. Which one would you like to take? Left or Right?";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Right") //L + R
    {
        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit2").style.display = "none";

        document.getElementById("choice6").style.display = "inline";
        document.getElementById("btnSubmit6").style.display = "inline";

        document.getElementById("mainImage").src = "../HW4/images/imageL+R.png"

        myQuestion.innerHTML = "You flip the switch to the DOWN position. The lights come on and the room around you looks strangely blank. White walls and no windows. In front of you is a black door covered in ornate carvings. Looking down you can see that you are standing on a trap door. Where would you like to go? Forward or Down?";

        right = right + 1;
        console.log(left + right);

    }
}

function getChoice4() //L + L
{
    var answer = document.getElementById("choice4").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Left") // L + L + L
    {
        document.getElementById("choice4").style.display = "none";
        document.getElementById("btnSubmit4").style.display = "none";

        document.getElementById("choice8").style.display = "inline";
        document.getElementById("btnSubmit8").style.display = "inline";

        document.getElementById("mainImage").src = "../HW4/images/imageL+L+L.png"

        myQuestion.innerHTML = "You land safely in a body of water. Looking around, you see that you are in a cavern. As you swim to shore, you see that there are two exits. A mine cart and a hand-operated elevator. Both look dangerous, but there are no other options. Do you take the cart or the elevator?";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Right") //L + L + R
    {
        document.getElementById("choice4").style.display = "none";
        document.getElementById("btnSubmit4").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline"

        document.getElementById("mainImage").src = "../HW4/images/imageL+L+R.png"

        myQuestion.innerHTML = "As you are falling, your eyes begin to adjust to the darkness. You look down and you can see the ground. It is approaching very fast. The ground was covered in large spikes.";

        right = right + 1;
        console.log(left + right);

    }
}


function getChoice6() //L + R
{
    var answer = document.getElementById("choice6").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Forward") //L + R + L
    {
        document.getElementById("choice6").style.display = "none";
        document.getElementById("btnSubmit6").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline"

        myQuestion.innerHTML = " Content in progress. Please try another option";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Down") //L + R + R
    {
        document.getElementById("choice6").style.display = "none";
        document.getElementById("btnSubmit6").style.display = "none";

        document.getElementById("choice4").style.display = "inline";
        document.getElementById("btnSubmit4").style.display = "inline";

        myQuestion.innerHTML = "You start investigating the trapdoor, you don't see any markings that allow you to open it. Suddenly, you hear the two switches flip. The lights go dark and you begin to fall. You are sliding down a large chute. You approach a fork, a path to the left and a path to the right. Which one would you like to take?";

        right = right + 1;
        console.log(left + right);

    }
}



function getChoice3() //R
{
    var answer = document.getElementById("choice3").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Left") //R + L
    {
        document.getElementById("choice3").style.display = "none";
        document.getElementById("btnSubmit3").style.display = "none";

        document.getElementById("choice5").style.display = "inline";
        document.getElementById("btnSubmit5").style.display = "inline";

        myQuestion.innerHTML = "The sunglasses are polarized, you can see quite well. In fact, you can see that you are standing on a pressure sensitive plate. You don't know what will happen if you step off of it. You can step off of it to the left or to the right. Which way do you move? Left or Right?";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Right") // R + R
    {
        document.getElementById("choice3").style.display = "none";
        document.getElementById("btnSubmit3").style.display = "none";

        document.getElementById("choice7").style.display = "inline";
        document.getElementById("btnSubmit7").style.display = "inline";

        myQuestion.innerHTML = "You don the ski goggles. They are more than they appear to be. A heads-up-display appears on the lens. You can see the outline of a door, a landmine on the ground to your right, and a small depressurizing airlock on the wall. As you sidestep the landmine, the door on the wall opens and a backpack descends from the ceiling. Your goggles tell you that the backpack is a parachute with survival equipment inside. Would you like to enter the door or grab the backpack? Door or Bag?";

        right = right + 1;
        console.log(left + right);

    }
}

function getChoice5() //R + L
{
    var answer = document.getElementById("choice5").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Left") //R + L + L
    {
        document.getElementById("choice5").style.display = "none";
        document.getElementById("btnSubmit5").style.display = "none";

        document.getElementById("choice9").style.display = "inline";
        document.getElementById("btnSubmit9").style.display = "inline";

        myQuestion.innerHTML = "As you move to the left, you see the plate that you were standing on gently rise up and click into place. A buzzer sounds and a door shaped hole appears on the wall in front of you. At the same time, a backpack is lowered from the ceiling. Would you like to go through the door or grab the bag?"

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Right") //R + L + R
    {
        document.getElementById("choice5").style.display = "none";
        document.getElementById("btnSubmit5").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline";

        myQuestion.innerHTML = "As you move to the right, you hear a click and a gentle beep before everything is silent. You stepped on a landmine...";

        right = right + 1;
        console.log(left + right);

    }
}

function getChoice7()// R + R
{
    var answer = document.getElementById("choice7").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Door") //R + R + L
    {
        document.getElementById("choice7").style.display = "none";
        document.getElementById("btnSubmit7").style.display = "none";

        document.getElementById("choice11").style.display = "inline";
        document.getElementById("btnSubmit11").style.display = "inline";

        myQuestion.innerHTML = "You enter the door and are greeted by a figure made of shadow and mist. He tells you that he is from a distant planet and is testing the reasoning and decision making skills of humans. He congratulates you and asks if you would like to travel the galaxy with him or if you'd rather go home. Which do you choose? "

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Bag")//R + R + R
    {
        document.getElementById("choice7").style.display = "none";
        document.getElementById("btnSubmit7").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline";

        myQuestion.innerHTML = "You grab hold of the backpack. As you remove it from the hook it descended on, you feel the air begin to evacuate from the room. Try as you might, you can't hold your footing. You are sucked out of the room through the airlock. You are high in the sky, plummeting back to the ground. Luckily, your goggles show you the appropriate vector to travel and the altitude at which to pull your parachute. You land safely and are rescued. You take your high tech goggles and sell them to a large tech corporation. They didn't pay you very well compared to what they make by profiting off of the life changing technology.";

        right = right + 1;
        console.log(left + right);


    }
}

function getChoice8()//L + L + L
{
    var answer = document.getElementById("choice8").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Cart") //L + L + L + L
    {
        document.getElementById("choice8").style.display = "none";
        document.getElementById("btnSubmit8").style.display = "none";

        document.getElementById("choice10").style.display = "inline";
        document.getElementById("btnSubmit10").style.display = "inline";

        myQuestion.innerHTML = "You slowly push the mine cart along the track until it starts to gain momentum. You hop in the cart as it picks up speed. You are continuing to pick up speed as the cart reaches a junction. Straight ahead of you is a large opening in the cave wall; it leads outside. To the right, the tracks dip downward into the darkness. Which way do you go? ";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Elevator") // L + L + L + R
    {
        document.getElementById("choice8").style.display = "none";
        document.getElementById("btnSubmit8").style.display = "none";

        document.getElementById("choice").style.display = "inline";
        document.getElementById("btnSubmit").style.display = "inline";

        myQuestion.innerHTML = "You can feel the boards creak and wobble beneath your feet as you step onto the elevator. You begin to crank the wheel and slowly begin to rise back up to the surface. You keep cranking until your arms go numb. You reach the surface and see a beautiful vista. Congratulations!";

        right = right + 1;
        console.log(left + right);

    }
}

function getChoice10() //L + L + L + L
{
    var answer = document.getElementById("choice10").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Straight") // L + L + L + L + L
    {
        document.getElementById("choice10").style.display = "none";
        document.getElementById("btnSubmit10").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline"


        myQuestion.innerHTML = "The sunlight gets brighter as you speed straight ahead. As you approach the exit, you see a dilapidated sign hanging above the opening that reads: DEAD END - BRIDGE OUT. Just before reaching the edge, the cart comes to a screeching stop. However, the momentum carries you over the edge. You made it outside, but you are falling from a mountain cliff.";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Right") // L + L + L + L + R
    {
        document.getElementById("choice10").style.display = "none";
        document.getElementById("btnSubmit10").style.display = "none";

        myQuestion.innerHTML = "As you take the path to the right, you can see that the tracks take a sharp downward turn. It feels like you are riding a rollercoaster. The tracks continue to twist and turn as they shoot up and down to gain speed. You eventually come to a gentle stop. You've reached the end of the ride. Please take a souvenir on your way out.";

        right = right + 1;
        console.log(left + right);

    }
}




//Tips for B
function getChoice9() //R + L + L
{
    var answer = document.getElementById("choice9").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Door") //R + L + L + L
    {
        document.getElementById("choice9").style.display = "none";
        document.getElementById("btnSubmit9").style.display = "none";

        document.getElementById("choice13").style.display = "inline";
        document.getElementById("btnSubmit13").style.display = "inline";

        myQuestion.innerHTML = "You enter the door and are greeted by a figure made of shadow and mist. He tells you that he is from a distant planet and is testing the reasoning and decision making skills of humans. He congratulates you and asks if you would like to travel the galaxy with him or if you’d rather go home. Which do you choose?";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Bag") // R + L + L + R
    {
        document.getElementById("choice9").style.display = "none";
        document.getElementById("btnSubmit9").style.display = "none";

        document.getElementById("choice").style.display = "inline";
        document.getElementById("btnSubmit").style.display = "inline";


        myQuestion.innerHTML = "You grab hold of the backpack. As you remove it from the hook it descended on, you feel the air begin to evacuate from the room. Try as you might, you can’t hold your footing. You are sucked out of the room through a small opening on the wall. You are high in the sky, plummeting back to the ground. You see that you can aim for a lake below you. Would you like to aim for the lake or check your new backpack?";

        right = right + 1;
        console.log(left + right);

    }
}


function getChoice11() //R + R + L
{
    var answer = document.getElementById("choice11").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Space") // R + R + L + L
    {
        document.getElementById("choice11").style.display = "none";
        document.getElementById("btnSubmit11").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline";

        myQuestion.innerHTML = "You travel across the Milky Way with this strange being you know nothing about. He doesn’t have any entertainment on board and he only eats minerals. You don’t have a great time. Eventually you ask to be dropped off back on Earth. Your journey was interesting yet uneventful. Your hi-tech space goggles allow you to advance the technology of Earth. You win a Nobel Prize. Not bad.";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Home") // R + R + L + R 
    {
        document.getElementById("choice11").style.display = "none";
        document.getElementById("btnSubmit11").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline";

        myQuestion.innerHTML = "The being understands and offers to let you keep a souvenir. He reaches to give you an alien plant. Your goggles indicate that the plant will absorb the nutrients from surrounding fauna. You ask for something else instead. The alien hands you a bag labeled “EARTH FOOD”. When you get home and try to eat the “EARTH FOOD” you see that it is actually a bag full of precious gems. You use the money from the gems to start your own tech company and reverse engineer the space goggles. You are now the richest person in the world. Good Job!";

        right = right + 1;
        console.log(left + right);

    }
}

function getChoice13() //R + L + L + L
{
    var answer = document.getElementById("choice13").value;
    var myQuestion = document.getElementById("question");
    if (answer === "Space") // R + L + L + L + L
    {
        document.getElementById("choice13").style.display = "none";
        document.getElementById("btnSubmit13").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline";

        myQuestion.innerHTML = "You travel across the Milky Way with this strange being you know nothing about. He doesn’t have any entertainment on board and he only eats minerals. You don’t have a great time. Eventually you ask to be dropped off back on Earth. Your journey was interesting yet uneventful. Also, you think that your new friend ate the gemstones off of your swaggy new glasses so now they aren’t worth much. All in all, it wasn’t great. ";

        left = left + 1;
        console.log(left + right);

    }
    else if (answer === "Home") // R + L + L + L + R
    {
        document.getElementById("choice13").style.display = "none";
        document.getElementById("btnSubmit13").style.display = "none";

        document.getElementById("btnTryAgain").style.display = "inline";

        myQuestion.innerHTML = "The being understands and offers to let you keep a souvenir. He gives you an alien plant and sends you home. The plant is an invasive species and it destroys your garden. But hey, you have proof of extraterrestrial life so it feels like a win. Good Job!";

        right = right + 1;
        console.log(left + right);

    }
}





