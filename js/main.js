$(window).scroll(function() {
  if ($(document).scrollTop() > 650) {
    $('nav').addClass('navbar-default navgrey');
  } else {
    $('nav').removeClass('navbar-default navgrey');
  }
});