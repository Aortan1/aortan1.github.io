import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../app.component';

import { ListOfFoldersService } from '../shared/listoffolders.service';//?на всякий сл.


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListOfFoldersService],
  bootstrap: [AppComponent] //bootstrap - перевод: начальная загрузка
})
export class FoldersModule { }
