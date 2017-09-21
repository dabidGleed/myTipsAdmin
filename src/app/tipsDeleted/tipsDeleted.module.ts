import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { tipsDeletedComponent } from './tipsDeleted.component';
import { TipsDeletedRoutingModule } from './tipsDeleted-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { loaderModule } from '../loader/loader.module';




@NgModule({
  imports: [
      TipsDeletedRoutingModule,
      CommonModule,
      NgxPaginationModule,
      FormsModule,
      loaderModule
    ],
  declarations: [ tipsDeletedComponent ]
})
export class tipsDeletedModule { }