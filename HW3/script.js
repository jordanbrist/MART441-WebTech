var points = 0
var bread = 0

console.log(points);

function progression(option) {
    var pick1 = document.getElementById("option1").innerHTML;
    var pick2 = document.getElementById("option2").innerHTML;
    var pick3 = document.getElementById("option3").innerHTML;
    
    if (option == 1 && pick1 == "Go North") {
        document.getElementById("main").innerHTML = "You think you recognize the area, but aren't quite sure. There is something strange looking behind a tree. Do you want to investigate?";
        document.getElementById("option1").innerHTML = "Yes, investigate the thing you see";
        document.getElementById("option2").innerHTML = "No, keep moving North";
        document.getElementById("option3").innerHTML = "No, I think I'll go to the West";  
        points = points + 1;
        console.log(points);
    } 
    
        else if (option == 2 && pick2 == "Go West") {
            document.getElementById("main").innerHTML = "You think you recognize the area, but aren't quite sure. You see a large object blocking the path that looks like... a loaf of bread...?";
            document.getElementById("option1").innerHTML = "Check it out";
            document.getElementById("option2").innerHTML = "Walk around it";
            document.getElementById("option3").innerHTML = "I think I'll steer clear of that and go North"; 
            points = points + 1;
            console.log(points);
        }

        else if (option == 3 && pick3 == "Stay Put") {
            document.getElementById("main").innerHTML = "You sit down and relax. Someone will find you, right?";
            document.getElementById("option1").innerHTML = "Stay Put";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "Go North";
            points = points + 0;
            console.log(points);
        }

            else if (option == 1 && pick1 == "Stay Put") {
                document.getElementById("main").innerHTML = "Uhh... I don't think anyone is going to find you... maybe you should choose a direction to walk in.";
                document.getElementById("option1").innerHTML = "Stay Put";
                document.getElementById("option2").innerHTML = "Go West";
                document.getElementById("option3").innerHTML = "Go North"; 
                points = points - 1;
                console.log(points);
            }

            else if (option == 3 && pick3 == "Go North") {
                document.getElementById("main").innerHTML = "You think you recognize the area, but aren't quite sure. There is something strange looking behind a tree. Do you want to investigate?";
                document.getElementById("option1").innerHTML = "Yes, investigate the thing you see";
                document.getElementById("option2").innerHTML = "No, keep moving North";
                document.getElementById("option3").innerHTML = "No, I think I'll go to the West";  
                points = points + 1;
                console.log(points);
            }

            else if (option == 2 && pick2 == "Head North") {
                document.getElementById("main").innerHTML = "You think you recognize the area, but aren't quite sure. There is something strange looking behind a tree. Do you want to investigate?";
                document.getElementById("option1").innerHTML = "Yes, investigate the thing you see";
                document.getElementById("option2").innerHTML = "No, keep moving North";
                document.getElementById("option3").innerHTML = "No, I think I'll go to the West";  
                points = points + 1;
                console.log(points);
            }


        else if (option == 1 && pick1 == "Yes, investigate the thing you see") {
            document.getElementById("main").innerHTML = "You see a man (most of him anyways) laying on the ground. There is a lot of blood... and some footprints.";
            document.getElementById("option1").innerHTML = "Look at the tracks";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "How much blood?";
            points = points + 1; 
            console.log(points);
        }

        else if (option == 1 && pick1 == "How much Blood?") {
            document.getElementById("main").innerHTML = "A lot...";
            document.getElementById("option1").innerHTML = "Look at the tracks";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "RUN";
            points = points + 1; 
            console.log(points);
        }

        else if (option == 1 && pick1 == "Look at the tracks") {
            document.getElementById("main").innerHTML = "The tracks lead North";
            document.getElementById("option1").innerHTML = "Follow the tracks";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "What do they look like?";
            points = points + 1; 
            console.log(points);
        }

        else if (option == 1 && pick1 == "look at the tracks") {
            document.getElementById("main").innerHTML = "The tracks lead North";
            document.getElementById("option1").innerHTML = "Follow the tracks";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "What do they look like?";
            points = points + 1; 
            console.log(points);
        }

        else if (option == 2 && pick2 == "No, keep moving North") {
            document.getElementById("main").innerHTML = "Aha! You see the exit! Wait, is that a bugbear up ahead?";
            document.getElementById("option1").innerHTML = "FIGHT";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "RUN"; 
            points = points + 0;
            console.log(points);
        }

        else if (option == 3 && pick3 == "No, I think I'll go to the West") {
            document.getElementById("main").innerHTML = "You think you recognize the area, but aren't quite sure. You see an object on the path that looks like... a loaf of bread...?";
            document.getElementById("option1").innerHTML = "Check it out";
            document.getElementById("option2").innerHTML = "Walk around it";
            document.getElementById("option3").innerHTML = "I think I'll steer clear of that and go North"; 
            points = points + 0;
            console.log(points);
        }

        else if (option == 1 && pick1 == "Check it out") {
            document.getElementById("main").innerHTML = "It definitely smells like bread...";
            document.getElementById("option1").innerHTML = "Pick it up";
            document.getElementById("option2").innerHTML = "Head North";
            document.getElementById("option3").innerHTML = "Taste it";
            points = points + 1;
            console.log(points);
        }

        else if (option == 1 && pick1 == "Pick it up") {
            document.getElementById("main").innerHTML = "Yep, it's just bread.";
            document.getElementById("option1").innerHTML = "Keep moving";
            document.getElementById("option2").innerHTML = "Keep Moving";
            document.getElementById("option3").innerHTML = "Taste it";
            points = points + 1;
            bread = bread + 1;
            console.log(points);
        }

        else if (option == 3 && pick3 == "Taste it") {
            document.getElementById("main").innerHTML = "Tastes like Bread";
            document.getElementById("option1").innerHTML = "Keep moving";
            document.getElementById("option2").innerHTML = "Keep moving";
            document.getElementById("option3").innerHTML = "Eat the whole thing";
            points = points + 1;
            bread = bread + 1;
            console.log(points);
        }

            else if (option == 3 && pick3 == "Eat the whole thing") {
                document.getElementById("main").innerHTML = "Really? The whole loaf?";
                document.getElementById("option1").innerHTML = "Keep moving";
                document.getElementById("option2").innerHTML = "Keep moving";
                document.getElementById("option3").innerHTML = "Keep moving";
                points = points + 1;
                bread = bread - 1;
                console.log(points);
            }


        else if (option == 2 && pick2 == "Walk around it") {
            document.getElementById("main").innerHTML = "Aha! You see the exit! Wait, is that a bugbear up ahead?";
            document.getElementById("option1").innerHTML = "FIGHT";
            document.getElementById("option2").innerHTML = "Head North";
            document.getElementById("option3").innerHTML = "RUN"; 
            points = points + 0;
            console.log(points);
        }

        else if (option == 3 && pick3 == "I think I'll steer clear of that and go North") {
            document.getElementById("main").innerHTML = "You think you recognize the area, but aren't quite sure. There is something strange looking behind a tree. Do you want to investigate?";
            document.getElementById("option1").innerHTML = "Yes, investigate the thing you see";
            document.getElementById("option2").innerHTML = "No, keep moving North";
            document.getElementById("option3").innerHTML = "No, I think I'll go to the West";
            points = points + 0;
            console.log(points);
        }

        else if (option == 1 && pick1 == "FIGHT" && points >=3 ) {
            document.getElementById("main").innerHTML = "Wow! That thing was scared off surprisingly easily. Maybe too easily... Oh well.";
            document.getElementById("option1").innerHTML = "EXIT";
            document.getElementById("option2").innerHTML = "Go West";
            document.getElementById("option3").innerHTML = "Go Back"; 
            points = points + 1;
            console.log(points);
        }

        else if (option == 1 && pick1 == "FIGHT" && points <3 ) {
            document.getElementById("main").innerHTML = "The bugbear was was not impressed. You died.";
            document.getElementById("option1").innerHTML = "Try Again";
            document.getElementById("option2").innerHTML = "Try Again";
            document.getElementById("option3").innerHTML = "Try Again"; 
            points = points + 0;
            console.log(points);
        }
    
        else if (option == 3 && pick3 == "RUN" && points >=5 ) {
            document.getElementById("main").innerHTML = "Good thinking, You got away. Although, I think you might be lost again.";
            document.getElementById("option1").innerHTML = "Go South";
            document.getElementById("option2").innerHTML = "Go East";
            document.getElementById("option3").innerHTML = "Go Back"; 
            points = points + 1;
            console.log(points);
        }

        else if (option == 3 && pick3 == "RUN" && points <5 ) {
            document.getElementById("main").innerHTML = "You tripped on a root as you tried to flee. You died.";
            document.getElementById("option1").innerHTML = "Try Again";
            document.getElementById("option2").innerHTML = "Try Again";
            document.getElementById("option3").innerHTML = "Try Again"; 
            points = points + 0;
            console.log(points);
        }




}