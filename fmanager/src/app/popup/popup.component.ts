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

  definitionPopupSizes(Img):void{  
  
    this.src = Img.src_base64 ? Img.src_base64: Img.path;
    this.width = Img.img_width;
    this.height = Img.img_height;
    let cli_w = document.body.clientWidth, cli_h = document.body.clientHeight;
    while((this.width>=cli_w) || (this.height>=cli_h)) {this.width=this.width * 0.95; this.height=this.height * 0.95;} 

    this.left = (cli_w - this.width)/2;
    this.top = (cli_h - this.height)/2;

  }

  ngOnInit() {
  	
  }

  ngOnChanges(){
    if(!this.sel_image) this.sel_image = this.sel_folder;
    this.definitionPopupSizes(this.sel_image);  
  }


  closePopup(){
    this.close_popup.emit();
  }



}
