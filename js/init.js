(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('#bio-preview').on('click', function () {
  $('.middle').hide()
  $('#full-bio').append('.row.center')
})
