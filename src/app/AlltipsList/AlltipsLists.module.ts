import { NgModule } from '@angular/core';

import { AlltipsListComponent } from './AlltipsLists.component';
import { AllTipsListRoutingModule } from './AlltipsLists-routing.module';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  imports: [
      AllTipsListRoutingModule,
      CommonModule,
      NgxPaginationModule
    ],
  declarations: [ AlltipsListComponent ]
})
export class AlltipsListsModule {}