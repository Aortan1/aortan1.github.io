
$(document).ready(function (){

$('.lin').click(function acti(){
  $('.lin').removeClass('active');
  $(this).addClass('active');
});  


  
$('.slides').slick({  
  accessibility: true,
  dots: true,
  // dotsClass: 'dots1',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  prevArrow: '.sl-prev',
  nextArrow: '.sl-next',
  fade: true,
  // centerMode: true,
  initialSlide: 0,
  // easing: 'linear',
  draggable: true,
  // vertical: true,
  // verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 4000
  // lazyLoad: 'ondemand'
  
  
});
$('.hot-slides').slick({  
  accessibility: true,
  dots: true,
  // dotsClass: '.hot-dots',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // vertical: true,
  speed: 300,
  arrows: false,
  // prevArrow: '.sl-prev',
  // nextArrow: '.sl-next',
  fade: true,
  initialSlide: 0,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 4000
  // lazyLoad: 'ondemand'
  
  
});


$( function() {
   $("#datepicker").datepicker({
  firstDay: 1
});

});

// alert ('a!!!!');
  
});

// $('.single-item').slick();