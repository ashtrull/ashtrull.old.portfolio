(function ($) {
  $(function () {

    $('.button-collapse').sideNav()
    $('.parallax').parallax()
    $('#full-bio').hide()
    $('#kit-cat-go').hide()
    $('#show-less-button').hide()
    $('#hide-button').hide()

    $('#bio-button').on('click', function () {
      $('.middle').hide()
      $('#full-bio').show()
      $('#bio-button').hide()
      $('#show-less-button').show()
    })

    $('#work-button').on('click', function () {
      $('.middle').hide()
      $('#kit-cat-go').show()
      $('#hide-button').show()
    })

    $('#show-less-button').on('click', function () {
      $('#full-bio').hide()
    })

    $('#hide-button').on('click', function () {
      $('#kit-cat-go').hide()
    })
  })
  // end of document ready
})(jQuery) // end of jQuery name space
