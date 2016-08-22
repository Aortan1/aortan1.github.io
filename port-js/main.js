



$(document).ready (function(){ 
var this1,this2;  
var difficulty_level=400; // уровень сложности (количество движений размешивания)
//3-5 - ЛЁГКИЙ,
//6-9 - СРЕДНИЙ,
//10 и > - СЛОЖНЫЙ.

	 $('a.contact-me').hover(function fadeedge0(){
  
    $('h1').fadeTo(300,0.1); 
  });
  
  
  	$('a.contact-me').click(function ffade(){

	  $('img.img-me').fadeTo(1000,0.0).fadeTo(1000,0.1).fadeTo(1000,1.0);

	});


   //  $('a.to-top').click(function(){

   //    $("html, body").animate({scrollTop: 0}, 3000);
   //    $('section.me').fadeTo(1000,0.5).fadeTo(1000,1.0).fadeTo(1000,0.5).fadeTo(3000,1.0); 
   
   // });
$(function (){
		// прячем кнопку #back-top
		$("a.to-top").hide();
	
		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$("a.to-top").fadeIn();
			} else{
				$("a.to-top").fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$("a.to-top").click(function (){
			$("body, html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
  
 });
  
