import { Folder } from './folder';

import {Injectable} from '@angular/core';


@Injectable()  // рекомендуемый декоратор перед классом любого сервиса
export class ListOfFoldersService{

     path1: string = "http://aortan1.github.io/webcoder/tem/"; // путь к файлам изображений
     list_of_folders:Folder[] = [];

     //selected_id: string;
     sel_folder:Folder; getSelFolder(){return this.sel_folder;}
     sel_image:Folder;
     //big_or_small: boolean;
     //static sel : string = "dir0";
     constructor( ){
         this.readData(); // <- вариант чтения из локалки при перегрузке страницы
         //this.setInitialData(); // <- вариант возвр-я к исх.данным при перегрузке страницы

     }

    readListFromLoc(){// чтение массива дерева в лок.хранилище
        if(localStorage.getItem("list_of_folders")) 
            {
                console.info("Чтение list_of_folders из локалки.")
                this.list_of_folders = JSON.parse(localStorage.getItem("list_of_folders")); 
            }

        else this.setInitialData();
    
        this.definition_img_sizes();

    }

    readSelectionFromLoc(){
        if(localStorage.getItem("sel_folder")) 
            {
                console.info("Чтение sel_folder из локалки.")
                this.sel_folder = JSON.parse(localStorage.getItem("sel_folder"));
            }
    }

    readData(){
        this.readListFromLoc();
        this.readSelectionFromLoc();
    }

    writeListToLoc(){// сохранение массива дерева в лок.хранилище
        console.info("Запись list_of_folders в локалку.");        
        localStorage.setItem("list_of_folders",JSON.stringify(this.list_of_folders));
    }

    writeSelectionToLoc(){
        console.info("Запись sel_folder в локалку.");        
        localStorage.setItem("sel_folder",JSON.stringify(this.sel_folder));        
    }


    writeData(){// сохранение массива дерева и выделенной папки в лок.хранилище
        this.writeListToLoc();
        this.writeSelectionToLoc();        
    } 

    setInitialData(){
         console.info("Инициализация.");
         this.list_of_folders = [];
         this.list_of_folders.push(new Folder("ROOT FOLDER", "", 'dir0' ));
         this.list_of_folders.push(new Folder( "Видео", "dir0", 'dirx1'));
         this.list_of_folders.push(new Folder( "Музыка", "dir0", 'dirx2'));
         this.list_of_folders.push(new Folder( "Документы", "dir0", 'dirx3'));
         this.list_of_folders.push(new Folder( "Изображения", "dir0", 'dirx4'));
         this.list_of_folders.push(new Folder( "Фильмы", "dirx1", 'dirx5'));
         this.list_of_folders.push(new Folder( "Клипы", "dirx1", 'dirx6'));
         this.list_of_folders.push(new Folder( "Girls", "dirx4", 'dirx7'));
         this.list_of_folders.push(new Folder( "Cars", "dirx4", 'dirx8'));
         this.list_of_folders.push(new Folder( "s-photo1.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "s-photo2.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "s-photo3.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "s-photo4.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "s-photo5.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "s-photo6.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "s-photo7.jpg", "dirx7", undefined, "img"));
         this.list_of_folders.push(new Folder( "cars01.jpg", "dirx8", undefined, "img"));
         this.list_of_folders.push(new Folder( "cars02.jpg", "dirx8", undefined, "img"));
         this.list_of_folders.push(new Folder( "cars03.jpg", "dirx8", undefined, "img"));
         this.list_of_folders.push(new Folder( "cars04.jpg", "dirx8", undefined, "img"));
         this.list_of_folders.push(new Folder( "cars05.jpg", "dirx8", undefined, "img"));

         console.log(this.list_of_folders);

         this.sel_folder = this.list_of_folders[0];

         this.definition_img_sizes();
    } 



    getList(){        
        return this.list_of_folders;
        // return Promise.resolve(list_of_folders0); //эмуляция работы сервера
     }

    getIndex(id: string) { //определение индекса объекта в массиве по его св-ву id
         let index: number=-1;
         this.list_of_folders.forEach(function(item, i, arr) { 
             if (item.id==id) index = i;
         });
         return index;
    }

    getName(id: string) { //определение индекса объекта в массиве по его св-ву id
         let name: string;
         
         this.list_of_folders.forEach(function(item, i, arr) { 
             if (item.id==id) {name = item.name;}
         });
         if(!name) console.error("У файла "+id+" нет свойства name.");
         return name;
    }

