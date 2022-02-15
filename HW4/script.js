
function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "Left")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="inline";
                document.getElementById("btnSubmit2").style.display="inline";
                
                document.getElementById("mainImage").src = "../HW4/images/imageL.png"
                myQuestion.innerHTML = "Upon opening the left door, the other disappears. The door enters into a room, it is pitch black inside. The only light you can see is shining down on two light switches. The one on the left is in the down position and the one on the right is in the up position. Which switch would you like to flip? Left or Right?";
            }
            else if(myChoice === "Right")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice3").style.display="inline";
                document.getElementById("btnSubmit3").style.display="inline";

                document.getElementById("mainImage").src = "../HW4/images/imageR.png"
                myQuestion.innerHTML = "Upon opening the right door, the other disappears. The door enters into a room, it is blindingly bright inside, so much so that your eyes begin to hurt. You can barely make out two objects on a table in front of you. On the left is a pair of sunglasses that is accented with valuable gemstones and precious metals. On the right is a pair of ski goggles. Which do you put on? Left or Right?";

            }
            else
            {
                myQuestion.innerHTML = "Invalid answer";
            }
        
        }
        function getChoice2()
        {
            var myChoice = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "Left")
            {
                document.getElementById("mainImage").src = "../HW4/images/imageL+L.png"
                
                myQuestion.innerHTML = "You flip the switch to the UP position. You immediately feel the ground beneath you give way. You are falling. Sliding down a large chute. You approach a fork, a path to the left and a path to the right. Which one would you like to take? Left or Right?";
            }
            else if(myChoice === "Right")
            {
                lose = 1;
                tryAgain();
                document.getElementById("mainImage").src = "../HW4/images/imageL+R.png"
                myQuestion.innerHTML = "You flip the switch to the DOWN position. The lights come on and the room around you looks strangely blank. White walls and no windows. In front of you is a black door covered in ornate carvings. Looking down you can see that you are standing on a trap door. Where would you like to go? Forward or Down?";
            }
            
        }

        function getChoice3()
        {
            var myChoice = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "Left")
            {
                myQuestion.innerHTML = "The sunglasses are polarized, you can see quite well. In fact, you can see that you are standing on a pressure sensitive plate. You don't know what will happen if you step off of it. You can step off of it to the left or to the right. Which way do you move? Left or Right?";
            }
            else if(myChoice === "Right")
            {
                myQuestion.innerHTML = "You don the ski goggles. They are more than they appear to be. A heads-up-display appears on the lens. You can see the outline of a door, a landmine on the ground to your right, and a small depressurizing airlock on the wall. As you sidestep the landmine, the door on the wall opens and a backpack descends from the ceiling. Your goggles tell you that the backpack is a parachute with survival equipment inside. Would you like to enter the door or grab the backpack? Door or Bag?";
            }
            
        }

        function getChoice4()
        {
            var myChoice = document.getElementById("choice4").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "Left")
            {

                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";

                document.getElementById("choice4").style.display="inline";
                document.getElementById("btnSubmit4").style.display="inline";

                document.getElementById("mainImage").src = "../HW4/images/imageL+L+L.png"
                myQuestion.innerHTML = "You land safely in a body of water. Looking around, you see that you are in a cavern. As you swim to shore, you see that there are two exits. A mine cart and a hand-operated elevator. Both look dangerous, but there are no other options. Do you take the cart or the elevator?";
            }
            else if(myChoice === "Right")
            {

                document.getElementById("mainImage").src = "../HW4/images/imageL+L+R.png"

                myQuestion.innerHTML = "As you are falling, your eyes begin to adjust to the darkness. You look down and you can see the ground. It is approaching very fast. The ground was covered in large spikes.";
            }
            
        }
