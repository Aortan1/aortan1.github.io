
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
      var scrollt = scrolltime; // время прокуртки
      var x_offset='-='+wi; // смещение слайда по x изменением его свойства left
      //console.log("nnow0= "+nnow+" left0= "+$(Ul).position().left + " button-i = "+i);      
      
      if(i=="right") {  // случай нажатия правой кнопки прокрутки 1 слайда
        x_offset='-='+wi;
        scrollt = scrolltime*kbut; // ускоренная прокрутка
        nnow++;} else
      if(i=="left") {   // случай нажатия левой кнопки прокрутки 1 слайда
        x_offset='+='+wi;
        scrollt = scrolltime*kbut;
        nnow--;} else
      if(i!=undefined) {  // случаи нажатия кнопок-дотсов
        x_offset = '-='+wi*(i-nnow);
        scrollt = scrolltime*kbut;
        nnow = i;}    
      else nnow++; // переход к следующему слайду в остальных случаях
      
      if(nnow == -1)  {nnow = n-1; $(Ul).animate({left: '-='+wi*n}, 0).data('nnow', nnow);}  // сдвиг всех слайдов к последнему слайду, незаметный для глаза     
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




          $(D).click(     // событие нажатия на кнопки-дотсы
          function(){
            var button_ind = $(this).index();
            console.log("ind = "+button_ind);            
            scroll(button_ind);
            });
      
          $(B_left).click( // событие нажатия на левую кнопку прокрутки 1 слайда     
          function(){
            scroll("left");
            });   
          $(B_right).click(  // событие нажатия на правую кнопку прокрутки 1 слайда     
          function(){
            scroll("right");
            });
      

          $(Element).on('mouseenter', // приостановка автопрокрутки слайдера при наведении на него курсора
          function(){
            clearInterval(id);
            });
            
          $(Element).on('mouseleave', // продолжение автопрокрутки слайдера после прекращения наведения на него курсора
          function(){
              id = setInterval(scroll, delay+scrolltime);
          });




    });

};


  

$('.links li').on('click', function(){ 
// Изменение стилей вкладок по клику Users list на странице ниже второго слайдера.
   $(this).addClass("lin-active");
   //$(this).css({'backgroundColor' : '#fff','zIndex' : '10'}).find('a').css({'color':'#ffa352'});
   var x; if($(this).get(0)==$("#lin1").get(0)) x=$("#lin2"); else x=$("#lin1");
   $(x).removeClass("lin-active");
   //$(x).css({'backgroundColor' : '#f4f4f4','zIndex' : '1'}).find('a').css({ 'color':'#969696'});
});


$("#fstart").submit(function(){ // фунция проверки верности формата вводимых данных
  if ($("#name").val().length<3)
  {
    $(".item#it-name").addClass("data-wrong");
  }
  else
  {$(".item#it-name").removeClass("data-wrong").addClass("data-right");
  }
  $(".item#it-bith").addClass("data-right");
  return false;
})



});















