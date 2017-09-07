(function ($) {
  $(function () {

    $('.button-collapse').sideNav()
    $('.parallax').parallax()
    $('#full-bio').hide()
    $('#show-less-button').hide()
    $('#hide-button').hide()

    $('#bio-button').on('click', function () {
      $('#full-bio').show()
      $('#bio-button').hide()
      $('#show-less-button').show()
    })

    $('#work-button').on('click', function () {
      $('#kit-cat-go').show()
      $('#hide-button').show()
      $('#work-button').hide()
    })

    $('#show-less-button').on('click', function () {
      $('#full-bio').hide()
      $('#show-less-button').hide()
      $('#bio-button').show()
    })

    $('#hide-button').on('click', function () {
      $('#kit-cat-go').hide()
      $('#hide-button').hide()
      $('#work-button').show()

    })
  })
  // end of document ready
})(jQuery) // end of jQuery name space