    getTypeOfFile(id: string) { //определение типа файла ('dir' или 'img') по его св-ву id
         let type: string;
         this.list_of_folders.forEach(function(item, i, arr) { 
             if (item.id==id) type = item.type_of_file;
         });
         if(!type) console.error("У файла "+id+" нет типа."); else return type;
    }

    getPath(id: string) { //определение пути к объекту-картинке по его св-ву id
         let path: string="";
         
         this.list_of_folders.forEach(function(item, i, arr) { 
             if (item.id==id) {path = item.path;}
         });
         if(!path) console.error("У файла "+id+" нет свойства path.");
         return path;
    }
    getImgWidth(id: string) { //определение пути к объекту-картинке по его св-ву id
         let width: number = 0;
         
         this.list_of_folders.forEach(function(item, i, arr) { 
             if (item.type_of_file=="img" && item.id==id) {width = item.img_width;}
         });
         return width;
    }

    getParent(id: string){ // получение id родительской папки по id файла из массива lof_child
    let parent: string = '';
    this.list_of_folders.forEach(function(item, i, arr) {
       if (item.id == id) parent = item.parent_id;
    });

    return parent;
   }

    open_tree_till(id : string):boolean{ // вью-ф-я, раскрывающая дерево каталогов до файла/папки id и его содержимого, например при поиске
            var El = document.getElementById(id); // здесь тег details, представляющий открываемую папку 
            var parent = this.getParent(id);
            console.log("pareint ID = "+parent+", open = "+El.getAttribute("open"));
            El.setAttribute("open", "true");  
            if (parent) {
                var Parent = document.getElementById("#"+parent);
                this.open_tree_till(parent);
            } else return false;
    }


     add_class_selected(id : string):void {// вью-ф-я выделения файла или папки по её id (в дереве)
        console.log("add_class_selected ID = "+id);

        var RenameInput = document.getElementsByClassName("show_rename")[0];
        if(RenameInput) RenameInput.classList.remove("show_rename"); //удаление display:block с инпута в случае убора фокуса с него.

        //Убираем выделение с выделенной ранее папки
        var SelFolder  = document.getElementsByClassName("selected")[0];
        if(SelFolder) SelFolder.classList.remove("selected");  

        //Выделяем кликнутую папку
        SelFolder = document.getElementById(id);
        SelFolder.classList.add("selected");

             
       //console.log(" open = "+ SelFolder.getAttribute("open"));
   }


    add_class_selected_in_sub(id : string):void { // вью-ф-я выделения файла или папки по её id в левом окне

        //document.addEventListener('DOMContentLoaded', () => {

            var SelFolder  = document.getElementsByClassName("selected-in-window")[0];
            if(SelFolder) SelFolder.classList.remove("selected-in-window");  

            //Выделяем кликнутую папку
            SelFolder = document.getElementById('w'+id);
            if(SelFolder) SelFolder.classList.add("selected-in-window");
        // });




        
    }


    // getFolder(id):Folder {        
    //     var folder: Folder;
    //     this.list_of_folders.forEach(function(item, i, arr) {
    //       if (item.id == id) folder = item;
    //     });
    //     return folder; 
    // }

    getFolder(id):Folder { //ОБОШЁЛСЯ МЕТОДОМ FIND поиска по массиву !!! ОСТОРОЖНО, ES6        
       return this.list_of_folders.find(obj => obj.id==id ); 
    }



   goToFolder(id){ //переход к папке с id 
      console.log("goToFolder("+id+");");
      this.sel_folder = this.getFolder(id);      
      //this.writeData();
      this.writeSelectionToLoc();

   }

   makeSelection(id){ // ВЫДЕЛЕНИЕ ПАПКИ: запись новой выделенной папки, раскрытие дерева до неё и применение стилей к ней 
       this.goToFolder(id);    
       this.open_tree_till(id);
       this.add_class_selected(id);
   }


   seachFile(value : string):boolean{ // ф-я поиска файлов и папок по регулярному выражению
    var search_name = new RegExp(value, "i");
    var id;
    this.list_of_folders.forEach(function(item, i, arr) {
       if (search_name.test(item.name) && !id) id = item.id;
    }); 

    if (id) this.makeSelection(id);
    
    return false;

}


