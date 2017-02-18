
$(document).ready (function(){

var El1=$(".top-slider"); // Контейнер слайдера 1.
var El2=$(".user-slider"); // Контейнер слайдера 2.

  
function my_slider_slim (Element, delay, scrolltime){ // МОй СЛАЙДЕР. Параметры: селектор контейнера, задержка между слайдами, время прокрутки

    var Ul = $(Element).find(".slides"); // элемент "список слайдов" .slides
    var Li = $(Element).find(".slides .sl"); // набор элементов "слайды" .sl
    var D = $(Element).find(".dots>.dot");  //набор элементов "дотсы" .dot
    var wi= $(Li).outerWidth(); //ширина слайда
    //var wi = 70;
    var n = $(Li).length; // количество слайдов
    var kbut = 1/5; //время прокрутки по кнопкам будет scrolltime * kbut
    var id;

    function dota(i){  // выделение точки, соответствующей активному слайду по порядковому номеру
        //console.log("ii = "+i);
        if(i==n) i=0;
        $(Element).find('.dot.dot-active').removeClass('dot-active');
        $(Element).find('.dot').eq(i).addClass('dot-active');
    }  

    function scroll(i){ // функция единичной перемотки слайда и отмотки слайдов в начало при достижении конца
      console.log("scroll-i = "+i);  
      var nnow = $(Ul).data('nnow'); // извлечение номера текущего слайда.
        if(i!=undefined) {$(Ul).animate({left: '-='+wi*(i-nnow)}, scrolltime*kbut).data('nnow', i);dota(i);return;}
        nnow++; // переход к следующему слайду
        if(nnow == n+1)  {nnow = 1; $(Ul).animate({left: '+='+wi*n}, 0);}  // сдвиг всех слайдов к началу, незаметный для глаза
        $(Ul).animate({left: '-='+wi}, scrolltime).data('nnow', nnow); // анимация прокрутки слайда 
        console.log("nnow = "+nnow+" left = "+$(Ul).position().left);
        dota(nnow);
    } 



    $( function () {
        $(Li).each(function(i,elem) { // клонирую каждый слайд и ставлю в конец списка, удваивая его длину. 
        $(elem).clone().appendTo(Ul); 
    });
        id = setInterval(scroll, delay+scrolltime); // повторяю единичную прокрутку через интервал




          $(D).click(
          // function(){
          //  clearInterval(id);
          //  },      
          function(){
            var ind = $(this).index();
            //alert("click!!!");
            console.log("ind = "+ind);
            
            scroll(ind);             
            });           
          // function(){
          //    id = setInterval(scroll(), delay+scrolltime);
          // });
      

          $(Element).on('mouseenter', 
          function(){
            clearInterval(id);
            });
            
          $(Element).on('mouseleave', 
          function(){
              id = setInterval(scroll, delay+scrolltime);
          });




    });

};
  
 
my_slider_slim(El1, 3000, 2000); // Вызов функции для 1го слайдера. 
my_slider_slim(El2, 1500, 2000); // Вызов функции для 2го слайдера.


// function scr(O){ // смена 1 слайда, для запуска кликом, пока доработана.
//  var wi = $(".slides .sl img").outerWidth(); // внешняя ширина картинки.
//  O.animate({left: '-='+wi,}, scrolltime); // Анимация прокрутки в слайдере - не лучший вариант,
//   // ниже столкнусля с проблемой с функцией setInterval, поэтому пришлось пока применить 
//   // метод .animate в связке delay(delay).animate(...)
// };


// function my_slider(Element, delay, scrolltime){ // Основная функция слайдера

//   var Ul, Li, wi, n, ntime;
//   Ul=$(Element).find(".slides");
//   Li=$(Ul).find(".sl"); // слайд
//   n=$(Li).length; // Количество слайдов
//    // список слайдов
  
//   D=$(Element).find(".dots .dot");  // дотсы слайдов
//   wi = Li.find("img").outerWidth(); // внешняя ширина картинки.
  
//   function scroll(){  // Однократная прокрутка всех слайдов.  
     
//     var vi;
//     function dota(i){
//     console.log("ii = "+i);
//     $(Element).find('.dot.dot-active').removeClass('dot-active');
//     $(Element).find('.dot').eq(i).addClass('dot-active');
//     }  

//     $(Li).each(function() {
//         i=$(this).index();
//         vi = $(Li).eq(i).outerWidth();
//         Ul.delay(delay).animate({left: '-='+vi}, scrolltime); // Анимация прокрутки одного слайда после задержки delay.
//         //dota(i);
        
         
//     });  
//     setInterval( dots(), delay+scrolltime); 
//     Ul.animate({left: '=0',}, 0); // Мгновенный возрат к началу слайда. 
//     // Незаметен из-за идетничных картинок 1-ой и (n+1)-ой, клонированной.

//   };


   
//     //setInterval( function dots(){
// function dots(){    
//     var Da = $(Element).find('.dot.dot-active');
//     var dn = $(D).filter('.dot.dot-active').index();
//     console.log('dn = '+dn);
//     //setInterval( function (){
//     $(D).eq($('.dot.dot-active').removeClass("dot-active").index()+1).addClass("dot-active");
//     // if(dan > 0) $(Element).find('.dot.dot-active').removeClass('dot-active').next().addClass('dot-active');
//     //   else {$(Element).find('.dot.dot-active').removeClass('dot-active');
//     //         $(Element).find('.dot:eq(0)').addClass('dot-active');}
//     //}, delay);
// }
//     //, delay);

     
  

// $(Li).each(function(i,elem) { // клонирую каждый слайд и ставлю в конец списка, удваивая его длину. 
// $(elem).clone().appendTo(Ul); 
// });

// ntime=0;
// do {
//   ntime++;
//   scroll();
//   //dots();             // Вызов 1й прокрутки всех слайдов 1000 раз.
//  } while (ntime<1000); 
// };  







 
//$(document).on('click','.sl', function(){ var x=$(this).parent(".slides"); scr(x);}); // Клики по слайдеру пока не работают.


$(document).on('click','.links li', function(){ 
// Изменение стилей вкладок по клику Users list на странице ниже второго слайдера. Хотя лучше через addClass и remooveClass.  
   $(this).css({'backgroundColor' : '#fff','zIndex' : '10'}).find('a').css({'color':'#ffa352'});
   var x; if($(this).get(0)==$("#lin1").get(0)) x=$("#lin2"); else x=$("#lin1");
   $(x).css({'backgroundColor' : '#f4f4f4','zIndex' : '1'}).find('a').css({ 'color':'#969696'});
});


});















