
$(document).ready (function(){

var El1=$(".top-slider"); // Контейнер слайдера 1.
var El2=$(".user-slider"); // Контейнер слайдера 2.


function scr(O){ // смена 1 слайда, для запуска кликом, пока доработана.
 var wi = $(".slides .sl img").outerWidth(); // внешняя ширина картинки.
 O.animate({left: '-='+wi,}, scrolltime); // Анимация прокрутки в слайдере - не лучший вариант,
  // ниже столкнусля с проблемой с функцией setInterval, поэтому пришлось пока применить 
  // метод .animate в связке delay(delay).animate(...)
};


function my_slider(Element, delay, scrolltime){ // Основная функция слайдера

  var Ul, Li, wi, n, ntime;
  n=$(Element).find('.slides .sl').length; // Количество слайдов
  Ul=$(Element).find(".slides"); // список слайдов
  Li=$(Element).find(".slides .sl"); // слайд
  D=$(Element).find(".dots .dot");  // дотсы слайдов
  wi = Li.find("img").outerWidth(); // внешняя ширина картинки.
  

$(Li).each(function(i,elem) { // клонирую каждый слайд и ставлю в конец списка, удваивая его длину. 
$(elem).clone().appendTo(Ul); 
});



  
  
  function scroll(){  // Однократная прокрутка всех слайдов.  
     
  var vi;
  $(D).each(function(i,elem) {  
    $(elem).addClass("dot-active"); // Связать прокрутку с дотсами пока не выходит.
    //setTimeout(function() {         
      vi = $(Li).eq(i).outerWidth();
      Ul.delay(delay).animate({left: '-='+vi}, scrolltime); // Анимация прокрутки одного слайда после задержки delay.
      $(elem).removeClass("dot-active");
    //}, delay);
    //$(elem).removeClass("dot-active");
      if (i==0) $(elem).addClass("dot-active");
  });  
  Ul.animate({left: '=0',}, 0); // Мгновенный возрат к началу слайда. 
  // Незаметен из-за идетничных картинок 1-ой и (n+1)-ой, клонированной.
  

  };

  
  ntime=0;
  do {
  ntime++;
  scroll();             // Вызов 1й прокрутки всех слайдов 1000 раз.
  } while (ntime<1000); 
};  

my_slider(El1, 4000, 5000); // Вызов функции для 1го слайдера. 
my_slider(El2, 2500, 3000); // Вызов функции для 2го слайдера.

 
$(document).on('click','.sl', function(){ var x=$(this).parent(".slides"); scr(x);}); // Клики по слайдеру пока не работают.


$(document).on('click','.links li', function(){ 
// Изменение стилей вкладок по клику Users list на странице ниже второго слайдера. Хотя лучше через addClass и remooveClass.  
   $(this).css({'backgroundColor' : '#fff','zIndex' : '10'}).find('a').css({'color':'#ffa352'});
   var x; if($(this).get(0)==$("#lin1").get(0)) x=$("#lin2"); else x=$("#lin1");
   $(x).css({'backgroundColor' : '#f4f4f4','zIndex' : '1'}).find('a').css({ 'color':'#969696'});
});


});















