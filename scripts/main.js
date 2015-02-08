(function(){
  'use strict';



$('#cop-1').on('click', function(){
  event.preventDefault();
    $('.player-filler').text($(".username-input").val());
    $('.game-container').removeClass('hidden');
    $('.container-login-page').addClass('hidden');
    $('.player-left').addClass('cop1-image');
    $('.player-right').addClass('donut1-image');
    $('.donut-attack').addClass('hidden');
  });

$('#cop-2').on('click', function(){
  event.preventDefault();
    $('.player-filler').text($(".username-input").val());
    $('.game-container').removeClass('hidden');
    $('.container-login-page').addClass('hidden');
    $('.player-left').addClass('cop2-image');
    $('.player-right').addClass('donut2-image');
    $('.donut-attack').addClass('hidden');

});

$('#donut-1').on('click', function(){
  event.preventDefault();
  $('.player-filler').text($(".username-input").val());
  $('.game-container').removeClass('hidden');
  $('.container-login-page').addClass('hidden');
  $('.player-left').addClass('donut1-image');
  $('.player-right').addClass('cop2-image');
  $('.cop-attack').addClass('hidden');

});

$('#donut-2').on('click', function(){
  event.preventDefault();
  $('.player-filler').text($(".username-input").val());
  $('.game-container').removeClass('hidden');
  $('.container-login-page').addClass('hidden');
  $('.player-left').addClass('donut2-image');
  $('.player-right').addClass('cop1-image');
  $('.cop-attack').addClass('hidden');

});

// now we have player & opponent health bars being reduced with a 1.5 second timeout interval
// --> net we need to target each individual attack to have a different damage amount.
// (Ideally) we get our randomizer working, so that that an aribtrary amount of damage is delivered each time an attack button is pushed.

$('.cop-attack').click(function(){
  $('.player1-health').animate({width: '-=66'}, 500);
    setTimeout(function(){
  $('.player2-health').animate({width: '-=46'}, 500);
}, 1500);
});




// here we need to have our opponent randomly selected. Therefore, if cop1 is selected there needs to be a 50-50 chance that donut1 or donut2 is the opponent

// random number generator
// var randomNumber = Math.floor(Math.random(10)*10);
//
//
// //
// // selected-cop-character
// var selectedCop;
//     if (randomNumber >= 0 && randomNumber < 6 ) {
//         selectedCop = ('#cop1');
//         names = "Deputy Hunger";
//      }
//      else if (randomNumber >= 6 ) {
//         selectedCop = copTwo;
//         names = "Captain 'One-Bite-Ya-Done' Jack";
//     }
//
//
// // selected-donut-character
// var selectedDonut;
//     if (randomNumber >= 0 && randomNumber < 6 ) {
//         selectedDonut = donutOne;
//         names = "Don Pablo Frosty";
//     }
//     else if (randomNumber >= 6 ) {
//         selectedDonut = donutTwo;
//         names = "Baby 'Sprinkle-Face' McGee";
//     }
//
// //
// $('#cop-1')on('click', function(){
//
// });
//
// $('#cop-2')on('click', function(){
//
// });
//
// $('#donut-1')on('click', function(){
//
// });
//
// $('#donut-2')on('click', function() {
//   player = new Player1();
//   runBattle();
// });





///====================
//ACCORDIAN
///====================

$('.player-accordian').on('click', '.accordian-control', function(e) {
  event.preventDefault();
  $(this)
  .next('.para')
  .not(':animated')
  .slideToggle();
});

///====================
// PLAYER STATS
///====================
var playerStats = function () {
  renderPlayerInfo(player);
  powerBar(player);
  renderOpponentInfo(opponent);
  opponentBar(opponent);
};



///====================
// DONUT CONSTRUCTOR**
///====================
function Donut (player) {
  this.health = player.health;
  this.name = player.name;
  this.attack1 = player.attack1;
  this.attack2 = player.attack2;
  this.attack3 = player.attack3;
}


var donutOne = new Donut ({ health: 100, name: 'Frosty', attack1: 'Glazing', attack2: 'Icing', attack3: 'Sprinking'});
console.log(donutOne);

var donutTwo = new Donut ({ health: 100, name: 'Sprinkles', attack1: 'Glazing', attack2: 'Icing', attack3: 'Sprinking'});
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
    copper.health = copper.health - hitDamage;
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
    copper.health = copper.health - hitDamage;
    console.log("Nice hit! You just damaged " + copper.name + "by " + hitDamage + " !");
  } else {
      console.log("Sorry.. You missed!");
      copper.damage = 0;
    }
};

