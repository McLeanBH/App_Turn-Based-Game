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


})();
