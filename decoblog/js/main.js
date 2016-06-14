$(document).ready(function (){
///alert ('ddd');
  
$('.banner-slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  initialSlide: 0,
  prevArrow: '.sl-prev',
  nextArrow: '.sl-next',
  draggable: true,
  // vertical: true,
  // verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 4000,
  lazyLoad: 'ondemand'
  
});

  
  
  
});

// $('.single-item').slick();