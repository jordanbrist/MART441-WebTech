var viewMasterArray = new Array();

// this is the main ViewMaster class

class ViewMaster {

    constructor(title, img, desc, artist, date) {
        this.title = title;
        this.img = img;
        this.artist = artist;
        this.date = date;
        this.desc = desc;
    }


    // this returns the img, title, description, artist, and date

    toString1() {
        return this.img;
    }

    toString2() {
        return "<br>" + this.title;
    }

    toString3() {
        return "<br>" + this.artist;
    }

    toString4() {
        return this.desc;
    }

    toString5() {
        return this.date;
    }

}


// creates objects and adds them to the viewMasterArray

function createAndAddToArray() {

    let ViewMaster1 = new ViewMaster("I Can't Breathe (In Honor of Black Lives)", "./images/image1.jpg", "This is a piece that addresses the 2020 murder of George Floyd and the rise of the Black Lives Matter movement.", "Teresa Greve Wolf", "2021");

    viewMasterArray.push(ViewMaster1);

    let ViewMaster2 = new ViewMaster("Counternarratives: A Teenager With Promise, Annotated", "./images/image2.jpg", "In this work, Bell radically edits media coverage of Michael Brown and Officer Darren Wilson of Ferguson, Missouri, creating a memorial to Brown rather than attempting to intertwine and legitimize a story of a policeman and his victim.", "Alexandra Bell", "2018");

    viewMasterArray.push(ViewMaster2);

    let ViewMaster3 = new ViewMaster("Warning", "./images/image3.jpg", "Muslim women, living in areas where the Serbo-Croation War decimated their lives, were made to stand by as their homes and livelihoods were destroyed. If they tried to run, or dared to fight back, they could be raped, tortured, or shot, or if “unlucky”, they would suffer all three.", " Jane Caminos", "2012");

    viewMasterArray.push(ViewMaster3);

    let ViewMaster4 = new ViewMaster("EPA REGULATION", "./images/image4.jpg", "This work shows the inequality faced by the largely Black population of Flint, Michigan, where the government showed complete disregard for the health of the city's poverty stricken community.", "Nancy Ohanian", "2016");

    viewMasterArray.push(ViewMaster4);

    let ViewMaster5 = new ViewMaster("Income Gap", "./images/image5.jpg", "This piece addresses the growing inequality in our world.", "Luba Lukova", "2008");

    viewMasterArray.push(ViewMaster5);



}



// gets an object from the array and puts it into the element with the same id

function showImage() {

    var randomNumber = Math.floor(Math.random() * viewMasterArray.length);

    document.getElementById("img").src = viewMasterArray[randomNumber].toString1();
    document.getElementById("title").innerHTML = viewMasterArray[randomNumber].toString2();
    document.getElementById("artist").innerHTML = viewMasterArray[randomNumber].toString3();
    document.getElementById("desc").innerHTML = viewMasterArray[randomNumber].toString4();
    document.getElementById("date").innerHTML = viewMasterArray[randomNumber].toString5();

}