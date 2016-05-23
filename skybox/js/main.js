$(function(){

$('div.select').click(function(){
$(document).find("ul.list").slideUp('fast');
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
fil[0] = 'living'; tpost[0] = 'js-living';
fil[1] = 'female'; tpost[1] = 'js-female';
fil[2] = 'education'; tpost[2] = 'js-educat';
fil[3] = 'entertain'; tpost[3] = 'js-entert';
fil[4] = 'travel'; tpost[4] = 'js-travel';


$(function(){
$('.filters li').click(function(){
   //alert ('dlkjdkljfl');
   if ($(this).hasClass("no-active")) {
       $(this).removeClass("no-active");
       for (var i=0; i<5; i++) 
         if ($(this).hasClass(fil[i])) $('[data-for-filter="'+tpost[i]+'"]').removeClass("hide-post");  }
   else  {$(this).addClass("no-active");
         for (var i=0; i<5; i++) 
         if ($(this).hasClass(fil[i])) $('[data-for-filter="'+tpost[i]+'"]').addClass("hide-post");
         
         }
    
});
});

$('.filters li').hover(function(){
  $(this).effect( "shake", {}, "fast" );

});

$(document).ready (function() { 
        var delay = 250;
        var l = $("div.hid-login");
        var f = $("div.hid-find");
  
  $("div.nav-find ").bind("click", function() {
        if ($(f).is(":visible")) $(f).slideUp(delay);
        else { 
        if ($(l).is(":visible"))    $(l).slideUp(delay);
        $(f).slideDown(delay);}
        return false;
     
      });
  
  $(".nav-login div.forclick-login").bind("click", function() {
        if ($(l).is(":visible")) $(l).slideUp(delay);
        else { 
        if ($(f).is(":visible"))    $(f).slideUp(delay);
        $(l).slideDown(delay);}
        return false;
    
      }); 
  
      
    $(document).click(function(event) {
      if( $(event.target).closest(l).length ) 
  return;
      if( $(event.target).closest(f).length ) 
  return;
        if ($(l).is(":visible")) $(l).slideUp(delay);
        if ($(f).is(":visible")) $(f).slideUp(delay);  
        //if ($("ul.list").is(":visible")) $("ul.list").slideUp(delay);
        event.stopPropagation();
        
  });
  
 
  
  }); 



$(function(){
  
$('ul.i-c-level li').hover(function() {
var n = $(this).index(); 
for (var i=0; i<5; i++){
 if (i <= n) $(this).parent().children().eq(i).removeClass('emp-js').addClass('noemp-js');
 else
$(this).parent().children().eq(i).removeClass('noemp-js').addClass('emp-js');}

$(this).mouseout(function() { 
for (var j=0; j<5; j++){  
$(this).parent().children(j).removeClass('noemp-js').removeClass('emp-js');}
});  
});
  
$('ul.i-c-level li').click(function() {
var n = $(this).index(); 
for (var i=0; i<5; i++){
 if (i <= n) $(this).parent().children().eq(i).removeClass('emp');
 else
$(this).parent().children().eq(i).addClass('emp');}

 
});  
  
});