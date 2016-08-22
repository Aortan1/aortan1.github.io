

  window.onscroll = function() {
  
  var scrolled = window.pageYOffset;
  var winh = window.innerHeight; 
  var h_light=00, h_ani=10, h_panel=670, h_to_top=1500;   
  if (scrolled<h_ani)  $('.skills').removeClass('ani'); 
  if (scrolled>h_ani) {
    
    $('.skills').removeClass('ani').addClass('ani');
    
    }
 // if (scrolled>h_light && scrolled<h_light+200) $('.skill').removeClass('ho').addClass('ho');   
 // if (scrolled<h_light || scrolled>h_light+200) $('.skill').removeClass('ho');
 
 if (scrolled>h_panel) $('body').addClass('sticky'); 
 if (scrolled<h_panel) $('body').removeClass('sticky');   
 
 if (scrolled>h_to_top-winh) $('body').addClass('for-to-top');  
 if (scrolled<h_to_top-winh) $('body').removeClass('for-to-top');     
  };

$(document).ready (function(){ 

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
  
