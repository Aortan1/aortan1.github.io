
function rand_till(n){
 // если n = 6, ф-я выдаёт случайное из набора целых от 0 до 5.
var r=Math.random();
var rn = Math.floor(r*n);
rn++;
if (rn == n) {rn=1;}  
return rn;  
}

$(document).ready(function (){
  
$('.slides').slick({
  аccessibility: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  draggable: true,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  initialSlide: rand_till(15),
  autoplay: true,
  autoplaySpeed: 4000,
  draggable: true 
});

  
  $('.slides-control').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slides',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  speed: 300,
  initialSlide: 08,
  prevArrow: '.sl-prev',
  nextArrow: '.sl-next',
  
  draggable: true
});
  
  
  
  
  
  
   
}, 2000);

