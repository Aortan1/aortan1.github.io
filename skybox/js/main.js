$(function(){

$('div.select').click(function(){
$(this).parent().find("ul").slideToggle('fast');
});
$(this).find(".list li").click(function(){
var tx = $(this).html();
//alert (tx); 
//var tv = $(this).attr('alt');
$(this).parent().slideUp('fast');
$(this).parent().parent().find("span").html(tx);
//$(".delivery_text").html(tv);
});
});

var fil=[]; var tpost=[]; 
fil[0] = 'living'; tpost[0] = 'x-li';
fil[1] = 'female'; tpost[1] = 'x-fe';
fil[2] = 'education'; tpost[2] = 'x-ed';
fil[3] = 'entertain'; tpost[3] = 'x-en';
fil[4] = 'travel'; tpost[4] = 'x-tr';

$('.filters li').click(function(){
   //alert ('dlkjdkljfl');
   if ($(this).hasClass("no-active")) {
       $(this).removeClass("no-active");
       for (var i=0; i<5; i++) 
         if ($(this).hasClass(fil[i])) $('li.'+tpost[i]).removeClass("hide-post");  }
   else  {$(this).addClass("no-active");
         for (var i=0; i<5; i++) 
         if ($(this).hasClass(fil[i])) $('li.'+tpost[i]).addClass("hide-post");
         
         }
    
});


$('.filters li').hover(function(){
  $(this).effect( "shake", {}, "fast" );

});
