import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FoldersComponent } from './folders/folders.component';
import { ListOfFoldersService } from './shared/listoffolders.service';

import { Folder } from './shared/folder';

import {Input, ViewChild } from '@angular/core';//.?.



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ListOfFoldersService]
  //,  divectives: [FoldersComponent]

})

	

export class AppComponent implements OnInit, AfterViewInit { 
  	public lof : Folder[];//public lof : Promise<Folder[]>;
  	public parent : string = "";
  	sel_folder: Folder;
  	sel_image: Folder;

  	show_popup: boolean = false;



  constructor(public listService:ListOfFoldersService){

  	//this.sel_folder=this.listService.sel_folder;
    //this.lof = list.getList();//ненормальное использование сервиса("тяжелые"операции не рекомендуется помещать в конструктор)
  }


  ngOnInit(){
    this.lof = this.listService.getList();
    this.sel_folder=this.listService.sel_folder;
    //console.log("app.component ngOnInit"); 
  }


  ngAfterViewInit(){
  	this.listService.makeSelection(this.sel_folder.id);


  }


  toggle_show_popup(id){
  	this.show_popup = !this.show_popup;
  	this.sel_image = this.listService.getFolder(id);
  }


  onSelectedInWin(id){ // выделение папок по клику в девом окне

  	this.listService.add_class_selected(id);  //выделение исходной папки.
  	this.listService.open_tree_till(id); //раскрытие дерева до неё.
  	//this.onSelected(id);

  }


  goToFolder(id){ //переход к папке с id (с раскрытием в левом окне) по клику на папке дерева или по кнопке UP
  		this.listService.add_class_selected(id);
	  	if(this.listService.getFolder(id).type_of_file=="dir") this.sel_folder = this.listService.getFolder(id); else 
			{
			this.sel_image = this.listService.getFolder(id);
			this.listService.sel_image = this.sel_image;
	  		this.sel_folder = this.listService.getFolder(this.listService.getParent(id));
			}
	  	this.listService.sel_folder = this.sel_folder;
	  	//this.listService.writeData();
	  	this.listService.writeSelectionToLoc();

	  	//this.listService.sel_folder = 	this.listService.getFolder(id);
	  	//this.big_or_small = 			this.listService.isBigImage(this.sel_folder.id);
	  	//this.listService.big_or_small =	this.listService.isBigImage(this.sel_folder.id);
  }

 


  onDoubleClickInWin(id){
  	this.goToFolder(id); //переход к папке с id 
  	
  	// if(this.sel_folder.type_of_file=='img' ) if (this.sel_folder.src_base64) window.open(this.sel_folder.src_base64);
  	//  else window.open(this.sel_folder.path);

  	if(this.listService.getFolder(id).type_of_file=="img") this.toggle_show_popup(id);
  	//if( this.listService.list_of_folders.find(x => x.id==id ).type_of_file == "img" ) this.toggle_show_popup(id); // 	ОБОШЁЛСЯ МЕТОДОМ FIND ВМЕСТО GETFOLDER() !!! ОСТОРОЖНО, ES6 


  }


  onClickButtonUpInWin(id){ // переход в папку-родитель
   	let parent = this.listService.getParent(id);
   	if(parent) 	{
   		this.goToFolder(parent);
   		this.listService.add_class_selected(parent);  //выделение исходной папки.
  		this.listService.open_tree_till(parent); //раскрытие дерева до неё.
   	}
  	//if(this.sel_folder.type_of_file=='img') window.open(this.sel_folder.path+this.sel_folder.name);
  }






  	// color = "red";
  	// age = 20;
  	// getName(){
  	// 	return "My name is "+this.name+"!";
  	// }
  	// fill_name(name){
  	// 	this.name = name;
  	// }
  	// onChange(value:string){
  	// 	this.name = value;
  	// 	console.log('$event.target.value = '+value);
  	// }


  	//public a: string = 'someprop';
  	// public xxx : string[] = xxx_massive;

  	// get_xxx(){console.log("AppComponent.xxx = "+this.xxx);}

}

//console.log("app.component.lof = "+this.lof);

// var AC = new AppComponent(); AC.get_xxx();








// export class MyList implements AfterContentInit {
//   @ContentChildren('list-item') items: QueryList<ElementRef>;
 
//   ngAfterContentInit() {
//      // do something with list items
//   }
// }