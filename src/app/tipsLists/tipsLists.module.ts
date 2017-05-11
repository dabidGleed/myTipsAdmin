import { NgModule } from '@angular/core';

import { tipsListComponent } from './tipsLists.component';
import { TipsListRoutingModule } from './tipsLists-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
      TipsListRoutingModule,
      CommonModule
    ],
  declarations: [ tipsListComponent ]
})
export class tipsListsModule { }