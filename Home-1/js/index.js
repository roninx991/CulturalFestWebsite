//scroll to top on refresh//
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

jQuery(document).ready(function($) {

  window.onscroll = function() {
    if ($(this).scrollTop() > 1) {
      $('header').addClass("resize");
    } else {
      $('header').removeClass("resize");
    }
  };

 window.onload =function() {
    $('.button_container').click(function() {
      $('.button_container').toggleClass('active');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('active');
    });
  }

});