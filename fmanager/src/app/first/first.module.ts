import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
//import { AppRoutingModule} from '../app-routing/app-routing.module';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})


export class FirstModule { 
  constructor(private router: Router){ }


}