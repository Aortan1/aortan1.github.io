


$(document).ready (function(){ 
var this1,this2;  
var difficulty_level=400; // уровень сложности (количество движений размешивания)
//3-5 - ЛЁГКИЙ,
//6-9 - СРЕДНИЙ,
//10 и > - СЛОЖНЫЙ.

 cube = fill_in_cells() ;
 cube = randcolors(difficulty_level, cube) ;

 $('.edge i:nth-child(5)').click(function fadeedge(){ //(убор верхних граней)
  $('.edge-1,.edge-4,.edge-5').fadeTo(200,0.0).fadeTo(1000,0.0).fadeTo(300,1.0); 
  });
  
 
 $('h1').click(function fadeedge(){
  $('.edge-1,.edge-4,.edge-5').fadeTo(400,0.3).fadeTo(600,0.8).fadeTo(900,0.6).fadeTo(1350,1.0); //(декоративное мелькание граней)
  });

  
$('.but').bind("click", function funbut(){
 //alert("click"); 
 cube = newcube(); //alert("111");
 if ($(this).hasClass("but1"))  cube = move_segment(1,6,1,cube); else 
 if ($(this).hasClass("but11"))  cube = move_segment(1,6,3,cube); else
 if ($(this).hasClass("but2"))  cube = move_segment(2,6,1,cube); else
 if ($(this).hasClass("but22"))  cube = move_segment(2,6,3,cube); else
 if ($(this).hasClass("but3"))  cube = move_segment(3,6,1,cube); else
 if ($(this).hasClass("but33"))  cube = move_segment(3,6,3,cube);   
 cube = draw_cube(cube); //alert("333");
  });

  
  $('.edge i').bind("click", function turn(){
 //alert("click"); 
 cube = newcube(); //alert("111");
 if ($(this).is(".edge-1 i:nth-child(1)"))  cube = move_segment(1,1,1,cube); else 
 if ($(this).is(".edge-1 i:nth-child(2)"))  cube = move_segment(1,2,1,cube); else 
 if ($(this).is(".edge-1 i:nth-child(3)"))  cube = move_segment(1,3,1,cube); else 
 if ($(this).is(".edge-1 i:nth-child(7)"))  cube = move_segment(1,1,3,cube); else 
 if ($(this).is(".edge-1 i:nth-child(8)"))  cube = move_segment(1,2,3,cube); else
 if ($(this).is(".edge-1 i:nth-child(9)"))  cube = move_segment(1,3,3,cube); else 
   
 if ($(this).is(".edge-5 i:nth-child(1)"))  cube = move_segment(2,1,3,cube); else 
 if ($(this).is(".edge-5 i:nth-child(4)"))  cube = move_segment(2,2,3,cube); else 
 if ($(this).is(".edge-5 i:nth-child(7)"))  cube = move_segment(2,3,3,cube); else 
 if ($(this).is(".edge-5 i:nth-child(3)"))  cube = move_segment(2,1,1,cube); else 
 if ($(this).is(".edge-5 i:nth-child(6)"))  cube = move_segment(2,2,1,cube); else
 if ($(this).is(".edge-5 i:nth-child(9)"))  cube = move_segment(2,3,1,cube); else 
   
 if ($(this).is(".edge-4 i:nth-child(1)"))  cube = move_segment(3,3,1,cube); else 
 if ($(this).is(".edge-4 i:nth-child(4)"))  cube = move_segment(3,2,1,cube); else 
 if ($(this).is(".edge-4 i:nth-child(7)"))  cube = move_segment(3,1,1,cube); else 
 if ($(this).is(".edge-4 i:nth-child(3)"))  cube = move_segment(3,3,3,cube); else 
 if ($(this).is(".edge-4 i:nth-child(6)"))  cube = move_segment(3,2,3,cube); else
 if ($(this).is(".edge-4 i:nth-child(9)"))  cube = move_segment(3,1,3,cube); else
   
 if ($(this).is(".edge-1 i:nth-child(4)"))  cube = move_segment(3,2,1,cube); else 
 if ($(this).is(".edge-1 i:nth-child(6)"))  cube = move_segment(3,2,3,cube); else 
 if ($(this).is(".edge-4 i:nth-child(2)"))  cube = move_segment(2,2,3,cube); else 
 if ($(this).is(".edge-4 i:nth-child(8)"))  cube = move_segment(2,2,1,cube); else 
 if ($(this).is(".edge-5 i:nth-child(2)"))  cube = move_segment(1,2,1,cube); else
 if ($(this).is(".edge-5 i:nth-child(8)"))  cube = move_segment(1,2,3,cube);  
 //     else   
 // if ($(this).is(".edge-1 i:nth-child(5)"))  cube = move_segment(2,6,1,cube); else 
 //if ($(this).is(".edge-4 i:nth-child(5)"))  cube = move_segment(1,6,1,cube); else 
 //if ($(this).is(".edge-5 i:nth-child(5)"))  cube = move_segment(3,6,1,cube);    
      
 cube = draw_cube(cube); //alert("333");
 is_cube_ready(cube);     
 
  });
 
  
  
  
    $('.edge i').mousedown( function f1(event1){
      cube = newcube();
      this1=this;
      $('.edge ').unbind( "mouseup" ); 
      $('.edge').mouseup( function f2(event2){
      this2=this;  
      if ($(this1).is(".edge-1 i:nth-child(3n+1)") && $(this2).is(".edge-5 "))  
        cube = move_segment(1,1,1,cube); else  
      if ($(this1).is(".edge-1 i:nth-child(3n+2)") && $(this2).is(".edge-5 ")) 
        cube = move_segment(1,2,1,cube);  else 
      if ($(this1).is(".edge-1 i:nth-child(3n)") && $(this2).is(".edge-5 ")) 
        cube = move_segment(1,3,1,cube); else 
      
      if ($(this2).is(".edge-1 ") && $(this1).is(".edge-5 i:nth-child(3n+1)")) 
        cube = move_segment(1,1,3,cube); else  
      if ($(this2).is(".edge-1 ") && $(this1).is(".edge-5 i:nth-child(3n+2)")) 
        cube = move_segment(1,2,3,cube); else 
      if ($(this2).is(".edge-1 ") && $(this1).is(".edge-5 i:nth-child(3n)")) 
        cube = move_segment(1,3,3,cube); else 
          
          
      if ($(this1).is(".edge-1 i:nth-child(3),.edge-1 i:nth-child(2),.edge-1 i:nth-child(1)") && $(this2).is(".edge-4 "))  
        cube = move_segment(3,3,3,cube); else  
      if ($(this1).is(".edge-1 i:nth-child(6),.edge-1 i:nth-child(5),.edge-1 i:nth-child(4)") && $(this2).is(".edge-4 ")) 
        cube = move_segment(3,2,3,cube); else 
      if ($(this1).is(".edge-1 i:nth-child(9),.edge-1 i:nth-child(8),.edge-1 i:nth-child(7)") && $(this2).is(".edge-4 ")) 
        cube = move_segment(3,1,3,cube); else 
      
      if ($(this2).is(".edge-1 ") && $(this1).is(".edge-4 i:nth-child(1),.edge-4 i:nth-child(2),.edge-4 i:nth-child(3)")) 
        cube = move_segment(3,3,1,cube); else  
      if ($(this2).is(".edge-1 ") && $(this1).is(".edge-4 i:nth-child(4),.edge-4 i:nth-child(5),.edge-4 i:nth-child(6)")) 
        cube = move_segment(3,2,1,cube); else 
      if ($(this2).is(".edge-1 ") && $(this1).is(".edge-4 i:nth-child(7),.edge-4 i:nth-child(8),.edge-4 i:nth-child(9)")) 
        cube = move_segment(3,1,1,cube); else 
          
          
      if ($(this1).is(".edge-5 i:nth-child(3),.edge-5 i:nth-child(2),.edge-5 i:nth-child(1)") && $(this2).is(".edge-4 "))  
        cube = move_segment(2,1,1,cube); else  
      if ($(this1).is(".edge-5 i:nth-child(6),.edge-5 i:nth-child(5),.edge-5 i:nth-child(4)") && $(this2).is(".edge-4 ")) 
        cube = move_segment(2,2,1,cube); else 
      if ($(this1).is(".edge-5 i:nth-child(9),.edge-5 i:nth-child(8),.edge-5 i:nth-child(7)") && $(this2).is(".edge-4 ")) 
        cube = move_segment(2,3,1,cube); else 
      
      if ($(this2).is(".edge-5 ") && $(this1).is(".edge-4 i:nth-child(3n)")) 
        cube = move_segment(2,1,3,cube); else  
      if ($(this2).is(".edge-5 ") && $(this1).is(".edge-4 i:nth-child(3n+2)")) 
        cube = move_segment(2,2,3,cube); else 
      if ($(this2).is(".edge-5 ") && $(this1).is(".edge-4 i:nth-child(3n+1)")) 
        cube = move_segment(2,3,3,cube); else  {this1="";this2="";}   
          
          
               
      cube = draw_cube(cube);
      is_cube_ready(cube); 
        
     
        
      });

  });


}); 





