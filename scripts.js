
var theBox = document.getElementById('box'); //defining theBox as a global variable and setting the value to the div ID
var theSound = document.getElementById("sound");

// Array = list of objects (which start from 0)
var soundSourchArray = ["audio/Air_Woosh_Underwater.mp3", 
"audio/Aluminum_Can_Open.mp3",
"audio/Auto_Bullets_Flyby_Short.mp3",
"audio/Basketball_Shot_Rim_Short.mp3",
"audio/Beep_Short.mp3",
"audio/Billiard_Balls_Hit.mp3",
"audio/Change_Drop_on_Wood.mp3",
"audio/Clang_and_wobble.mp3",
"audio/Concussive_Guitar_Hit.mp3",
"audio/Concussive_Hit_Guitar_Boing.mp3",
"audio/Crash.mp3",
"audio/Crash_Metal_Sliding_On_Metal.mp3",
"audio/Croquet_Ball_Hits.mp3",
"audio/Debris_Hits.mp3",
"audio/Deck_of_Cards_on_Table.mp3",
"audio/Deflate.mp3",
"audio/Dirt_Shovel_On_Coffin.mp3",
"audio/Dragging_on_Asphalt.mp3",
"audio/Dress_Shoe_Run_on_Concrete.mp3",
"audio/Dress_Shoes_on_Stairs_Concrete.mp3",
"audio/Drill_Gear.mp3",
"audio/Drill_Motor_Dopper.mp3",
"audio/Driver_Club_Hitting_Golf_Ball.mp3",
"audio/Dumpster.mp3",
"audio/Emergency_Siren_Short_Burst.mp3",
"audio/Football_Dropkick.mp3",
"audio/pop.mp3"];

console.log("soundSourchArray length = " + soundSourchArray.length);

theBox.onclick = function(){
    // console.log("clicked the box");

    // Math.random returns a fraction btwn 0 and 1
    // Math.floor rounds the number down (i.e. the floor) to the nearest whole number
    var selectSound = Math.floor(Math.random() * soundSourchArray.length);

    console.log("selected sound = " + selectSound);

    theSound.setAttribute("src", soundSourchArray[selectSound]);
    theSound.play();

    // create new div
    var anotherBox = document.createElement("div");

    // setting the class of the new div and displaying the number of the array element we selected
    anotherBox.setAttribute("class", "box");
    anotherBox.innerHTML = selectSound;

    // we now attach this new div as a child to the Box div
    theBox.appendChild(anotherBox);
}