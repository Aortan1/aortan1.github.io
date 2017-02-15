
$(document).ready (function(){
  //alert("11");
var El1=$(".top-slider");
var El2=$(".user-slider");



// $(".slides").click(function(){scr(".slides");});
// $('div').click(function() {
//   $('this').hide("slow");
//             //$('this').css('opacity', '0.5');
//             // $(this).css('right', '4px');
//         });

//  $(document).click( function(event){
//       //if( $(event.target).closest("p").length ) 
//       //  return;
//       //$("p").fadeOut("slow");
//       scr(".slides");
//       event.stopPropagation();
//     });

function scr(O){
 var wi = $(".slides .sl img").outerWidth();
 O.animate({left: '-='+wi,}, scrolltime);
};


function my_slider(Element, delay, scrolltime){
  //var delay=10000;
  //var scrolltime=1500;
  var Ul, Li, wi, n, ntime;
  n=$(Element).find('.slides .sl').length;
  Ul=$(Element).find(".slides");
  Li=$(Element).find(".slides .sl");
  D=$(Element).find(".dots .dot");  
  wi = Li.find("img").outerWidth();
  
  //wi = Li.find('img').outerWidth();
  // var xleft = Ul.css( "left" );
  //   var offset = Ul.offset();
  //   var x=offset.left; 
  //   var y=offset.top;
  //   alert(x);
$(Li).each(function(i,elem) { 
$(elem).clone().appendTo(Ul);
});


// $(Element).find('.slides .sl:eq(0)').clone().appendTo((Element).find(".slides"));


  
  
  function scroll(){    
     
  var vi;
  $(D).each(function(i,elem) {  
    $(elem).eq(i).addClass("dot-active");
    vi = $(Li).eq(i).outerWidth();
    Ul.delay(delay).animate({left: '-='+vi}, scrolltime);//.parent().find(".in").eq(1).animate({opacity: 1}, 0 , function() {});
    //D.eq(i).find(".in").delay(delay).animate({opacity: 1}, scrolltime, function() {});
    //$(elem).delay(delay).removeClass("dot-active");
    //setTimeout(function() {$(this).eq(i).removeClass("dot-active");}, delay);
    
    //$(elem).removeClass("dot-active");
  });  
  Ul.animate({left: '=0',}, 0);
  

  };
  
  //$(Li).click(function(){scr(Ul);});
  //Li.bind("click", function(){scr();});
  
  ntime=0;
  do {
  ntime++;
  scroll();
  } while (ntime<1000);
};  

my_slider(El1, 4000, 5000);
my_slider(El2, 2500, 3000);

 
$(document).on('click','.sl', function(){ var x=$(this).parent(".slides"); scr(x);});


$(document).on('click','.links li', function(){
   $(this).css({'backgroundColor' : '#fff'}).find('a').css({'color':'#ffa352'});
   var x; if($(this).get(0)==$("#lin1").get(0)) x=$("#lin2"); else x=$("#lin1");
   $(x).css({'backgroundColor' : '#f4f4f4'}).find('a').css({ 'color':'#969696'});
});


// $('a#lin1').click(function (){

// $('#inset').css("backgroundColor": "#f00");


});