    reload(){
        window.location.reload();        
    }


    // isBigImage(id : string):boolean{
    //   let big_or_small = false;
    //   let ViewImg = document.getElementById("viewImg");

    //   if (ViewImg && this.sel_folder.type_of_file=="img") {
    //       let width = this.getImgWidth(id); 
    //       big_or_small = (width>ViewImg.clientWidth) ? true:false;
    //       //alert(big_or_small);
         
    //   }
    //   return big_or_small;  

    // }


    definition_img_sizes(){ // определение размеров картинок и фактора big_or_small превышения размеров картинки над размером дива #viewImg левого окна 
        let ViewImg = document.getElementById("viewImg");
        let clientWidth = (ViewImg) ? ViewImg.clientWidth:800; //если ViewImg, пусть его ширина = 1000 

        this.list_of_folders.forEach(function(item, i, arr) { 
            if (item.type_of_file=='img') {
            item.big_or_small = true;       
            var img = new Image();//document.createElement('img');
            img.src=(item.src_base64) ? item.src_base64:item.path;
            img.alt='';
            //setInterval(function(){
            img.addEventListener('load', () => {    
                item.img_width=img.width; item.img_height=img.height;
                item.big_or_small = (item.img_width>clientWidth) ? true:false; 
                //this.writeData();
                //alert(this.img_width);
            });    
            //    }, 500);
            
        }
        });
}



    // check(name:string, parent:string):boolean { // проверка существования папки с предложенным именем в текущем каталоге
    // var name_is_already_exist=false;
    // this.list_of_folders.forEach(function(item, i, arr) { 
    // if (item.parent_id==parent && item.name==name) name_is_already_exist=true;
    // });
    // return name_is_already_exist;
    // }

    isNameInFolder(name,parent){
        let isNameOfFile=false;
        this.list_of_folders.forEach(function(item, i, arr) {
               if ((item.name == name)&&(item.parent_id==parent)) isNameOfFile=true;
        });
        return isNameOfFile;
    }



    createDir(name:string, parent:string) { // ф-я создания новой папки и добавления в массив и в DOM-дерево 
      
        var p_name = "Новая папка";
        if (this.isNameInFolder(name, parent)) {alert ("Папка с таким именем уже существует."); return false;}

        if (name=="") {
            name = p_name;
            var is_name = this.isNameInFolder(name, parent);
            var n_new=2; //индекс 2 в имени "Новая папка(2)"
            while (is_name){
                name=p_name+"("+ n_new++ +")"; is_name=this.isNameInFolder(name, parent);
                }
        }

        var folder:Folder = new Folder(name, parent, undefined, "dir");
        this.list_of_folders.push(folder); // добавление новой папки в массив
           //alert(folder.id+"  "+folder.type_of_file+"  "+this.list_of_folders.length);
           //console.log(this.list_of_folders);
                   
        this.writeListToLoc();
        this.makeSelection(folder.id);   
 
        return false;
  }

    deleteDir(id: string){

           let parent = this.getParent(id);
           if(parent) this.makeSelection(parent);

           let index: number = this.getIndex(id);
           let type_rus = (this.getTypeOfFile(id)=="dir") ? "папку":"файл";
           //alert(type_rus);
           let doDelete = confirm ("Вы уверены, что хотите удалить "+ type_rus +" "+this.getName(id)+" ?"); 
           if(id=="dir0") {alert("Вы не можете удалить корневую папку."); return;}
           if ((index>=0)&&doDelete) this.list_of_folders.splice(index,1);
                //alert(id+" deleted. "+this.list_of_folders.length);
                console.log(this.list_of_folders);
           this.writeData();
       

    }

    renameFile(new_name: string, folder:Folder):boolean {
         var RenameInputEl=document.querySelector("input:focus");
         RenameInputEl.classList.remove('show_rename'); //убираем display:block с инпута
         //alert("new_name = "+new_name); 
         //alert(RenameInputEl.value); 
         if (folder.name==new_name) return false;
         if (new_name=='') {alert("Введите имя."); return false;}


         if (this.isNameInFolder(new_name, this.getParent(folder.id)))
          {
             alert("Такое имя в каталоге уже существует.");
             //RenameInputEl.value = folder.name;
             return false;
          }
         this.list_of_folders[this.getIndex(folder.id)].name = new_name;
         this.writeData();
         return false;

    }



}

