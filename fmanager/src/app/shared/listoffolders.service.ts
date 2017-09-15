//!!!!!!!!!!! СКОПИРУЙ ФАЙЛЫ environments!!!!!!!!!!!!


import { Folder } from './folder';
import { User } from '../login/user';

import {Injectable} from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService } from '../login/auth.service';

//npm install ng2-scroll-to --save

//import { environment } from "../../environments/environment"


@Injectable()  // рекомендуемый декоратор перед классом любого сервиса
export class ListOfFoldersService{

     //private apiUrl = 'api/users';
     //private apiUrl = '/users';
     private host: string;
     path1: string = "http://aortan1.github.io/webcoder/tem/"; // путь к файлам изображений
     list_of_folders: Folder[] = [];
     sel_folder: Folder; 
     getSelFolder(){return this.sel_folder;}
     sel_image: Folder;
     sel_file: Folder;
     //session_login: String;

     constructor( private http: Http, private authService: AuthService){

         this.host = 'api';//environment.host;
         this.readData(); // <- вариант чтения из локалки при перегрузке страницы
         //this.setInitialData(); // <- вариант возвр-я к исх.данным при перегрузке страницы

     }

    

    sortObjectsByProperty(arr, property):void{
        arr.sort((a,b) => {
                    if (a[property] < b[property]) return -1;
                    if (a[property] > b[property]) return 1;
                     return 0;});
    }      



    // onEnter(){
    // }


    findNextId(id=this.sel_file.id){ // найти id след.файла той же папке
        //alert(this.sel_file.id);
        let index = this.getIndex(id); let i = index;
        let parent = this.getParent(id); 
        //alert(i);      
        do {i++; if(i>this.list_of_folders.length) i=0;}
        while (this.list_of_folders[i] && (this.list_of_folders[i].parent_id!=parent));
        //alert(i);
        if(this.list_of_folders[i]) return this.list_of_folders[i].id; else return id;
    }


    findPreviousId(id=this.sel_file.id){ // найти id предыдущ.файла той же папке
        //alert(this.sel_file.id);
        let index = this.getIndex(id); let i = index;
        let parent = this.getParent(id); 
        //alert(i);      
        do {i--; if(i<0) i=this.list_of_folders.length;}
        while (this.list_of_folders[i] && this.list_of_folders[i].parent_id!=parent);
        //alert(i);
        if(this.list_of_folders[i]) return this.list_of_folders[i].id; else return id;
    }


