import { NgModule } from '@angular/core';

import { categoryListComponent } from './categoryList.component';
import { categoryistRoutingModule } from './categoryList-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
      categoryistRoutingModule,
      CommonModule
    ],
  declarations: [ categoryListComponent ]
})
export class categoryListModule { }