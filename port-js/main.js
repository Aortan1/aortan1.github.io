



// $(document).ready (function(){

  
,
 // // });              
 

$(document).ready (function(){ 
  
  	$('a.contact-me').click(function ffade(){

	  $('img.img-me').fadeTo(1000,0.0).fadeTo(1000,0.1).fadeTo(1000,1.0);

	});


    $('a.to-top').click(function(){

      $("body").animate({scrollTop: 0}, 'slow');
      $('section.me').fadeTo(1000,0.5).fadeTo(1000,1.0).fadeTo(1000,0.5).fadeTo(3000,1.0); 
   
   });
});

               





