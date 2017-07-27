import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, OnChanges {

  @Input() sel_folder;
  @Input() sel_image;
  @Output() close_popup = new EventEmitter<string>();
  src: string;
  width: number;
  height: number;
  top: number;
  left: number;
 


  constructor() { }

  closePopup(){
  	this.close_popup.emit();
  }

  ngOnInit() {
  	
  }

  ngOnChanges(){
  	if(!this.sel_image) this.sel_image = this.sel_folder;
  	this.src = this.sel_image.src_base64 ? this.sel_image.src_base64: this.sel_image.path;
  	this.width = this.sel_image.img_width;
  	this.height = this.sel_image.img_height;
  	let cli_w = document.body.clientWidth, cli_h = document.body.clientHeight;
  	while((this.width>=cli_w) || (this.height>=cli_h)) {this.width=this.width * 0.95; this.height=this.height * 0.95;} 

  	this.left = (cli_w - this.width)/2;
  	this.top = (cli_h - this.height)/2;
 




	//alert(this.width+" "+this.height+" "+this.top+" "+this.left);

  }

}
