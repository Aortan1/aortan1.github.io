
import { Component, Input, EventEmitter, Output, ViewChild, OnInit, OnChanges  } from '@angular/core';
import { Folder } from '../shared/folder';
import { AppComponent } from '../app.component';
import { ListOfFoldersService } from '../shared/listoffolders.service';


@Component({
  moduleId: module.id,
  selector: 'folders',
  templateUrl: 'folders.component.html',
  styleUrls: ['folders.component.css']//,

})

//Вью компонента представляет собой список элементов(папок и фалов изобр.), имеющих общего родителя с ай-ди, равным parent 

export class FoldersComponent implements OnInit, OnChanges {

  lof_child : Folder[];
  @Input() parent: string; // в компоненте FoldersComponent parent - это id списка, который представляет вьюшку этого компонента. По смыслу - это id папки РОДИТЕЛЯ папок и файлов текущего списка, этот параметр приходит из параметра folder.id родителького компонента folders.component либо app.component
  @Output() select = new EventEmitter<string>(); //  в select - ЭКЗЕМПЛЯР ИВЕНТЭМИТТЕРА
  @Output() created = new EventEmitter<string>();
  @Output() deleted = new EventEmitter<string>();
  @Output() renamed = new EventEmitter<string>();
  show_rename: boolean = false;


 
  constructor(public listService:ListOfFoldersService){

  }

  ngOnInit(){
    this.lof_child = this.listService.getList();
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
    x.childNodes[1].childNodes[1].classList.add('js-show_rename');
    x.childNodes[1].childNodes[1].focus();

  }

  onBlur(){ // в случае убора фокуса с инпута до ввода - убираем класс его видимости
        var RenameInput = document.getElementsByClassName("js-show_rename")[0];
        if(RenameInput) RenameInput.classList.remove("js-show_rename"); //удаление display:block с инпута в случае убора фокуса с него.
  }

  onRenameEmit(){
    this.renamed.emit()
  }

  renameFile(new_name, image) { // ф-я переименования каталогов и файлов изображений
     alert(new_name);
     //var new_name = form.new_name.value; alert(new_name);
     if (this.listService.isNameInFolder(new_name, this.parent)) {alert("Такое имя в каталоге уже существует.")}; //form.rename.value=image.name; return false;} else alert('Имени нет.');
     this.lof_child[this.listService.getIndex(image.id)].name = new_name;

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

    if (!this.listService.sel_image || this.listService.sel_image.id != id){  // если єто изображение уже выделено, не выделять  
      this.listService.sel_file=this.listService.getFolder(id);
      this.select.emit(id);
      }       
  }


  // onKeyUpDown(id){ // Ф-я рабоотает НЕПРАВИЛЬНО. Должна по нажатию ArrowUp и ArrowDown пролистывать файлы текущей папки В ОКНЕ ДЕРЕВА 
  //   this.listService.sel_folder=this.listService.getFolder(id);
  //     //alert(this.listService.sel_file.id);
  //     this.listService.add_class_selected_in_sub(id);
  //     this.select.emit(id);

  // }


};