function move_segment(axe,nseg,na,cube){
 
// axe - номер оси; nseg - номер сегмента(сечения), na - число поворотов на 90 гр. 
//Все 3 параметра принимают зн-я 1, 2 или 3.(nseg - ещё 6.)
//nseg=6 - поворот всего куба.   
var a=90*na; 
//alert ("move_seg1");

  for (var i=0; i<54; i++){ 
  
  if (nseg==6){ cube[i]=rot(cube[i],axe,a); }
    
  if (nseg==1 && axe==1 && cube[i].x<-0.2){ cube[i]=rot(cube[i],axe,a); }  
  if (nseg==2 && axe==1 && Math.abs(cube[i].x)<0.1){ cube[i]=rot(cube[i],axe,a); }
  if (nseg==3 && axe==1 && cube[i].x>0.2){ cube[i]=rot(cube[i],axe,a); } 
  
  if (nseg==1 && axe==2 && cube[i].y<-0.2){ cube[i]=rot(cube[i],axe,a); }  
  if (nseg==2 && axe==2 && Math.abs(cube[i].y)<0.1){ cube[i]=rot(cube[i],axe,a); }
  if (nseg==3 && axe==2 && cube[i].y>0.2){ cube[i]=rot(cube[i],axe,a); }
  
  if (nseg==1 && axe==3 && cube[i].z<-0.2){ cube[i]=rot(cube[i],axe,a); }  
  if (nseg==2 && axe==3 && Math.abs(cube[i].z)<0.1){ cube[i]=rot(cube[i],axe,a); }
  if (nseg==3 && axe==3 && cube[i].z>0.2){ cube[i]=rot(cube[i],axe,a); }
  
}
 // document.write("<b> move_seg axe="+axe+" nseg="+nseg +" a="+a+"</b><br> ");
  return cube; 
}



