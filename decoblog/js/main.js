$(document).ready(function (){
///alert ('ddd');
  
$('.slick-list').slick({
  аccessibility: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  draggable: true,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  prevArrow: '.sl-next',
  nextArrow: '.sl-prev',
  initialSlide: 0,
  // vertical: true,
  // verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 2000
  // lazyLoad: 'ondemand'
  
});

  
  
  
});

// $('.single-item').slick();