(function(){
  'use strict';


    $('.select-character').on('submit', function(){
      event.preventDefault();

      if($(".username-input").val() === '') {
        alert("Please enter an username");
      } else {
        usernameInput = $(".username-input").val();
        console.log(usernameInput);
        $('.username-filler').text(usernameInput);
        $('.msg-container').removeClass('hidden');
        $('.msg-container').scrollTop($('.msg-container')[0].scrollHeight);
        $('.msg-input-container').removeClass('hidden');
        $('.login-container').addClass('hidden');
        $('.welcome').addClass('hidden');
      }
    });

})();
