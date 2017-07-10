import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { tipsDeletedComponent } from './tipsDeleted.component';
import { TipsDeletedRoutingModule } from './tipsDeleted-routing.module';


@NgModule({
  imports: [
      TipsDeletedRoutingModule,
      CommonModule,
      NgxPaginationModule
    ],
  declarations: [ tipsDeletedComponent ]
})
export class tipsDeletedModule { }