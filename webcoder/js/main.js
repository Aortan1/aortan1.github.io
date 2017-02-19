
$(document).ready (function(){

var El1=$(".top-slider"); // Контейнер слайдера 1.
var El2=$(".user-slider"); // Контейнер слайдера 2.

my_slider_slim(El1, 3000, 2000); // Вызов функции для 1го слайдера. 
my_slider_slim(El2, 1500, 2000); // Вызов функции для 2го слайдера.
  


  
function my_slider_slim (Element, delay, scrolltime){ // МОй СЛАЙДЕР. Параметры: селектор контейнера, задержка между слайдами, время прокрутки

    var Ul = $(Element).find(".slides"); // элемент "список слайдов" .slides
    var Li = $(Element).find(".slides .sl"); // набор элементов "слайды" .sl
    var D = $(Element).find(".dots>.dot");  //набор элементов "дотсы" .dot
    var B_left = $(Element).find(".left");  //левая кнопка перемотки
    var B_right = $(Element).find(".right");  //правая кнопка перемотки
    var wi= $(Li).outerWidth(); //ширина слайда
    //var wi = 70;
    var n = $(Li).length; // количество слайдов
    var kbut = 1/5; //время прокрутки по кнопкам будет scrolltime * kbut
    var id; // для id таймера задержки между слайдами

    function dota(i){  // выделение точки, соответствующей активному слайду по порядковому номеру
        //console.log("ii = "+i);
        if(i==n) i=0;
        $(Element).find('.dot.dot-active').removeClass('dot-active');
        $(Element).find('.dot').eq(i).addClass('dot-active');
    }  

    function scroll(i){ // функция единичной перемотки слайда и отмотки слайдов в начало при достижении конца 
      var nnow = $(Ul).data('nnow'); // извлечение номера текущего слайда.
      var scrollt = scrolltime;
      var x_offset='-='+wi;
      console.log("nnow0= "+nnow+" left0= "+$(Ul).position().left + " button-i = "+i);      
      
      if(i=="right") { 
        x_offset='-='+wi;
        scrollt = scrolltime*kbut;
        nnow++;} else
      if(i=="left") { 
        x_offset='+='+wi;
        scrollt = scrolltime*kbut;
        nnow--;} else
      if(i!=undefined) {
        x_offset = '-='+wi*(i-nnow); 
        scrollt = scrolltime*kbut;
        nnow = i;}    
      else nnow++; // переход к следующему слайду
      
      if(nnow == -1)  {nnow = n-1; $(Ul).animate({left: '-='+wi*n}, 0).data('nnow', nnow);}  // сдвиг всех слайдов к началу, незаметный для глаза     
      $(Ul).animate({left: x_offset}, scrollt).data('nnow', nnow); // анимация прокрутки слайда 
      if(nnow == n)  {nnow = 0; $(Ul).animate({left: '+='+wi*n}, 0).data('nnow', nnow);}  // сдвиг всех слайдов к началу, незаметный для глаза
      dota(nnow);
      
      //console.log("nnow = "+nnow+" left = "+$(Ul).position().left);
       
    } 



    $( function () {
        $(Li).each(function(i,elem) { // клонирую каждый слайд и ставлю в конец списка, удваивая его длину. 
        $(elem).clone().appendTo(Ul); 
    });
        id = setInterval(scroll, delay+scrolltime); // повторяю единичную прокрутку через интервал




          $(D).click(     
          function(){
            var button_ind = $(this).index();
            console.log("ind = "+button_ind);            
            scroll(button_ind);
            });
      
          $(B_left).click(      
          function(){
            scroll("left");
            });   
          $(B_right).click(     
          function(){
            scroll("right");
            });
      

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
  

$(document).on('click','.links li', function(){ 
// Изменение стилей вкладок по клику Users list на странице ниже второго слайдера. Хотя лучше через addClass и remooveClass.  
   $(this).css({'backgroundColor' : '#fff','zIndex' : '10'}).find('a').css({'color':'#ffa352'});
   var x; if($(this).get(0)==$("#lin1").get(0)) x=$("#lin2"); else x=$("#lin1");
   $(x).css({'backgroundColor' : '#f4f4f4','zIndex' : '1'}).find('a').css({ 'color':'#969696'});
});


});















