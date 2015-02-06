(function(){
  'use strict';


    $('#cops-1').on('click', function(){
      event.preventDefault();
        $('.game-container').removeClass('hidden');
        $('.container-login-page').addClass('hidden');
        $('.player-left').addClass('donut-player');
        $('.player-right').addClass('cop-player');
        $('.donut-attack').addClass('hidden');

    });

    $('#cops-2').on('click', function(){
      event.preventDefault();
        $('.game-container').removeClass('hidden');
        $('.container-login-page').addClass('hidden');
        $('.player-right').addClass('donut-player');
        $('.player-left').addClass('cop-player');
        $('.donut-attack').addClass('hidden');

    });

    $('#donut-1').on('click', function(){
      event.preventDefault();
      $('.game-container').removeClass('hidden');
      $('.container-login-page').addClass('hidden');
      $('.player-left').addClass('donut-player');
      $('.player-right').addClass('cop-player');
      $('.cop-attack').addClass('hidden');

    });

    $('#donut-2').on('click', function(){
      event.preventDefault();
      $('.game-container').removeClass('hidden');
      $('.container-login-page').addClass('hidden');
      $('.player-right').addClass('donut-player');
      $('.player-left').addClass('cop-player');
      $('.cop-attack').addClass('hidden');

    });


    //ACCORDIAN

    $('.player-accordian').on('click', '.accordian-control', function(e) {
      event.preventDefault();
      $(this)
      .next('.para')
      .not(':animated')
      .slideToggle();
    });

    //END ACCORDIAN

//
//
//     function activePlayerTurn() {
//       console.log("It's someone's turn");
//     }
//
//     function gamePlay(countDonuts, countCops) {
//       var charactersCount = countDonuts + countCops;
//       var activeCharacters;
//     }
//
//     function selectActivePlayer(autos, humans) {
//       var a = autos;
//       var h = humans;
//       // if (h > 0) {
//       //     startShowingIt(.)
//       // }
//
//     }
//
//
// ///=========================
// /// GLOBAL VARS
// ///=========================
// var characters = [{
//     name: "Don Pablo Frosty",
//     health: 100,
//     cop: false,
//     img: "img/don.jpg"
// }, {
//     name: "Baby 'Sprinkle Face' McGee",
//     health: 100,
//     cop: false,
//     img: "img/mcgee.jpg"
//
// }, {
//     name: "Deputy Hunger",
//     health: 100,
//     cop: true,
//     img: "img/deputy-hunger.jpg"
// }, {
//     name: "Captain One-Bite-You're Done",
//     health: 100,
//     cop: true,
//     img: "img/captain.jpg"
// }];
//
//
//
// $(".character-dropdown").change(function(selectCharacter) {
//   if ($(".character-dropdown option:selected").text() == "cop-character-one") {
//
//   } else if ($(".character-dropdown option:selected").text() == "cop-character-two") {
//
//   } else if ($(".character-dropdown option:selected").text() == "donut-character-one") {
//
//   } else if ($(".character-dropdown option:selected").text() == "donut-character-two") {
//
// }
// });
//
// currentPlayer = new Character({health: 100});
// var attackAmount = 7;
//
// currentPlayer.health -= attackAmount;
//  $('progress').val(currentPlayer.health);
//
// currentPlayer.health -= attackAmount;
// $('progress').val(currentPlayer.health);
//
//
// setTimeout(updateHealth,500);
//
//
// Donut.prototype.donutAtk = function(foe) {
//   if(Math.random() < 0.75 ) {
//     hitAmount = Math.floor(Math.random() * 20 + 1);
//     foe.health = foe.health - hitAmount;
//     foe.damage = hitAmount;
//     console.log("You hit a(n) " + hitAmount + ". " + foe.name + " now has " + foe.health + " hitpoints.");
//   } else {
//     console.log("You missed!");
//     foe.damage =0;
//   }
// };
//
// Cop.prototype.copAtk = function(fum) {
//   if(Math.random() < 0.3 ) {
//     hitAmount = Math.floor(Math.random() * 25 + 15);
//     fum.damage = hitAmount;
//     fum.health = fum.health - hitAmount;
//     console.log("You hit a(n) " + hitAmount + ". " + fum.name + " now has " + fum.health + " hitpoints.");
//   } else {
//     console.log("You missed!");
//     fum.damage = 0;
//   }
// };
//
//
// // cop attack button functionality
// // $('.copAtk1').on('submit', function(){
// //
// //     cop.copAtk1(donut);
// //     if (donut.damage > 0) {
// //       $('.text-area :first-child').text('You hit a(n) ' + donut.damage +'. ' + donut.name +' now has ' + donut.health + ' hit points.');
// //     }
// //     else {
// //       $('.text-area :first-child').text(hero.name + " Missed!");
// //     }
// //
// //     $('.attack1').attr('disabled','disabled');
// //     $('.attack2').attr('disabled','disabled');
//
//
//
//     //setTimeout(atk, 1000);
//
//     setTimeout(atk, 2000);
// });
//
//
//
//






})();
