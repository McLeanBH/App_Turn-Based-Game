///====================
// DONUT CONSTRUCTOR**
///====================
function Donut (options) {
  this.health = options.health;
  this.name = options.name;
  this.nameofAttack1 = options.nameofAttack1;
  this.nameofAttack2 = options.nameofAttack2;
  this.nameofAttack3 = options.nameofAttack3;
}

var donutOne = new Donut ({ health: 100, name: 'Frosty', nameofAttack1: 'Glazing', nameofAttack2: 'Icing', nameofAttack3: 'Sprinking'});
console.log(donutOne);

var donutTwo = new Donut ({ health: 100, name: 'Sprinkles', nameofAttack1: 'Glazing', nameofAttack2: 'Icing', nameofAttack3: 'Sprinking'});
console.log(donutTwo);

///====================
// DONUT ATTACK PROTOTYPES**
///====================
Donut.prototype.attack1 = function (copper) {
  // console.log("Glazing");
  if(Math.random() < 0.75 ) {
    hitDamage = Math.floor(Math.random() * 20 + 1 );
    copper.health = copper.health - hitDamage;
    copper.damage = hitDamage;
    console.log("Nice hit! You just damaged " + copper.name + "by " + hitDamage + " !");
  } else {
    console.log("Sorry.. You missed!");
    copper.damage = 0;
  }
};


Donut.prototype.attack2 = function (copper) {
  // console.log("Icing");
  if(Math.random() < 0.75 ) {
    hitDamage = Math.floor(Math.random() * 20 + 1);
    copper.health = copper.health = hitDamage;
    console.log("Nice hit! You just damaged " + copper.name + "by " + hitDamage + " !");
  } else {
      console.log("Sorry.. You missed!");
      copper.damage = 0;
    }
};


Donut.prototype.attack3 = function (copper) {
  // console.log("Sprinking");
  if(Math.random() < 0.75 ) {
    hitDamage = Math.floor(Math.random() * 20 + 1);
    copper.health = copper.health = hitDamage;
    console.log("Nice hit! You just damaged " + copper.name + "by " + hitDamage + " !");
  } else {
      console.log("Sorry.. You missed!");
      copper.damage = 0;
    }
};


///====================
// COP CONSTRUCTOR**
///====================
function Cop (type) {
  this.health = type.health;
  this.name = type.name;
  this.nameofAttack1 = type.nameofAttack1;
  this.nameofAttack2 = type.nameofAttack2;
  this.nameofAttack3 = type.nameofAttack3;
}



var copOne = new Cop ({ health: 100, name: 'Captain', nameofAttack1: "Shoot-em", nameofAttack2: 'Batoning', nameofAttack3: 'Slurs'});
console.log(copOne);

var copTwo = new Cop ({ health: 100, name: 'Deputy', nameofAttack1: "Shoot-em", nameofAttack2: 'Batoning', nameofAttack3: 'Slurs'});
console.log(copTwo);

///====================
// COP ATTACK PROTOTYPES**
///====================

Cop.prototype.attack1 = function () {
  console.log("Shoot-em");
};

Cop.prototype.attack2 = function () {
  console.log("Batoning");
};

Cop.prototype.attack3 = function () {
  console.log("Slurs");
};

// - console log'd these to check, and working++
// donutOne.attack1();
// donutOne.attack2();
// donutOne.attack3();
// donutTwo.attack1();
// donutTwo.attack2();
// donutTwo.attack3();
//
// copOne.attack1();
// copOne.attack2();
// copOne.attack3();
// copTwo.attack1();
// copTwo.attack2();
// copTwo.attack3();
