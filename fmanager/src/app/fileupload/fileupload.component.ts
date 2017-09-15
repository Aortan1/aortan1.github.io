import { Component, ElementRef, Input, ViewChild, OnInit} from '@angular/core';
import { Http } from '@angular/http';

import { ListOfFoldersService } from '../shared/listoffolders.service';
import { Folder } from '../shared/folder';



@Component({
  selector: 'app-file-upload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent implements OnInit {

	@Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;
    files:any;

    public lof : Folder[];
    @Input() sel_folder;


    constructor(public listService:ListOfFoldersService) {}

    addPhoto(event) { // ф-я добавления выбранных файлов изображений в массив lof
    	if (this.sel_folder.type_of_file == "img") return false; //запрет загрузки "в изображение"
	    let target = event.target || event.srcElement;
	    this.files = target.files;

	    if (this.files) {
	      let files :FileList = this.files;
	
	      const formData = new FormData();
	      for(let i = 0; i < files.length; i++){

	      	this.getBase64(this.lof, this.sel_folder.id, files[i]);

	        formData.append('photo', files[i]);
	        
	        } 
		}


	}


	getBase64(lof:Folder[], parent, file) { // ф-я читает файл изображения и добавляет в массив lof имя, родителя и url на изображение в формате base64
	   let reader = new FileReader();
	   reader.readAsDataURL(file);// метод readAsDataURL исп.для чтения содержимого Blob или File
	   // после применения reader.readAsDataURL(file) свойство reader.result будет содержать данные как URL, представляющий файл, кодированый в base64 строку

	   reader.onload = () => {

	   	let expansion = file.name.split(".").pop().toLowerCase(); // расширение файла
	   	 if (this.listService.isNameInFolder(file.name,parent)) {alert("Файл с именем "+file.name+" уже есть в папке "+this.sel_folder.name+"."); return false;}
	   	 if (["png","jpg","jpeg"].indexOf(expansion)==-1) {alert("Файл "+file.name+" не является изображением."); return false;}
	   	 if (file.size>3145728) {alert("Размер файла "+file.name+" превышает 3Мб."); return false;}


	     lof.push(new Folder(file.name, parent, undefined, 'img', reader.result)); // добавление нового файла в массив lof
	 	    this.listService.definition_img_sizes();
  	 		this.listService.writeData();
	   };

	   reader.onerror = function (error) {
	     console.log('Error: ', error);
	   };
	   
	}


	ngAfterViewInit(){
		
  	}




  ngOnInit() {

  	this.lof = this.listService.getList();
  	this.sel_folder=this.listService.sel_folder;

  }





}
