'use strict'
$(function(){
  $('.msg-input').keyup(function(){
    if(event.keyCode==13) {
      var $msglist = $('.msg-list');
      var $activeDialog = $('.dialog-wrapper.active');
      var msg = $(this).val();
      if(msg == '') {
        return false;
      }
      $('.dialog-wrapper.active .msg.outgoing:last').clone().appendTo('.dialog-wrapper.active .msg-list');
      $('.dialog-wrapper.active .msg.outgoing:last').find('.msg-text-decor').text(msg);

      $('.dialog-wrapper.active .msg.incoming:last').clone().appendTo('.dialog-wrapper.active .msg-list');
      $('.dialog-wrapper.active .msg.incoming:last').find('.msg-text-decor').text(msg);
      $msglist.animate({"scrollTop": 99999}, 1);

      return false;
    }
  });

  $('.userlist .user').on('click', function(){
    $('.userlist .user').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('.dialog-wrapper').removeClass('active');
    $('.dialog-wrapper:eq('+index+')').addClass('active');
    return false;
  });
});
