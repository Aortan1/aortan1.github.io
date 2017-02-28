

// var ques = "Question_1";
var i=0;
var n=0;
var n_ques = model.questions.length;
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
						$scope.message = model.intro;
						var ques = model.questions.shuffle();
						$scope.n_ques = ques.length;
						


						$scope.startTest = function () {
						$(".block").removeClass("appear");
 						$(".block.bl-1").addClass("appear");
 						
 						$scope.message = ques[0].content+'?';
 						$scope.i = i+1;
						};

						

            $scope.clickHandler = function () {
            	$scope.right = ques[i].right;
							if($scope.answer && $scope.answer.trim().toLowerCase()==$scope.right) 
 								{n++;	$scope.comment=""; }
 								else {$scope.comment =ques[i].content+" - "+ques[i].right; if($scope.answer) $scope.comment="Неверно. "+$scope.comment+", а не "+$scope.answer+"."; else $scope.comment+="."}
							
             	if (i==n_ques-1) { 
            	//$scope.message = "Right answers "+n;
 							//if($scope.answer && $scope.answer==$scope.right) n++;
 							$scope.n_right = n;
 							$scope.grade = (n*5/n_ques).toFixed(2);
 							
            	$(".block").removeClass("appear");
            	$(".block.bl-end").addClass("appear");
 							} else
 							{
 							//if($scope.answer && $scope.answer==$scope.right) 
 							//	{n++;	$scope.comment=""; }
 							//	else {$scope.comment ="Неверно. "+ques[i].content+" - "+ques[i].right+'.';}
             	$scope.message = ques[i+1].content+'?';
             	$scope.n_right = n;
            	
            	console.log("i = "+i+" n = "+n+" $scope.message = "+$scope.message+" $scope.answer = "+$scope.answer+" $scope.right = "+$scope.right);
            	//ques[i	].right = $scope.answer;
            	$scope.answer='';            	
 							
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












 







