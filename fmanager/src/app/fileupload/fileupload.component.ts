import { Component, ElementRef, Input, ViewChild, OnInit} from '@angular/core';
import { Http } from '@angular/http';
	//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
// о FileUploader см. http://valor-software.com/ng2-file-upload/


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

 //    uploader: FileUploader = new FileUploader({}); //Empty options to avoid having a target URL
	// reader: FileReader = new FileReader();

    constructor(public listService:ListOfFoldersService) {}

    // upload() {
    //     let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    //     let fileCount: number = inputEl.files.length;
    //     let formData = new FormData();
    //     // FormData - Объект JavaScript для кодирования данных формы
    //     if (fileCount > 0) { // a file was selected
    //         for (let i = 0; i < fileCount; i++) {
    //             formData.append('file[]', inputEl.files.item(i));
    //         }
    //         this.http
    //             .post('http://your.upload.url', formData)
    //             // do whatever you do...
    //             // subscribe to observable to listen for response
    //    }
    // alert(fileCount);
    // }

    addPhoto(event) {
    	if (this.sel_folder.type_of_file == "img") return false; //запрет загрузки "в изображение"
	    let target = event.target || event.srcElement;
	    this.files = target.files;

	    if (this.files) {
	      let files :FileList = this.files;
	      //alert("files.length = "+files.length);
	      const formData = new FormData();
	      for(let i = 0; i < files.length; i++){

	      	this.getBase64(this.lof, this.sel_folder.id, files[i]);

	      	//this.listService.definition_img_sizes();
	      	//this.listService.writeData();

	        formData.append('photo', files[i]);
	        
	        } 
		}



	}

	// isNameInFolder(name,parent){
	// 	let isNameOfFile=false;
	// 	this.lof.forEach(function(item, i, arr) {
 //       		if ((item.name == name)&&(item.parent_id==parent)) isNameOfFile=true;
 //    	});
 //    	return isNameOfFile;
	// }

	getBase64(lof:Folder[], parent, file) {
	   let reader = new FileReader();
	   reader.readAsDataURL(file);// метод readAsDataURL исп.для чтения содержимого Blob или File	   

	   reader.onload = () => {

	   	let expansion = file.name.split(".").pop().toLowerCase();
	   	 if (this.listService.isNameInFolder(file.name,parent)) {alert("Файл с именем "+file.name+" уже есть в папке "+this.sel_folder.name+"."); return false;}
	   	 if (["png","jpg","jpeg"].indexOf(expansion)==-1) {alert("Файл "+file.name+" не является изображением."); return false;}
	   	 if (file.size>3145728) {alert("Размер файла "+file.name+" превышает 3Мб."); return false;}

	     //console.log("reader.result"+reader.result);

	     lof.push(new Folder(file.name, parent, undefined, 'img', reader.result));
	 	    this.listService.definition_img_sizes();
  	 		this.listService.writeData();
	   };

	   reader.onerror = function (error) {
	     console.log('Error: ', error);
	   };
	   
	}


	ngAfterViewInit(){
		
  	}




// handleFiles(files) {
//   if (!files.length) {
//     //fileList.innerHTML = "<p>No files selected!</p>";
//     alert("No files selected!");
//   } else {
//     //fileList.innerHTML = "";
//     var list = document.createElement("ul");
//     ///fileList.appendChild(list);
//     for (var i = 0; i < files.length; i++) {
//       var li = document.createElement("li");
//       list.appendChild(li);
      
//       var img = document.createElement("img");
//       img.src = window.URL.createObjectURL(files[i]);
//       img.height = 60;
//       img.onload = function() {
//         //window.URL.revokeObjectURL(this.src);
//       }
//       li.appendChild(img);
//       var info = document.createElement("span");
//       info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
//       li.appendChild(info);
//     }
//   }
// }



  ngOnInit() {

  	this.lof = this.listService.getList();
  	this.sel_folder=this.listService.sel_folder;








  // 	this.reader.onload = (ev: any) => {
  //       console.log(ev.target.result);
  //   };
  //   this.uploader.onAfterAddingFile = (fileItem: any) => {
  //       this.reader.readAsText(fileItem._file);
  //   };

 }





}