///====================
// CLICK EVENTS FOR DONUT ATTACKS**
///====================

var player;
var copper;
var don;


$('#donutAttack1').on('click', function() {
  player.attack1();
  $('.status').html('Glazing!');
  playerStats();
  triggerOpponentAttack();
});

$('#donutAttack2').on('click', function() {
  player.attack2();
  $('.status').html('Icing!');
  playerStats();
  triggerOpponentAttack();
});

$('#donutAttack3').on('click', function() {
  player.attack3();
  $('.status').html('Sprinkling!');
  playerStats();
  triggerOpponentAttack();
});


///====================
// COP CONSTRUCTOR**
///====================
function Cop (player) {
  this.health = player.health;
  this.name = player.name;
  this.attack1 = player.attack1;
  this.attack2 = player.attack2;
  this.attack3 = player.attack3;
}

var copOne = new Cop ({ health: 100, name: 'Captain', attack1: "Shoot-em", attack2: 'Batoning', attack3: 'Slurs'});
console.log(copOne);

var copTwo = new Cop ({ health: 100, name: 'Deputy', attack1: "Shoot-em", attack2: 'Batoning', attack3: 'Slurs'});
console.log(copTwo);

///====================
// COP ATTACK PROTOTYPES**
///====================

Cop.prototype.attack1 = function (don) {
  // console.log("Shoot-em");
  if(Math.random() < 0.75 ) {
    hitDamage = Math.floor(Math.random() * 20 + 1);
    don.health = don.health - hitDamage;
    console.log("Nice hit! You just damaged " + don.name + "by " + hitDamage + " !");
  } else {
    console.log("Sorry... You missed!");
    don.damage = 0;
  }
};

Cop.prototype.attack2 = function (don) {
  // console.log("Batoning");
  if(Math.random() < 0.75 ) {
    hitDamage = Math.floor(Math.random() * 20 + 1);
    don.health = don.health - hitDamage;
    console.log("Nice hit! You just damaged " + don.name + "by " + hitDamage + " !");
  } else {
    console.log("Sorry... You missed!");
    don.damage = 0;
  }
};

Cop.prototype.attack3 = function (don) {
  // console.log("Slurs");
  if(Math.random() < 0.75 ) {
    hitDamage = Math.floor(Math.random() * 20 + 1);
    don.health = don.health - hitDamage;
    console.log("Nice hit! You just damaged " + don.name + "by " + hitDamage + " !");
  } else {
    console.log("Sorry... You missed!");
    don.damage = 0;
  }
};


///====================
// CLICK EVENTS FOR COP ATTACKS**
///====================

$('#copAttack1').on('click', function() {
  player.attack1();
  $('.status').html('Shoot-em!');
  playerStats();
  triggerOpponentAttack();
});

$('#copAttack2').on('click', function() {
  player.attack2();
  $('.status').html('Batoning!');
  playerStats();
  triggerOpponentAttack();
});

$('#copAttack3').on('click', function() {
  player.attack3();
  $('.status').html('Slurs!');
  playerStats();
  triggerOpponentAttack();
});

///====================
// EXECUTE OPPONENT ATTACK
///====================

function triggerOpponentAttack () {
  setTimeout(function(){
    var randomNumber = Math.floor(Math.random() * 10 );
    if (randomNumber > 3 && randomNumber < 7){
      enemy.attack1(opponent);
      $('.status').html('');
    }
    else if (randomNumber > 7){
      enemy.attack2(opponent);
      $('.status').html('');
    }
    else {
      enemy.attack3(opponent);
      $('.status').html('');
    }

    playerStats();
  }, 2500);
}






})();