    findFirstId(id=this.sel_file.id){ // найти id первого файла в родителе id
    	//let obj=this.sel_file;
    	let result =  this.list_of_folders.find(obj => obj.parent_id==id);//||this.sel_file;
    	if (result) return result.id; //else return id;

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

  //   readSessionLoginFromLoc(){
  //       if(localStorage.getItem("session_login")) 
  //           {                
  //               this.session_login = JSON.parse(localStorage.getItem("session_login"));
  //               console.info("Чтение ЛОГИНА из локалки. "+this.session_login);
  //           }
  //   }


  //   getUsersDataWithPromise(): Promise<User[]> { // получение массива зарегистрированных пользователей с "сервера"
  //      return this.http.get(this.host+this.apiUrl)
  //                  .toPromise()
  //                  .then(res => res.json().data as User[])
  //                  .catch(this.handleErrorPromise); }


  //   getUsersDataWithObservable(): Observable<User[]> { // получение массива зарегистрированных пользователей с "сервера"
  //      return this.http.get(this.host+this.apiUrl)
  //                  .map(res => res.json().data as User[])
  //                  .catch(this.handleErrorObservable); }

  //   // this.http.get - отправка get запроса по указанному адресу. Метод возвращает
  //   // объест Observable из библиотеки RxJS. С помощью метода subscribe подписываемся на событие.
  //   // Событие произойдёт после получения ответа от сервера.



  // // При использовании Promise в onSubmit() используем структуру
  // // this.getUsersDataWithPromise().then().then()
  // // При замене её на применение Observable заменяем эту структуру на
  // // getUsersDataWithObservable().map.subscribe(), не меняя параметров внутри,
  // // т.е. then и then меняется на map и subscribe, либо на
  // //  map map и subscribe() (с пустым subscribe в конце).      



  //   private handleErrorObservable(error:any){
  //       console.error('Произошла ошибка', error);
  //       return Observable.throw(error.message || error);
  //   }


  //   private handleErrorPromise(error: any){ // метод для вывода ошибки сервера
  //       console.log('Произошла ошибка сервера.', error );
  //       return Promise.reject(error.message || error);
  //  }


    readData(){
        this.authService.getLogin();
        this.readListFromLoc();
        this.readSelectionFromLoc();
        this.sortObjectsByProperty(this.list_of_folders, "type_of_file");
    }

    writeListToLoc(){// сохранение массива дерева в лок.хранилище
        console.info("Запись list_of_folders в локалку.");        
        localStorage.setItem("list_of_folders",JSON.stringify(this.list_of_folders));
    }

    writeSelectionToLoc(){
        console.info("Запись sel_folder в локалку.");        
        localStorage.setItem("sel_folder",JSON.stringify(this.sel_folder));        
    }

    // writeSessionLoginToLoc(){
    //     console.info("Запись ЛОГИНА в локалку."); 
    //     localStorage.setItem("session_login",JSON.stringify(this.session_login));        
    // }

    writeData(){// сохранение массива дерева и выделенной папки в лок.хранилище
        this.authService.setLogin();
        this.writeListToLoc();
        this.writeSelectionToLoc();        
    } 

    setInitialData(){
         console.info("Инициализация.");
         this.list_of_folders = [];
         this.list_of_folders.push(new Folder("SYSTEM", "", 'dir0' ));
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

   close_tree(except_id=""){ // закрывает все папки дерева левого окна, кроме папки except_id
   	//document.getElementById(except_id).setAttribute("open", ""); 
   	this.list_of_folders.forEach(function(item, i, arr) { 
             if (item.type_of_file=="dir" && item.id!=except_id) document.getElementById(item.id).removeAttribute("open");
    });

   }

    open_tree_till(id : string, selectedPosX=0, selectedPosY = 0):boolean{ // вью-ф-я, раскрывающая дерево каталогов до файла/папки id и его содержимого, например при поиске
            var El = document.getElementById(id); // здесь тег details, представляющий открываемую папку 
            var parent = this.getParent(id);
            console.log("pareint ID = "+parent+", open = "+El.getAttribute("open"));
            El.setAttribute("open", "true"); 

              selectedPosX += El.offsetLeft;
              selectedPosY += El.offsetTop;
              
              //alert(selectedPosX+" "+selectedPosY);
              //El.scrollIntoView(false);

            if (parent) {
                var Parent = document.getElementById("#"+parent);
                this.open_tree_till(parent,selectedPosX,selectedPosY);
            } else return false;
    }


    // scrollToElement(id) {
    //     alert('scroll');
    //     var theElement = document.getElementById(id).offsetParent;
    //     var selectedPosX = 0;
    //     var selectedPosY = 0;
  
    //    while (theElement != null) {
    //     selectedPosX += theElement.clientLeft;
    //     selectedPosY += theElement.clientTop;
    //    //theElement = theElement.offsetParent;
    //    }
                                      
    // window.scrollTo(selectedPosX,selectedPosY);
    // }

     remove_class_selected():void{
     	//Убираем выделение с выделенной ранее папки
        var Selected  = document.getElementsByClassName("selected")[0];
        if(Selected) Selected.classList.remove("selected");
     }

     remove_class_active():void{
     	//Убираем выделение с выделенной ранее папки
        var ActiveFolder  = document.getElementsByClassName("active")[0];
        if(ActiveFolder) ActiveFolder.classList.remove("active");
     }

     add_class_selected(id : string):void {// вью-ф-я выделения файла или папки по её id (в дереве)
        //Убираем выделение с выделенной ранее папки
        this.remove_class_selected(); 
        //Выделяем кликнутую папку
        var Selected = document.getElementById(id);
        Selected.classList.add("selected");             
    }

      add_class_active(id : string):void {// вью-ф-я выделения активной(содержащей выделенную) папки в деревепо её id (в дереве)    
        //Убираем выделение с выделенной ранее папки
		this.remove_class_active();
        //Выделяем активную папку
        var ActiveFolder = document.getElementById(id);
        ActiveFolder.classList.add("active");
   }


    add_class_selected_in_sub(id : string):void { // вью-ф-я выделения файла или папки по её id в левом окне

			//Удаляем класс selected-in-sub с предыдущей папки
        	var SelFolder  = document.getElementsByClassName("selected-in-sub")[0];
        	if(SelFolder) SelFolder.classList.remove("selected-in-sub");

        	//Выделяем кликнутую папку (после загрузки списка папок в элементе)
            var process = new Promise((resolve) =>
            {
            	setTimeout(() => {
					SelFolder = document.getElementById('w'+id);
					resolve()
            	}, 0)
            	
            }).then((responce) => {
            	//console.log(responce);
            	if(SelFolder) SelFolder.classList.add("selected-in-sub");
            		//console.log('Then');
        	}); 
     
     		// Функция .then срабатвывает только после вызова ф-и resolve()
     		// В responce переходит параметр ф-и resolve() 


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
        console.log(this.list_of_folders);
        
        this.sortObjectsByProperty(this.list_of_folders, "name");
        this.writeListToLoc();
        this.makeSelection(folder.id);   
 
        return false;
  }

    deleteDir(id: string){
    	   if (!this.authService.isAdmin()) {alert("Удалять папки и файлы может только администратор."); return;}	
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
         RenameInputEl.classList.remove('js-show_rename'); //убираем display:block с инпута после ввода
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

