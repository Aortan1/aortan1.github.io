


// $(document).ready (function(){ 


function rand_till(n){
 // если a = 6, ф-я выдаёт случайное из набора целых от 0 до 5.
var aa=Math.random();
var aaa = Math.floor(aa*n);
if (aaa == n) {aaa=0;}  
return Math.floor(aa*n);  
}


function FunColor(but) {
  
  var n_at=8; // число попыток или строк по 4 яцейки.
  var n = 4; // число ячеек в строке
  var n_colors = 6; // число вариантов цветов
  var pressed_color = but.value; //код цвета нажатой кнопки
  var colors = []; 
  var colors_cod = [];
  var colors_attempt = [];
  var sum1, sum2; // кол-во точных совпадений и совпадений цвета
  var m2, x, x_now, attempt_now, at;
  var end_of_attempt = false;
  var color_def; //!!ВАЖНО менять. Цвет пустой ячейки.
  color_def = window.getComputedStyle(document.getElementsByClassName("fonc")[0]).backgroundColor;
  

  
  //window.alert(x);
  //T =  document.getElementsByClassName("blu");
  // T[0].style.backgroundColor = "red"; 
  
  //El =  document.querySelectorAll("i");
  //El[1].style.backgroundColor = "white";
   //m2=window.getComputedStyle(document.getElementsByClassName("b_lilac")[0]).backgroundColor;
 // window.alert(m2);
  
for (i = 0;  i < n_colors; i++ ){ // цвета от 1 до 6. Формирую массив цветов по стилям.
colors[i]=window.getComputedStyle(document.getElementsByClassName("bcol")[i]).backgroundColor;
   }

Itags = document.getElementsByTagName("i"); 
Secrets = document.getElementsByClassName("secret"); 
Fon =  document.getElementsByClassName("fonc");
Btags = document.getElementsByTagName("b");   
Htag = document.getElementsByTagName("h1");  
Sec =  document.getElementsByClassName("secrets");
Att =  document.getElementsByClassName("attempt");

  if (window.getComputedStyle(Secrets[0]).backgroundColor == "rgb(0, 0, 0)") { // СОЗДАНИЕ СЕКРЕТНОГО НАБОРА ЦВЕТОВ
  color_def=window.getComputedStyle(Itags[0]).backgroundColor;
  Fon[0].style.backgroundColor = color_def;  
  for (i = 0;  i < n; i++ ){ 
  colors_cod[i] = colors[rand_till(n_colors)];
  Secrets[i].style.backgroundColor = colors_cod[i]; 
    }
  }  
  
  
  
  j=n; at=1; for (i = n*n_at;  i > 0; i-- ){ // закраска ячеек
  x=i-j;  j=j-2;  if (j == (-1)*n) {j=n;end_of_attempt = true;}
  citag= window.getComputedStyle(Itags[x]).backgroundColor;
  if (citag==color_def) {x_now=x; attempt_now=at; break;}
  if (j==n) at++; end_of_attempt = false;
  }

 
  
  //if (but.value=="Cansel") alert (x_now);  
var v = 0;
AttNow=Att[n_at-attempt_now];
  
switch (v==1){
  
case false:
if (but.value=="DO IT." || but.value=="NICE!")  { window["location"].reload(true);}
    
else if (but.value=="Cancel"){x_now--;           Itags[x_now].style.backgroundColor = color_def;  return; } 
    
else Itags[x_now].style.backgroundColor =colors[pressed_color-1];
break;
  
  case true:
  var style = document.createElement('style');
  style.type = 'text/css';
  var h = '.attempt i:hover{opacity:0.5; background-color:'+colors[pressed_color-1]+ '}';
  var hover = document.createTextNode(h);
  var head = document.getElementsByTagName('head')[0];
  style.appendChild(hover);
  head.appendChild(style);
    
    
  break;}
  
  
if (v==1) {v=1;}  
  
  
  if (end_of_attempt){
  for (i = 0;  i < n; i++ ){  
colors_cod[i]=window.getComputedStyle(Secrets[i]).backgroundColor;
colors_attempt[i]= window.getComputedStyle(Itags[x_now+i+1-n]).backgroundColor;   
  }
  
sum1=0; sum2=0;

for (i = 0;  i < n; i++ ){  
if (colors_cod[i]==colors_attempt[i]) sum1++;
    }    
    
for (i = 0;  i < n; i++ ){  
for (j = 0;  j < n; j++ ){    
if (colors_cod[i]==colors_attempt[j]) {sum2++;colors_attempt[j]=0; break;}
    }
    }
sum2 = sum2-sum1;    
//alert ("Black="+sum1+" white="+ sum2);  

Bcan =  document.getElementsByClassName("b_cansel");

 if (sum1==n) {Bcan[0].value = "NICE!"; 
   Bcan[0].style.backgroundColor = "#FFC107";
   Bcan[0].style.color="white";
             }    
 if (x_now==3 && sum1!=n) {Bcan[0].style.backgroundColor = "#E91E63";
 Bcan[0].style.color="black";
 Bcan[0].value = "DO IT.";
 Bcan[0].style.fontSize = "15px";
 Bcan[0].style.fontWeight= "bold";   
           }   
    
if (sum1==n){Htag[0].innerHTML="ПОЗДРАВЛЯЮ!!! ВЫ РАЗГАДАЛИ КОМБИНАЦИЮ ЦВЕТОВ!!!";
Htag[0].style.backgroundColor = "#388E3C"; Htag[0].style.color="yellow";
Htag[0].style.fontSize = "20px"; 
Sec[0].style.display ="block";            
}      

if (attempt_now==n_at && sum1!=n){
Htag[0].innerHTML="Попробуйте ещё раз, у вас получится.";
Htag[0].style.color="black";
Htag[0].style.fontSize = "18px";
Sec[0].style.display ="block"; 
} 
    
for (i = 0;  i < n; i++ ){
ii = x_now+i+1-n;  
if (sum1==0 && sum2>0){sum2--; 
Btags[ii].style.backgroundColor = "white";
Btags[ii].style.borderColor = "white";
                     }
if (sum1>0){sum1--; 
Btags[ii].style.backgroundColor = "black";
Btags[ii].style.borderColor = "black";
          }
}  
}    
}



  
 // });
  