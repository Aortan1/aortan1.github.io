

export class Folder{
	//id: string;
	name: string; //имя для возможности переименования
	name0?:string; //имя для построения реального пути к файлу
	parent_id: string;
	//type_of_file: string;
	path?: string;
	src?: string;
	img_width?: number;
	img_height?: number;
	big_or_small?: boolean;	
	//src_base64?: string;
	static id_current:number = 0;
  //   img_size(path,name,with_or_heigth):number{ // функция определения истинных размеров изображения (width или height)
  //       var img = new Image();//document.createElement('img');
  //       img.src=path+name;
  //       img.alt='';
  //       setInterval(function(){console.log(img.width)}, 300);   
  //       //window.onload = function() {
  //       	//if (with_or_heigth=="width") return img.width; else return img.height;
  //       	this.img_width=img.width; this.img_height=img.height;
		// //
  //   }

  	isId(id):boolean{
  		let isId: boolean;
  		let El = document.querySelector('#'+id);
  		isId = (El) ? true : false;
  		return isId;
  	}
  	imgCount(){

  	}

constructor(name, parent_id, public id, public type_of_file= "dir", public src_base64='') { // конструктор, создающий объект папки
	if (!id) {
		let some_id: string;
		do {some_id = type_of_file + String(++Folder.id_current);}
		while (this.isId(some_id));
		//if( some_id =="img1") alert(this.isId(some_id));
		this.id = some_id;

	}


    this.name = name;
    this.parent_id = parent_id;
    if (type_of_file=='img') {
    	this.path = 'http://aortan1.github.io/webcoder/tem/'+name;        
    }
    
}


}