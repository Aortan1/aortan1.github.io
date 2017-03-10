

// var ques = "Question_1";
var i=0;
var n=0;
var number;
var list;
// var model = {
//             testname: "Test_1",
//             intro: "Please enter answers of test 1.",
//             questions: [{num: 1, content: "first", right: "1", answer: "" },
//                 {num: 2, content: "second",  right: "2", answer: "" },
//                 {num: 3, content: "third",  right: "3", answer: "" },
//                 {num: 4, content: "fourth",  right: "4", answer: "" }]
//         };

var testingApp = angular.module("testingApp", []);
testingApp.controller("TestingCtrl", function ($scope) {
						


            $scope.model = model;
            $scope.nt = 0; // $scope.nt - номер теста. 0, или 1. 0 - по умолчайнию, checked.

            $scope.chooseTest = function () {
            $(".block").removeClass("appear");
            $(".block.bl-start").addClass("appear");
            var nt = $scope.nt;
            var pro = $scope.pro;
            list = model[nt].questions.shuffle();

            if (pro) {
            $(".block").addClass("bl-pro");  
            list = list.filter(function(x) {
            return x.d > 0; // теперь в списке list только вопросы с ненулевым свойством d
            });

            };
            $scope.message = model[nt].intro;
            if(!pro) $scope.num_questions = model[nt].num_questions; else $scope.num_questions = model[nt].num_questions_pro;
            $scope.numberall = list.length;
            $scope.nq = $scope.num_questions[0]; //checked в списке - первое значение числа вопросов.
            //$(".block").removeClass("bl-pro");
            };



						$scope.startTest = function () {
						$(".block").removeClass("appear");
 						$(".block.bl-1").addClass("appear");
 						
            if($scope.nq) number = $scope.nq; else number=$scope.numberall
 						//number = $scope.nq;
            $scope.message = list[0].content+'?';
 						$scope.i = i+1;
            $scope.answer = "";
						
            };

            // $scope.clickNumOfQues = function () {
            // $scope.n_ques = n_q;						
            // };

            $scope.clickHandler = function () {

              function clear_word(x){
                var cl = x.trim().toLowerCase();
                if(cl.substr(0,2)=="::") cl = cl.substr(2,cl.length-2); // обрезка :: перед псевдостилем.
                if(cl.substr(0,1)==":") cl = cl.substr(1,cl.length-1); // обрезка : перед псевдостилем.
                if(cl.substr(cl.length-2,2)=="()") cl = cl.substr(0,cl.length-2); // обрезка () в конце функции.                  
                if(cl.substr(0,1)=="<" && cl.substr(cl.length-1,1)==">") cl = cl.substr(1,cl.length-2); // обрезка скобок <>
                return cl;
              }

            	$scope.right = clear_word(list[i].right);
              var answer = clear_word($scope.answer);
              
							
              if(answer && answer==$scope.right) 
 								{n++;	  $scope.comment='Верно.'; $("p.comment").removeClass("c-wrong").addClass("c-right");}
 								else {
                  $scope.comment = list[i].content+" - "+list[i].right; 
                  if($scope.answer) $scope.comment='Неверно. '+$scope.comment+', а не '+$scope.answer+'.'; else $scope.comment+='.';
                  $("p.comment").removeClass("c-right").addClass("c-wrong"); 
                  }
							
             	if (i==number-1) { 
 							var grade = (n*5/number).toFixed(2);
              $scope.n_right = 'Количество верных ответов: '+n+' из '+number+'.';
              $scope.grade = 'Оценка: '+grade+' из 5.';
              if (grade==5) $scope.n_right='Отличный результат! '+n+' из '+number+'!';

 							
            	$(".block").removeClass("appear");
            	$(".block.bl-end").addClass("appear");
 							} else
 							{
 							//if($scope.answer && $scope.answer==$scope.right) 
 							//	{n++;	$scope.comment=""; }
 							//	else {$scope.comment ="Неверно. "+list[i].content+" - "+list[i].right+'.';}
             	$scope.message = list[i+1].content+'?';
             	$scope.n_right = n;
            	
            	console.log("i = "+i+" n = "+n+" $scope.message = "+$scope.message+" $scope.answer = "+$scope.answer+" $scope.right = "+$scope.right);
            	//list[i	].right = $scope.answer;
            	$scope.answer='';            	
 							// da_bind('comment',comment);
              // da_bind('message',answer);
            	i++; $scope.i = i+1;
              }
             
            }
            
          // }

        });



$(document).ready(function(){


$(".block").keyup(function(event){
  if (event.keyCode == 13) {
  $(this).find('.sub')[0].click().unbind();
  return false;       
   }
});


});



function rando(n){
var r=Math.random();
var ran = Math.ceil(r*n);
// if (ran == n) {ran=1;}  
return Math.floor(ran);  
}

// function da_bind (html_x, js_x) {
//   var Bi = document.querySelectorAll('*[da-bind]');;
//   for (var i = 0; i <Bi.length; i++) {
//     var att_value = Bi[i].getAttribute('da-bind');
//     if (att_value==html_x) Bi[i].innerHTML=$scope.js_x;  
// }};




// Функция перемешивания элементов массива.
// После применения ar=ar.shuffle(); массив перемешается.
Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
}

// Конструкция 'Array.prototype.in_array = function(p_val) {...} озаначает, 
// что при создании новых объектов array в них как свойство будет 
// добавляться ф-я .in_array, описанная после =.
// Т.е у прототипов array будет свойство .in_array.


// var g=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// g=g.shuffle(); // испытание ф-и .shuffle()
// for(i=0; i<g.length; i++){
// console.log("g["+i+"] = "+g[i]);
// }









 







