$(document).ready(function(){
    $('.main-slider').slick({
    //   setting-name: setting-value
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint:  991.98,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.mob-menu').click(function(){  $('.header-nav').addClass('nav-visible');});
    $('.header-nav').click(function(){  $('.header-nav').removeClass('nav-visible');});
    
  });

 