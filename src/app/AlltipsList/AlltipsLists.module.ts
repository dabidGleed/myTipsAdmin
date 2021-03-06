import { NgModule } from '@angular/core';

import { AlltipsListComponent } from './AlltipsLists.component';
import { AllTipsListRoutingModule } from './AlltipsLists-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { loaderModule } from '../loader/loader.module';


@NgModule({
  imports: [
      AllTipsListRoutingModule,
      CommonModule,
      FormsModule,
      NgxPaginationModule,
      loaderModule
    ],
  declarations: [ AlltipsListComponent ]
})
export class AlltipsListsModule {}