function rot(po, axe, a){
 // document.write("<i>"+axe+" "+a+" </i>");
  var xx=po.x; 
  var yy=po.y; 
  var zz=po.z;
  var cos=Math.cos(a*Math.PI/180);
  var sin=Math.sin(a*Math.PI/180);//alert(yy);
  //alert (-Math.sin(an));
 // alert("ttt x="+cube[100].x+" y="+cube[100].y+" z="+cube[100].z); 
  if (axe=='z'||axe==3)    {
po.x = (xx*cos - yy*sin).toFixed(3); //alert(yy+' '+sin+' '+po.x);
po.y = (xx*sin + yy*cos).toFixed(3);
po.z = zz;  }
  if (axe=='x'||axe==1)    {
po.y= (yy*cos - zz*sin).toFixed(3);
po.z= (yy*sin + zz*cos).toFixed(3);
po.x = xx; }  
  if (axe=='y'||axe==2)    {
po.z = (zz*cos - xx*sin).toFixed(3);
po.x = (zz*sin + xx*cos).toFixed(3);
po.y = yy; }
  if (po.x > 0.86) po.edge=3;  else
  if (po.x < -0.86) po.edge=1; else
  if (po.y > 0.86) po.edge=0; else
  if (po.y < -0.86) po.edge=2; else  
  if (po.z > 0.86) po.edge=4; else
  if (po.z < -0.86) po.edge=5;   
return po;
};


