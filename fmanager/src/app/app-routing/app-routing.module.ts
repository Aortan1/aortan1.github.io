// Этот модуль будет отвечать за всю маршрутизацию приложения
// Правда, если маршрутов немного, как у меня, можно их конфигурировать в app.module.ts, без отдельного модуля маршрутизации 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginModule } from '../login/login.module';

const ROUTES = [ // ROUTES можно поместить в отдельный файл routes.ts и импортировать его 
      {path: 'system', component: AppComponent},
      {path: '', redirectTo: 'system', pathMatch:'full'}, 
      {path: '**', component: PageNotFoundComponent} 
      ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    LoginModule
  ],

  exports:[
    RouterModule //!!! RouterModule нужен и в других модулях, но подключать мы будем к ним только AppRoutingModule
  ],

  providers: [],
  bootstrap: []
})


export class AppRoutingModule { }
