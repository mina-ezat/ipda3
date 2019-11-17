$(document).ready(function () {
  wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  })
  wow.init();
  new WOW().init();

  var filtered = false;

  $('.js-filter').on('click', function () {
    if (filtered === false) {
      $('.filtering').slick('slickFilter', ':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });

  $num = $('.my-card').length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;
  if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
  } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
  }
  $('.my-card').click(function () {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    if ($(this).hasClass('next')) {
      $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
    } else if ($(this).hasClass('prev')) {
      $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
    }
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
  });
  // Keyboard nav

  $('html body').keydown(function (e) {
    if (e.keyCode == 37) {// left
      $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) {// right
      $('.active').next().trigger('click');
    }
  });
  $(".icon .left").click(function () {
    $('.active').prev().trigger('click');
  });
  $(".icon .right").click(function () {
    $('.active').next().trigger('click');
  });


  $('html').niceScroll();
  $(document).ready(function () {
    $(".scroll-top").click(function () {
      $(window).scrollTop(0);
    });



    $(window).scroll(function () {
      var scr = $(window).scrollTop();
      if (scr >= 700) {
        $(".scroll-top").css("display", "block");
      } else {
        $(".scroll-top").css("display", "none");
      }
    })
  })

  // var tst = $(window).width();
  // if (tst <= 480) {

  //   var x = 1

  // } else {
  //   var x = 3
  // };

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});
$(window).ready(function () {
  $(".loading").fadeOut(1500);
})




