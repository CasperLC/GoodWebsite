function myFirstJS(){
document.getElementById("jstest").innerHTML = "Did this work..? See if you can change the text again!";
document.getElementById("jsbutton").onclick = mySecondJS;
}

function mySecondJS() {
    document.getElementById("jstest").innerHTML = "Hmm.. It appears that we can continue to change this text by clicking the button.";
    document.getElementById("jsbutton").onclick = myThirdJS;
}

function myThirdJS(){
    document.getElementById("jstest").innerHTML = "It changed again.. I wonder how long this will continue.";
    document.getElementById("jsbutton").onclick = myFourthJS;
}

function myFourthJS() {
    document.getElementById("jstest").innerHTML = "It doesn't seem to end..";
    document.getElementById("jsbutton").onclick = myFifthJS;
}

function myFifthJS(){
    document.getElementById("jstest").innerHTML = "I can feel it.. we are getting closer to the end";
    document.getElementById("jsbutton").onclick = mySixthJS;
}

function mySixthJS(){
    document.getElementById("jstest").innerHTML = "... Surely whoever made this must have gotten bored by now..?";
    document.getElementById("jsbutton").onclick = mySeventhJS;
}

function mySeventhJS(){
    document.getElementById("jstest").innerHTML = "Ok, I'm done.. Now feel free to start over.";
    document.getElementById("jsbutton").onclick = myFirstJS;
}