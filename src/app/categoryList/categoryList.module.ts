import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { categoryListComponent } from './categoryList.component';
import { categoryistRoutingModule } from './categoryList-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';



@NgModule({
  imports: [
      categoryistRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule
    ],
  declarations: [ categoryListComponent ]
})
export class categoryListModule { }