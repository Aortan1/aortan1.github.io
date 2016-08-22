



$(document).ready (function(){ 
var this1,this2;  
var difficulty_level=400; // уровень сложности (количество движений размешивания)
//3-5 - ЛЁГКИЙ,
//6-9 - СРЕДНИЙ,
//10 и > - СЛОЖНЫЙ.

	 $('a.contact-me').hover(function fadeedge0(){
  
    $('h1').fadeTo(300,0.1); 
  });
  
  
  	$('a.contact-me').click(function ffade(){

	  $('img.img-me').fadeTo(1000,0.0).fadeTo(1000,0.1).fadeTo(1000,1.0);

	});


    $('a.to-top').click(function(){

      $("html, body").animate({scrollTop: 0}, 3000);
      $('section.me').fadeTo(1000,0.5).fadeTo(1000,1.0).fadeTo(1000,0.5).fadeTo(3000,1.0); 
   
   });

 
  
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