function fill_in_cells(){
var cube = []; 
var cu0={id:0, x:0.5, y:0.866, z:0, color:0, edge:0};   
var cu8={id:8, x:0, y:1, z:0, color:0, edge:0};// Точка Ку.  

  //ПЕРВЫЕ 9 точек на грани 1(сегмент y>0.866).
//-------------------------------------------
for (var i=0; i<9; i++){
if (i==8) cube[8]=Object.create(cu8); else {cube[i] =Object.create(cu0); cube[i] = rot(cube[i],2,45*i);}
//alert("a="+i*45+" koords: x="+cube[i].x+" y="+cube[i].y+" z="+cube[i].z+" edge="+cube[i].edge);  
};  
// ДАЛЕЕ ВСЕ ЭТИ 9 ТОЧЕК ПОВЕРНУТЬ 3 РАЗА ВОКРУГ Z НА 90градусов, А ПОТОМ НА 90 И 270 ВОКРУГ X.
for (i=9; i<18; i++){
cube[i] =Object.create(cube[i-9]);
cube[i+9] =Object.create(cube[i-9]);
cube[i+18] =Object.create(cube[i-9]);
cube[i+27] =Object.create(cube[i-9]);
cube[i+36] =Object.create(cube[i-9]);  
cube[i]    = rot(cube[i],3,90); //делаем грань 2.
cube[i+9]  = rot(cube[i+9],3,180); //делаем грань 3.
cube[i+18] = rot(cube[i+18],3,-90); //делаем грань 4.
cube[i+27] = rot(cube[i+27],1,90); //делаем грань 5.
cube[i+36] = rot(cube[i+36],1,-90); //делаем грань 6.
};

var isco = $("i").eq(0).attr("co");
//alert (isco);  
if (isco==undefined) { //alert("isco==undefined");
  for (i=0; i<54; i++) cube[i].color=cube[i].edge;}
//else
//{ alert("isco EXIST");
 // for (i=0; i<54; i++){
  //  var c = $("i").eq(i).attr("co"); 
   // cube[i].color=+c;}}
  
  
return cube;
  
};

function newcube(){
  var cube = [];
  var x,y,z,c,g;
  var cu0={id:0, x:0.5, y:0.866, z:0, color:0, edge:0}; 
  
  for (var i=0; i<54; i++){
   cube[i] =Object.create(cu0);
    x = $("i").eq(i).attr("x"); cube[i].x=+x; 
    y = $("i").eq(i).attr("y"); cube[i].y=+y; 
    z = $("i").eq(i).attr("z"); cube[i].z=+z; 
    c = $("i").eq(i).attr("co"); cube[i].color=+c; 
    g = $("i").eq(i).attr("edge"); cube[i].edge=+g; 
    }
  return cube;
}

function ncell (cu) {
 var x = cu.x;
 var y = cu.y;
 var z = cu.z;
 var g = cu.edge; 
 var nce;
    if (y>0.9 || x>0.9 || z>0.9 || x<-0.9 || y<-0.9 || z<-0.9 ) nce=5; else
    if ((g==0||g==2) && x>0 && x==-z) nce=9; else
  if ((g==0||g==2) && x<0 && x==z) nce=7; else
  if ((g==0||g==2) && x<0 && x==-z) nce=1; else
  if ((g==0||g==2) && x>0 && x==z) nce=3; else  
    if ((g==0||g==2) && x==0.5) nce=6; else
  if ((g==0||g==2) && x==-0.5) nce=4; else  
  if ((g==0||g==2) && z==0.5) nce=2; else
  if ((g==0||g==2) && z==-0.5) nce=8;
    if ((g==1||g==3) && y>0 && y==-z) nce=7; else
  if ((g==1||g==3) && y<0 && y==z) nce=9; else
  if ((g==1||g==3) && y<0 && y==-z) nce=3; else
  if ((g==1||g==3) && y>0 && y==z) nce=1; else  
    if ((g==1||g==3) && y==0.5) nce=4; else
  if ((g==1||g==3) && y==-0.5) nce=6; else  
  if ((g==1||g==3) && z==0.5) nce=2; else
  if ((g==1||g==3) && z==-0.5) nce=8;
    if ((g==4||g==5) && x>0 && x==-y) nce=3; else
  if ((g==4||g==5) && x<0 && x==y) nce=1; else
  if ((g==4||g==5) && x<0 && x==-y) nce=7; else
  if ((g==4||g==5) && x>0 && x==y) nce=9; else  
    if ((g==4||g==5) && x==0.5) nce=6; else
  if ((g==4||g==5) && x==-0.5) nce=4; else  
  if ((g==4||g==5) && y==0.5) nce=8; else
  if ((g==4||g==5) && y==-0.5) nce=2;
  
  return nce;
};



