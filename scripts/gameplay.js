(function() {
    'use strict'

// TO START: we have 4 characters altogether, divided among two player categories, donuts and cops
// for each player type, there are two chartacter types (i.e. donutOne/donutTwo & copOne/copTwo)
// the player-character attributes are broken down as follows:

var donutOne = function (hitpoints, strength, img) {
    this.hitpoints = 150;
    this.strength = 25;
    this.img = "img/don.jpg";
};

var donutTwo = function (hitpoints, strength, img) {
    this.hitpoints = 100;
    this.strength = 75;
    this.img = "img/mcgee.jpg";
};

var copOne = function (hitpoints, strength, img) {
    this.hitpoints = 150;
    this.strength = 25;
    this.img = "img/captain.jpg";

};

var copTwo = function (hitpoints, strength, img) {
    this.hitpoints = 100;
    this.strength = 75;
    this.img = "img/deputy-hunger.jpg";

};

// donutOne & copOne have higher hitpoints (health) but less strength..
// while donutTwo and copTwo have base health (100hp) & 3x strength

 // var donutOne = (150, 25); // Don Pablo Frosty
 // var donutTwo = (100, 75); // Baby 'Sprinkle-Face' McGee
 //
 // var copOne = (150, 25); // Captain 'One-Bite-Ya-Done' Jack
 // var copTwo = (100, 75); // Deputy Hunger

// random number generator
var randomNumber = Math.floor(Math.random(10)*10);

// selected-cop-character
var selectedCop;
    if (randomNumber >= 0 && randomNumber < 6 ) {
        selectedCop = copOne;
        names = "Deputy Hunger";
     }
     else if (randomNumber >= 6 ) {
        selectedCop = copTwo;
        names = "Captain 'One-Bite-Ya-Done' Jack";
    }


// selected-donut-character
var selectedDonut;
    if (randomNumber >= 0 && randomNumber < 6 ) {
        selectedDonut = donutOne;
        names = "Don Pablo Frosty";
    }
    else if (randomNumber >= 6 ) {
        selectedDonut = donutTwo;
        names = "Baby 'Sprinkle-Face' McGee";
    }


// battle parameters defined
var battle = 1;
var copDead = 0;
var donutDead = 0;

// Taking turns attacking --> donut goes first, donutTurn = 1
var donutTurn = 1;
var copTurn = 0;

while (battle == 1) {
    // (me, as the player) donut's turn
while (donutTurn ==1){
    // attack sequence
selectedCop.health = selectedCop.health - Math.ceil(Math.random(selectedDonut.attack)*10);
console.log(names + "'s health is now " + selectedCop.health);
donutTurn = 0;
copTurn = 1;
}

// Taking turns ---> cop's turn
while (copTurn ==1) {
    // attack sequence
selectedDonut.health = selectedDonut.health - Math.ceil(Math.random(selectedCop.attack)*10);
console.log(names + "'s health is now " + selectedDonut.health);
donutTurn = 1;
copTurn = 0;
}

// If/when (I) the donut wins, the cop dies
if (selectedCop.health < 0) {
    copDead = 1;
    battle = 0;
}

// If (I) the donut dies, the cop wins
if (selectedDonut.health < 0) {
    donutDead = 1;
    battle = 0;
 }
}






})();
