(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#bio-button').on('click', function () {
      $('.middle').hide()
      $('#full-bio').append('.row.center')
    })
    $('#work-button').on('click', function () {
      $('.middle').hide()
      $('#kit-cat-go').show()
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space