function draw_cube(cube){
  
  var color=[];
color [0]='#F44336';//red || orange
color [1]='#9C27B0';//lilac || violet 
color [2]='#4CFF50';//green
color [3]='#0936F2';//blue
color [4]='#FFEB3B';//yellow
color [5]='maroon';//maroon || dark
 for (var k=0; k<54; k++){
 
$('i').eq(k).attr("co",cube[k].color).attr("x",cube[k].x).attr("y",cube[k].y).attr("z",cube[k].z).attr("edge",cube[k].edge);
  //$(".edge").eq(cube[k].edge).find("i").eq(ncell(cube[k])-1).css("background-color", color[cube[k].color]);

$(".edge").eq(cube[k].edge).find("i").eq(ncell(cube[k])-1).animate({ backgroundColor: color[cube[k].color]}, 150);
//document.write("<b> k="+k+" koords: x="+cube[k].x+" y="+cube[k].y+" z="+cube[k].z+" edge="+cube[k].edge+" COL="+cube[k].color+" nc="+ncell(cube[k])+"</b><br>");
   
  //$(".edge").eq(cube[i].edge-1).find("i").eq(nce(cube[i]-1)).addClass(color_class[cube[i].color-1]);
  // !!!!!!!!!!!!!!!!!!!!! ОШИБКА В ВЫРАЖЕНИИ ВЫШЕ. ПРОВЕРИТЬ ЗНАЧЕНИЯ ЕГО ПАРАМЕТРОВ.
  }; 
 return cube; 
}

function randcolors(ran, cube){
      var n1,n2,n3;
   
  for (var i=0; i<ran; i++){//alert ('44444444 '+i); 
  n1=Math.floor(Math.random()*3)+1; if (n1==4) n1=1;
  n2=Math.floor(Math.random()*3)+1; if (n2==4) n2=1;
  n3=Math.floor(Math.random()*3)+1; if (n3==4) n3=1;
  //alert("randcolors: ran="+ran+" n1="+n1+" n2="+n2+" n3="+n3+" i="+i);
    // alert ('44444444'); 
  cube=move_segment(n1,n2,n3,cube);  
  }
  draw_cube(cube);

  $('.edge-1,.edge-4,.edge-5').fadeTo(0,0.5).fadeTo(2000,0.8).fadeTo(3000,1.0); //(плавное появление верзних граней куба)
  
return cube;
};

function is_cube_ready(cube){
  var result=true; 
  var c = [];
  Htag = document.getElementsByTagName("h1");  
  
  for (var i=8; i<54; i=i+9){
  c[cube[i].edge]=cube[i].color;
  }
  
  for (var i=0; i<54; i++){
  if (c[cube[i].edge] != cube[i].color) {result=false; break;}
  }
 
  if (result) {Htag[0].innerHTML="Поздравляю, кубик успешно собран!!!";
Htag[0].style.color="yellow";
Htag[0].style.fontSize = "25px";}
  
 }
  
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


 
  
  
// Проверка ф-и вращения.
//for (i=0; i<12; i++){
//cu1 = rot(cu8,30*i,3); 
//alert("a="+i*30+" koords: x="+cu1.x+" y="+cu1.y+" z="+cu1.z+" edge="+cu1.edge); 



//var n1=Math.floor(Math.random()*3); alert(n1);
  
// alert (cube[1].y);  
//for (i=0; i<54; i++){
//document.write("<b> i="+i+" koords: x="+cube[i].x+" y="+cube[i].y+" z="+cube[i].z+" edge="+cube[i].edge+" COL="+cube[i].color+" nc="+ncell(cube[i])+"</b><br>"); 
//}; 



