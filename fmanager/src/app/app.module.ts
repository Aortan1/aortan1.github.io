

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';

import { IsInFolder } from './folders/isinfolder.pipe'

import { ListOfFoldersService} from './shared/listoffolders.service';
import { SubwindowComponent } from './subwindow/subwindow.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { PopupComponent } from './popup/popup.component';

//declare let jQuery : Object;


@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    IsInFolder,
    SubwindowComponent,
    FileUploadComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
   providers: [
   	ListOfFoldersService // !! ВСЕ СЕРВИСЫ НУЖНО РЕГИСТРИРОВАТЬ В providers ОСН.МОДУЛЯ ПРИЛОЖЕНИЯ 
    // { provide: TOASTR_TOKEN, useValue: toastr }, //.?.
    // { provide: JQ_TOKEN, useValue: jQuery } //.?.
    ],
  bootstrap: [AppComponent] //bootstrap - перевод: начальная загрузка
})
export class AppModule { }
