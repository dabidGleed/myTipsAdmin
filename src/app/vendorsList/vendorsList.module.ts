import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { vendorsListComponent } from './vendorsList.component';
import { vendorsListRoutingModule } from './vendorsList-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';




@NgModule({
  imports: [
      vendorsListRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule
    ],
  declarations: [ vendorsListComponent]
})
export class vendorsListModule { }