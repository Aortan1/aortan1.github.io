
import { Component, Input, EventEmitter, Output, ViewChild, OnInit, OnChanges  } from '@angular/core';
//import { list_of_folders} from '../shared/data';
import { Folder } from '../shared/folder';
import { AppComponent } from '../app.component';
//import { list_of_folders0, path1 } from '../shared/data';

//import * as $ from 'jquery';
//declare var $:JQueryStatic;

//import {ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ListOfFoldersService } from '../shared/listoffolders.service';


@Component({
  moduleId: module.id,
  selector: 'folders',
  templateUrl: 'folders.component.html',
  styleUrls: ['folders.component.css']//,

})



export class FoldersComponent implements OnInit, OnChanges {

  lof_child : Folder[];
  @Input() parent: string; // в компоненте FoldersComponent parent - это и есть id папки компнента, в ней формируется список вложеных папок через ngFor
  @Output() select = new EventEmitter<string>(); // ЗДЕСЬ в select - ЭКЗЕМПЛЯР ИВЕНТЭМИТТЕРА
  @Output() created = new EventEmitter<string>();
  @Output() deleted = new EventEmitter<string>();
  @Output() renamed = new EventEmitter<string>();
  show_rename: boolean = false;


 
  constructor(public listService:ListOfFoldersService){

  }

  ngOnInit(){
      this.lof_child = this.listService.getList();
      //this.sel_folder = this.listService.getSelFolder();
      //this.big_or_small = this.listService.big_or_small;
  }

  ngOnChanges(){
    this.lof_child = this.listService.getList();

  }





  onCreateEmit(){ //?передача события создания папки вверх по дереву папок-компонентов
    this.created.emit();
  }
  onDeleteEmit(){ //?передача события УДАДЕНИЯ папки вверх по дереву папок-компонентов
    this.deleted.emit();
  }

  onNameDoubleClick(x){
    this.show_rename = !this.show_rename;
    //alert(x.childNodes[1].childNodes[1].nodeName);
    x.childNodes[1].childNodes[1].classList.add('show_rename');
    x.childNodes[1].childNodes[1].focus();

  }

  onRenameEmit(){
    this.renamed.emit()
  }

  renameFile(new_name, image) { // ф-я переименования каталогов и файлов изображений
     alert(new_name);
     //var new_name = form.new_name.value; alert(new_name);
     if (this.listService.isNameInFolder(new_name, this.parent)) {alert("Такое имя в каталоге уже существует.")}; //form.rename.value=image.name; return false;} else alert('Имени нет.');
     this.lof_child[this.listService.getIndex(image.id)].name = new_name;




    //  var name=$(form).closest(".sel").attr("data-name");
    //  var parent=$(form).closest(".sel").attr("data-parent");

    //  if (checking(new_name, parent)) {alert ("Такое имя в каталоге уже существует."); form.rename.value=name; return false;}

    //  $("[data-name='"+name+"']>details.dir>.in").filter("[data-parent='"+parent+"']>details.dir>.in").html(new_name).focus().closest(".sel").attr("data-name",new_name);
    //  $("[data-name='"+name+"']>.in").filter("[data-parent='"+parent+"']>.in").html(new_name).focus().closest(".sel").attr("data-name",new_name);
    //  $("#subw_folder_name").html(new_name);
    //     function rename_names(d_name) {
    //             name_is_already_exist=false;
    //             list_of_folders.forEach(function(item, i, arr) { // проверка существования имени New folder
    //             //if (item.parent_id==parent && item.name==d_name) item.name=new_name; 
    //             if (item.parent_id==parent && item.name==d_name) item.name=new_name;
    //             });
    //             //return false;
    //         };
    //     rename_names(name);

    // localStorage.setItem("list_of_folders",JSON.stringify(list_of_folders));
    // return false;
  } 


  create(name:string, parent:string) { // ф-я создания новой папки и добавления в массив и в DOM-дерево, в папке-источнике события
    this.listService.createDir(name, parent);
    this.onCreateEmit();
  }

  delete(id:string):void {   // ф-я удаления директорий и файлов из массива и DOM-дерева
    this.listService.deleteDir(id); 
    this.onDeleteEmit();
  }

  rename(new_name:string, obj:Folder):void {   // ф-я переименования директорий и файлов 
        this.listService.renameFile(new_name, obj); 
        this.onRenameEmit();
        this.lof_child = this.listService.getList();
  }

  onSelectEmit(id){
    //console.log("onSelectEmit("+id+");")
    //if(this.listService.sel_image) alert(this.listService.sel_image.id+" "+id);


    if (!this.listService.sel_image || this.listService.sel_image.id != id)   
      this.select.emit(id); // если єто изображение уже выделено, не выделять       
  }



};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




// interface Child {
//    name: string;
//    //age: number;
//    get_b?():void;
// }

// class Parent{
//   chidrenCount: number = 2;

// }
// // class Type1{
// //   x: number = 2;
// // }


// class Some extends Parent { //implements Child  

//   static a: number = 16;
//   static pi: number = 3.1415926535;
//   private b: number = 112;
//   private address: string;
//   public name: string;
//   static a_square():number {return this.a*this.a};
//   static square(r:number):number {return r+r*this.pi;};

//   get_b():void{console.log("Some.b = "+this.b);}
//   print():void{
//     console.log(this.b+"/"+this.address+"/"+this.name+"/"+this.chidrenCount);
//   }

//   doIt <T> (what: T, howmanytimes: number):T{ //функция дженерик - можно передавать параметр what нескольких типов.
//     let output: T;
//     return what;
//   }
//   doIttwice <T extends Parent> (what: T, howmanytimes: number):T{ //функция дженерик - можно передавать параметр what нескольких типов.
//     let output: T;
//     return what;
//   }

//   //static a_square : number = () => this.a*this.a;

//   constructor (address:string){
//     super(); //  ВЫЗОВ КОНСТРУКТОРА РОДИТЕЛЬСКОГО КЛАССА
//     this.address=address; 
//     console.log("Some.address = "+this.address); 
//   }





// }

// console.log(Some.square(10));
// var Some1:Some = new Some("Zp"); 
// Some1.get_b(); 
// Some1.print();
// Some1.doIt("somestring",2);

// var Some2:Some = new Some("Kv");
// Some1.doIttwice(Some2, 3);












//console.log('a*a = '+ FoldersComponent.a_square());
//Some.a_square

// Переменная var - работает за пределами блока, где объявлена.
// Переменная let - работает только в пределах текущего блока.


 
 