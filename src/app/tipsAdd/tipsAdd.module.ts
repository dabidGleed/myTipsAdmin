import { NgModule } from '@angular/core';

import { tipsAddComponent } from './tipsAdd.component';
import { TipsAddRoutingModule } from './tipsAdd-routing.module';

@NgModule({
  imports: [
      TipsAddRoutingModule
    ],
  declarations: [ tipsAddComponent ]
})
export class tipsAddModule { }