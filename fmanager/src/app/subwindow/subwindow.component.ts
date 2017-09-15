import { Component, OnInit, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import { Folder } from '../shared/folder';
import { ListOfFoldersService } from '../shared/listoffolders.service';

@Component({
  selector: 'subwindow',
  templateUrl: './subwindow.component.html',
  styleUrls: ['./subwindow.component.css']
})
export class SubwindowComponent implements OnInit {
	//ВЕЗДЕ, ГДЕ ИСПОЛЬЗУЕТСЯ СЕРВИС, ЕГО НАДО ОБЪЯВЛЯТЬ 1- В КОНСТУРТОРЕ И 2 - В МОДУЛЕ КОМПОНЕНТА в providers

	lof: Folder[];
	@Input() sel_folder;
	@Output() select = new EventEmitter<string>();
	@Output() double_click = new EventEmitter<string>();
	@Output() button_up_click = new EventEmitter<string>();


	onSelectInSub(id){// выделение папки/файла в правом окне Subwindow
	 if (!!this.listService.getParent(id)) { //корневую папку(папку без родителя) нельзя отобразить в правом окне	 		
		this.listService.sel_file=this.listService.getFolder(id);
    	this.listService.add_class_selected_in_sub(id);
    	this.select.emit(id);//alert(id);
     }
   }


   goInside(id){ // переход внутрь выделеннной папки(с выделением первого файла в ней) по кнопке Enter или просмотр выделенного файла 
    	this.double_click.emit(id);
    	let first = this.listService.findFirstId(); //выделение первого файла в папке id 
    	if (first) this.onSelectInSub(first);
   }


   onClickButtonUp(id){ //переход в папку на уровень выше по клавише ArrowUp либо по кнопке Up 
    	this.button_up_click.emit(id);
    	//let first = this.listService.findFirstId(this.listService.getParent(id)); //выделение первого файла в папке id 
    	this.onSelectInSub(id);


   }


	constructor(public listService:ListOfFoldersService){

	}

	ngOnInit(){

	  	this.lof = this.listService.getList();
	  	this.sel_folder = this.listService.sel_folder;//getSelFolder();
	  	//this.onSelectInSub("dir1");
	}


}
