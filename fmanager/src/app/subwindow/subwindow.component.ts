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
	//@Input() listService:ListOfFoldersService;
	lof: Folder[];
	@Input() sel_folder;
	//@Input() big_or_small: boolean;
	@Output() select = new EventEmitter<string>();
	@Output() double_click = new EventEmitter<string>();
	@Output() button_up_click = new EventEmitter<string>();


	onSelectInSub(id){
    	this.listService.add_class_selected_in_sub(id);
    	this.select.emit(id);
   }

   	onDoubleClickInSub(id){
    	this.double_click.emit(id);
   }

    onClickButtonUp(id){
    	this.button_up_click.emit(id);
   }


	constructor(public listService:ListOfFoldersService){

	}

	ngOnInit(){
		//this.listService.definition_img_sizes();
	  	this.lof = this.listService.getList();
	  	this.sel_folder = this.listService.sel_folder;//getSelFolder();
	  	//this.big_or_small = this.listService.big_or_small;

	}


//     definition_img_sizes(){ // определение размеров картинок и фактора big_or_small превышения размеров картинки над размером дива #viewImg левого окна 
//         let ViewImgWidth = document.getElementById("viewImg").clientWidth;
//         //let big_or_small:boolean = false;
//         this.list_of_folders.forEach(function(item, i, arr) { 
//             if (item.type_of_file=='img') {        
//             var img = new Image();//document.createElement('img');
//             img.src=item.path+item.name;
//             img.alt='';
//             //setInterval(function(){
//             img.addEventListener('load', ()=> {    
//                 item.img_width=img.width; item.img_height=img.height;
//                 //alert(this.img_width);
//             });    
//             //    }, 500);
//             if(ViewImgWidth) item.big_or_small = (item.img_width>ViewImgWidth) ? true:false;
//         }
//         });
// }


}
