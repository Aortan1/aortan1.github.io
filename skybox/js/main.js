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
fil[0] = 'living'; tpost[0] = 'x-li';
fil[1] = 'female'; tpost[1] = 'x-fe';
fil[2] = 'education'; tpost[2] = 'x-ed';
fil[3] = 'entertain'; tpost[3] = 'x-en';
fil[4] = 'travel'; tpost[4] = 'x-tr';


$(function(){
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
});

$('.filters li').hover(function(){
  $(this).effect( "shake", {}, "fast" );

});

$(document).ready (function() { 
      $(".nav-find div").bind("click", function() {
        var delay = 250;
        var l = $("div.hid-login");
        var f = $("div.hid-find");
        if ($(f).is(":visible")) $(f).slideUp(delay);
        else { 
        if ($(l).is(":visible"))    $(l).slideUp(delay);
        $(f).slideDown(delay);}
      });
  
  $(".nav-login div").bind("click", function() {
        var delay = 250;
        var l = $("div.hid-login");
        var f = $("div.hid-find");
        if ($(l).is(":visible")) $(l).slideUp(delay);
        else { 
        if ($(f).is(":visible"))    $(f).slideUp(delay);
        $(l).slideDown(delay);}
      }); 
  
    }); 


$(function(){
  
$('ul.i-c-level li').mouseover(function() {
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