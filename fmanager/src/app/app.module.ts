

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';

//import { IsInFolder } from './folders/isinfolder.pipe'

import { ListOfFoldersService} from './shared/listoffolders.service';
import { SubwindowComponent } from './subwindow/subwindow.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { UsersData } from "./login/usersdata.service";
import { AuthService   } from "./login/auth.service";
//import { MaterialModule } from "@angular/material"; 
//import {ScrollToModule} from 'ng2-scroll-to';
import { RouterModule } from "@angular/router";
import { FirstComponent } from './first/first.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    //IsInFolder,
    SubwindowComponent,
    FileUploadComponent,
    PopupComponent,
    LoginComponent,
    FirstComponent,
    PageNotFoundComponent, 
    //MaterialModule
    //ScrollToModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(UsersData), // в скобках - имя класса с методом createDb()
      
      //   RouterModule.forRoot([
      // {path: 'system', component: AppComponent},
      // {path: '', redirectTo: 'system', pathMatch:'full'}, 
      // {path: '**', component: PageNotFoundComponent} 
      // ]),
    
    LoginModule,
    AppRoutingModule // модуль, отвечающий за раутинг, размещать в самом низу, чтобы его пути добавлялись ?в самый низ 

  ],
   providers: [
   	ListOfFoldersService,// !! ВСЕ СЕРВИСЫ НУЖНО РЕГИСТРИРОВАТЬ В providers ОСН.МОДУЛЯ ПРИЛОЖЕНИЯ 
    AuthService
    ],
  bootstrap: [FirstComponent] //bootstrap - перевод: начальная загрузка
})
export class AppModule { }
