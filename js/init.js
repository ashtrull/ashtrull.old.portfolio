(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#bio-button').on('click', function () {
      $('.middle')..toggleClass('hidden')
      $('#full-bio').toggleClass('hidden').append('.row.center')
    })
    $('#work-button').on('click', function () {
      $('.middle').toggleClass('hidden')
      $('#kit-cat-go').toggleClass('hidden')
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space
