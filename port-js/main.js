// $(document).ready (function(){

  
  window.onscroll = function() {
  
  var scrolled = window.pageYOffset;
  var h_light=150, h_ani=300, h_panel=670, h_to_top=900;  
  if (scrolled<h_ani)  $('.skills').removeClass('ani'); 
  if (scrolled>h_ani) {
    
    $('.skills').removeClass('ani').addClass('ani');
    
    }
 // if (scrolled>h_light && scrolled<h_light+200) $('.skill').removeClass('ho').addClass('ho');   
 // if (scrolled<h_light || scrolled>h_light+200) $('.skill').removeClass('ho');
 
 if (scrolled>h_panel) $('body').addClass('sticky'); 
 if (scrolled<h_panel) $('body').removeClass('sticky');   
 
 if (scrolled>h_to_top) $('body').addClass('for-to-top');  
 if (scrolled<h_to_top) $('body').removeClass('for-to-top');     
 };
 // });              
        