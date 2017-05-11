import { NgModule } from '@angular/core';

import { tipsDeletedComponent } from './tipsDeleted.component';
import { TipsDeletedRoutingModule } from './tipsDeleted-routing.module';

@NgModule({
  imports: [
      TipsDeletedRoutingModule
    ],
  declarations: [ tipsDeletedComponent ]
})
export class tipsDeletedModule { }