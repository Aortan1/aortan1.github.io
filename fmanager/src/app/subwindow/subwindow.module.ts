import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfFoldersService } from '../shared/listoffolders.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ListOfFoldersService]
})
export class SubwindowModule { }
