
$(document).ready (function(){

$(function(){

$('div.select').click(function(){
var u = $(document).find("div.select").not(this).next();
if (u.is(":visible") ) u.slideUp('fast'); 
$(this).next().slideToggle('fast');
}); 
// $(this).next() - это ul.list 
$(this).find(".list li").click(function(){
var tx = $(this).html();
//alert (tx); 
//var tv = $(this).attr('alt');
$(this).parent().slideUp('fast');
$(this).parent().parent().find("span").html(tx);
//$(".delivery_text").html(tv);
}); return false;
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
      if( $(event.target).closest("div.select").length ) 
  return;
        if ($(l).is(":visible")) $(l).slideUp(delay);
        if ($(f).is(":visible")) $(f).slideUp(delay);  
        if ($("ul.list").is(":visible")) $("ul.list").slideUp(delay);
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


var goo="https://www.google.com/maps/embed?";
var places = {
  Dubai:"pb=!1m18!1m12!1m3!1d462568.9345876513!2d54.94791358618105!3d25.074096018201146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2sua!4v1490359370215",
  Roma:"pb=!1m18!1m12!1m3!1d190029.01772602!2d12.395915703174309!3d41.90998597590191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2z0KDQuNC8LCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2sua!4v1490359748963",
  Sidney: "pb=!1m18!1m12!1m3!1d424143.0428305308!2d150.6517823662094!3d-33.8479730485609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2z0KHQuNC00L3QtdC5INCd0L7Qsi4g0K7Qti4g0KPRjdC70YzRgSwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sua!4v1490359852341",
  Pitea:"pb=!1m18!1m12!1m3!1d63383.962378436656!2d20.13361425162616!3d65.3254322601158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f17b72fcd3d3f%3A0xa5a953ef330030dc!2zUGl0ZcOlLCDQqNCy0LXRhtC40Y8!5e0!3m2!1sru!2sua!4v1490383420020",
  Helsinki:"pb=!1m18!1m12!1m3!1d127040.96014497096!2d24.90018765611824!3d60.16393049813109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2z0KXQtdC70YzRgdC40L3QutC4LCDQpNC40L3Qu9GP0L3QtNC40Y8!5e0!3m2!1sru!2sua!4v1490383521785",
  Warshava:"pb=!1m18!1m12!1m3!1d312779.9431310756!2d20.78101666129104!3d52.23260628906221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2z0JLQsNGA0YjQsNCy0LAsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sua!4v1490383740369",
  Kyiv:"pb=!1m18!1m12!1m3!1d162758.47733349545!2d30.392609356502266!3d50.40195139724608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LI!5e0!3m2!1sru!2sua!4v1490384228354",
  "New-York": "pb=!1m18!1m12!1m3!1d193572.1949290487!2d-74.11808582788822!3d40.705565038364064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1490359967049",
  London:"pb=!1m18!1m12!1m3!1d158858.47339377046!2d-0.24167970079317577!3d51.52855824344214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1490360208424",
  Paris:"pb=!1m18!1m12!1m3!1d83998.9472260844!2d2.2775176205432217!3d48.85883773959515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sua!4v1490360309353",
  Crete:"pb=!1m18!1m12!1m3!1d834143.2616384975!2d24.351662581371123!3d35.24699718860416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149b03d7c58fb783%3A0xbb32941128619998!2z0JrRgNC40YIsINCT0YDQtdGG0LjRjw!5e0!3m2!1sru!2sua!4v1490360350827",
  Phuket:"pb=!1m18!1m12!1m3!1d252883.85939599984!2d98.21984364080159!3d7.9668487265081005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9ca9a85063dba21!2z0J_RhdGD0LrQtdGCLCDQotCw0LjQu9Cw0L3QtA!5e0!3m2!1sru!2sua!4v1490359512188"
};


  
  $(".showmap").click(function(){
    var pl = $("#g-place").html();
    if($("iframe.map").attr("src")!=goo+places[pl]) 
      $("iframe.map").attr("src",goo+places[pl]);
    $(".map-block").removeClass("none");          
  });
  
  $(".close").click(function(){       
    $(".map-block").addClass("none");         
  });
  













}); 