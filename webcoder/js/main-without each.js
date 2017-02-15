
$(document).ready (function(){
  //alert("11");
var El=$(".top-slider");
var El2=$(".user-slider");
function my_slider(Element, delay, scrolltime){
  //var delay=10000;
  //var scrolltime=1500;
  var Ul, Li, wi, n, ntime;
  n=$(Element).find('.slides .sl').length;
  $(Element).find('.slides .sl:eq(0)').clone().appendTo((Element).find(".slides"));
  Ul=$(Element).find(".slides");
  Li=$(Element).find(".slides .sl");
  D=$(Element).find(".dots .dot");  
  wi = Li.outerWidth();
  // var xleft = Ul.css( "left" );
  //   var offset = Ul.offset();
  //   var x=offset.left; 
  //   var y=offset.top;
  //   alert(x);

  function scr(O){
      O.animate({left: '-='+wi,}, scrolltime);
    };
  
  function scroll(){    
  var i=0;     
  do {
   // D.eq(i).addClass("dot-active").delay(delay).removeClass("dot-active");
    Ul.delay(delay).animate({left: '-='+wi}, scrolltime).parent().find(".in").eq(1).animate({opacity: 1}, 0 , function() {});
    //D.eq(i).find(".in").delay(delay).animate({opacity: 1}, scrolltime, function() {});
    //D.eq(i).delay(delay).removeClass("dot-active");
    //setTimeout(function() {D.eq(i).removeClass("dot-active");}, delay);
    i++;    
  } while (i<n); 
  Ul.animate({left: '+='+wi*n,}, 0);
  };
  

  //Li.click(function(){scr();});
  //Li.bind("click", function(){scr();});
  
  ntime=0;
  do {
  ntime++;
  scroll();
  } while (ntime<1000);
};  

my_slider(El, 10000, 1500);
my_slider(El2, 1000, 1500);
  
});