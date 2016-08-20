

$(document).ready (function(){
	$('body a.contact-me').click(function ffade(){

	$('section.me').fadeTo(1000,0.0).fadeTo(10000,1.0);

	});
	
    $('body a.to-top').click(function ftop(){
       alert("rrreeeddyyy!!!!!!");
       $('html, body').animate({scrollTop: 300}, 4000);
       $('section.me').fadeTo(1000,0.5).fadeTo(1000,1.0).fadeTo(1000,0.5).fadeTo(3000,1.0);
       alert("rrreeeddyyy222222222!!!!!!");
   });
});

// $(document).ready (function(){

  
 //   window.onscroll = function() {
  
 //  var scrolled = window.pageYOffset;
 //  var winh = window.innerHeight; 
 //  var h_light=00, h_ani=10, h_panel=670, h_to_top=1500;   
 //  if (scrolled<h_ani)  $('.skills').removeClass('ani'); 
 //  if (scrolled>h_ani) {
    
 //    $('.skills').removeClass('ani').addClass('ani');
    
 //    }
 // // if (scrolled>h_light && scrolled<h_light+200) $('.skill').removeClass('ho').addClass('ho');   
 // // if (scrolled<h_light || scrolled>h_light+200) $('.skill').removeClass('ho');
 
 // if (scrolled>h_panel) $('body').addClass('sticky'); 
 // if (scrolled<h_panel) $('body').removeClass('sticky');   
 
 // if (scrolled>h_to_top-winh) $('body').addClass('for-to-top');  
 // if (scrolled<h_to_top-winh) $('body').removeClass('for-to-top');     
 //  };
 // // });              
 


               





