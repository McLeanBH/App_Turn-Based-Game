(function(){
  'use strict';


    $('#donut-button').on('click', function(){
      event.preventDefault();
        $('.game-container').removeClass('hidden');
        $('.container-login-page').addClass('hidden');
        $('.player-left').addClass('donut-player');
        $('.player-right').addClass('cop-player');
        $('.cop-attack').addClass('hidden');

    });

    $('#cop-button').on('click', function(){
      event.preventDefault();
        $('.game-container').removeClass('hidden');
        $('.container-login-page').addClass('hidden');
        $('.player-right').addClass('donut-player');
        $('.player-left').addClass('cop-player');
        $('.donut-attack').addClass('hidden');

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



    function activePlayerTurn() {
      console.log("It's someone's turn");
    }

    function gamePlay(countDonuts, countCops) {
      var charactersCount = countDonuts + countCops;
      var activeCharacters;
    }

    function selectActivePlayer(autos, humans) {
      var a = autos;
      var h = humans;
      // if (h > 0) {
      //     startShowingIt(.)
      // }

    }


///=========================
/// GLOBAL VARS
///=========================
var characters = [{
    name: "Don Pablo Frosty",
    health: 100,
    cop: false,
    img: "img/don.jpg"
}, {
    name: "Baby 'Sprinkle Face' McGee",
    health: 100,
    cop: false,
    img: "img/mcgee.jpg"

}, {
    name: "Deputy Hunger",
    health: 100,
    cop: true,
    img: "img/deputy-hunger.jpg"
}, {
    name: "Captain One-Bite-You're Done",
    health: 100,
    cop: true,
    img: "img/captain.jpg"
}];



$(".character-dropdown").change(function(selectCharacter) {
  if ($(".character-dropdown option:selected").text() == "cop-character-one") {

  } else if ($(".character-dropdown option:selected").text() == "cop-character-two") {

  } else if ($(".character-dropdown option:selected").text() == "donut-character-one") {

  } else if ($(".character-dropdown option:selected").text() == "donut-character-two") {

}
});




})();
