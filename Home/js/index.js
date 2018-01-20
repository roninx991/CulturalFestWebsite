AOS.init({
  duration: 1200,
})

//scroll to top on refresh//
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

jQuery(document).ready(function($) {

  $(window).load(function() {
    $('#manzar-loading').delay(1000).fadeOut('slow', function() {
      $(this).remove();
    });
    setTimeout(function() {
      $("#manzar-body").fadeIn(1000);
    }, 1000);
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 1000);

  });

  window.addEventListener('load', function() {

    var one = document.querySelector('.one');
    var two = document.querySelector('.two');
    var three = document.querySelector('.three');
    delay = 1250;

    setTimeout(function() {
      $('.content-1').addClass('loaded');
    }, 1000);

    var animation = function() {
      setTimeout(function() {
        one.style.top = '50%';
      }, delay);
      setTimeout(function() {
        one.style.top = '100%';
      }, delay * 2.5);

      setTimeout(function() {
        two.style.top = '50%';
      }, delay * 3);
      setTimeout(function() {
        two.style.top = '100%';
      }, delay * 5.5);

      setTimeout(function() {
        three.style.top = '50%';
      }, delay * 6);
      setTimeout(function() {
        three.style.top = '100%';
      }, delay * 8.5);
    };
    animation();
    setInterval(animation, delay * 9);
  });

  window.onscroll = function() {
    if ($(this).scrollTop() > 1) {
      $('header').addClass("resize");
    } else {
      $('header').removeClass("resize");
    }
  };

  $(window).scroll(function() {
    $('.hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window < bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 750);
      }
    });
  });

  $(".mouseScroll").click(function() {
    $('html, body').animate({
      scrollTop: $(".about").offset().top - 150
    }, 800);
  });

  window.onload = function() {
    $('.button_container').click(function() {
      $('.button_container').toggleClass('active');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('active');
    });
  }

});



function slideSlider(){
  $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
  $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left"))-800) + "px","transition":"all 5s linear"});
  setTimeout(function(){moveSliderItem()}, 1600);
}

function moveSliderItem(){
  $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
  slideSlider();
}

slideSlider();