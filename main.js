$(document).ready(function (){

  function countdown() {
    setTimeout(function() {
      showModal();
    },4000);
  }

  function showModal() {
    $('#modal').addClass('modal-show');
  }

  $('#noThanks').click(function(){
    $('#modal').removeClass('modal-show');
  })

  $('#close').click(function(){
    $('#modal').removeClass('modal-show');
  })

  countdown();
})







