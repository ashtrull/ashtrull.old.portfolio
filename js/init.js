(function ($) {
  $(function () {

    $('.button-collapse').sideNav()
    $('.parallax').parallax()
    $('#full-bio').hide()
    $('#kit-cat-go').hide()

    $('#bio-button').on('click', function () {
      $('.middle').hide()
      $('#full-bio').show()
    })
    $('#work-button').on('click', function () {
      $('.middle').hide()
      $('#kit-cat-go').show()
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space
