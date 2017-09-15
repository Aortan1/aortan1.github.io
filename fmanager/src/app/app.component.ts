import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FoldersComponent } from './folders/folders.component';
import { ListOfFoldersService } from './shared/listoffolders.service';
import { AuthService } from './login/auth.service';


import { Folder } from './shared/folder';

import {Input, ViewChild } from '@angular/core';//.?.

import { Router } from '@angular/router';
//import { AppRoutingModule} from './app-routing/app-routing.module';

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

  	greeting: String;



  constructor(public listService:ListOfFoldersService, public authService:AuthService,  private router: Router){

  	//this.sel_folder=this.listService.sel_folder;
    //this.lof = list.getList();//ненормальное использование сервиса("тяжелые"операции не рекомендуется помещать в конструктор)
  }


  ngOnInit(){
    this.authService.getLogin(); 
    if (this.authService.isLoggedIn()) {this.router.navigate(['/system']); this.userEnter();}
      else this.router.navigate(['/login']);; 
   
    this.lof = this.listService.getList();
    this.sel_folder=this.listService.sel_folder;
  }

  userEnter(){
    console.log("ENTER.");
  	this.greeting = "Hello, "+this.authService.current_login+".";
  	//document.getElementsByTagName("app-login")[0].classList.add("login-display-none");
    //this.listService.writeSessionLoginToLoc();
  }


  userExit(){
    console.log("EXIT.");
  	document.getElementsByTagName("app-login")[0].classList.remove("login-display-none");
  	//this.authService.current_login = ''; 
    this.greeting='';
  	this.authService.setLogin('');
    this.router.navigate(['/login']);


  }


  ngAfterViewInit(){
  	this.listService.makeSelection(this.sel_folder.id);
  }


  toggle_show_popup(id){
  	this.show_popup = !this.show_popup;
  	this.sel_image = this.listService.getFolder(id);
  }


  onSelectedInApp(id){ // выделение папок по клику В ПРАВОМ окне subwindow.
    let parent = this.listService.getParent(id);
    if(!parent) parent = id;
    this.listService.remove_class_selected();
  	this.listService.add_class_active(parent);  //выделение исходной папки.
    this.listService.close_tree();
  	this.listService.open_tree_till(parent); //раскрытие дерева до неё.
    this.listService.add_class_selected_in_sub(id);
  	
    //this.onSelected(id);

  }


  goToFolder(id){ //переход к папке с id и выделение (с раскрытием в левом окне) по клику на папке/файлу дерева и по кнопке UP


      // this.listService.close_tree(id);
      // this.listService.open_tree_till(id);

      this.listService.remove_class_active();
      this.listService.add_class_selected(id);
	  	if(this.listService.getFolder(id).type_of_file=="dir") 
        this.sel_folder = this.listService.getFolder(id); else 
    			{
    			this.sel_image = this.listService.getFolder(id);
    			this.listService.sel_image = this.sel_image;
    	  	this.sel_folder = this.listService.getFolder(this.listService.getParent(id));
    			}
	  	this.listService.sel_folder = this.sel_folder;
	  	this.listService.writeSelectionToLoc();

      //if(this.listService.getFolder(id).type_of_file=="img") this.toggle_show_popup(id); 


  }



  goInside(id){
  	this.goToFolder(id); //переход к папке с id   	
  	if(this.listService.getFolder(id).type_of_file=="img") this.toggle_show_popup(id);
  }


  onClickButtonUpInWin(id){ // переход в папку-родитель
   	let parent = this.listService.getParent(id);
    console.log(`!!parent = ${!!parent}. From ${id} UP to ${parent}`); 
   	if(!!parent) 	{
   		this.goToFolder(parent);
      this.listService.remove_class_selected();
      this.listService.add_class_active(id); //(id)


   		//this.listService.add_class_selected(parent);  //выделение исходной папки.
      //this.listService.close_tree();

  		//this.listService.open_tree_till(parent); //раскрытие дерева до неё.
      this.listService.sel_folder=this.listService.getFolder(parent); //присваиваем sel_folder родителя текущего sel_folder
      //let first = this.listService.findFirstId(); //выделение первого файла в папке id 
      //if (first) this.onSelectedInWin(first);
   	}
  }


}

