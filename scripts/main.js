(function(){
  'use strict';


    $('#donut-button').on('click', function(){
      event.preventDefault();
        $('.game-container').removeClass('hidden');
        $('.container-login-page').addClass('hidden');
    });

    $('#cop-button').on('click', function(){
      event.preventDefault();
      $('.game-container').removeClass('hidden');
      $('.container-login-page').addClass('hidden');
    });


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

})();
