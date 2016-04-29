

$(document).ready(function (){
///alert ('ddd');
  
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  initialSlide: 10,
  asNavFor: '.slider-nav'
});
  
$('.slider-nav').slick({
  slidesToShow: 19,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  initialSlide: 10,
  slickPrev: $('.mask'),
  slickNext: $('.mask-lr'),
  arrows: false,
  prewArrow: '<button class="slick-prew"></button>',
  nextArrow: '<button class="slick-next"></button>',
  appendArrows: $(".mask"),
  draggable: true
});
		

$(".slider-for li ").each(function () {
var htmlStr = $(this).find('h3').html(); 
$(this).find('q').before(htmlStr+' said: ').prepend('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at eleifend ut.'); 
        });
 
  
//alert ('dfd'+slin);    
//var slin = $('.slider-nav .slick-current').attr('data-slick-index');
//alert ('current '+slin);  
  
//$('.slider-nav li').each(function() { 
//    var ind = $(this).attr('data-slick-index');
    //alert ('ffd'+ind); 
//    if (ind==slin-3) $(this).find('.div-m').addClass('mask');  
//});

//addClass('mask');
  
  
});


//$(document).ready (function() {
 // $(".mask").bind("click", function(){
  //$('.slider-nav').slickPrev();
//});
//});


$('.lll').click(function(){ 
    $(".slider-nav").slick('slickPrev');
    $(".slider-nav").slick('slickPrev');
});

$('.mask-lr').click(function(){
    $(".slider-nav").slick('slickNext');
});