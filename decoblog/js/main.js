$(document).ready(function (){
///alert ('ddd');
  
$('.slick-list').slick({
  аccessibility: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1500,
  draggable: true,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  prevArrow: '.sl-prev',
  nextArrow: '.sl-next',
  initialSlide: 0,
  // vertical: true,
  // verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 2000
  // lazyLoad: 'ondemand'
  
});

  
  
  
});

// $('.single-item').slick();