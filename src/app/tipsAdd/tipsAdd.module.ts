import { NgModule } from '@angular/core';

import { tipsAddComponent } from './tipsAdd.component';
import { TipsAddRoutingModule } from './tipsAdd-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
      TipsAddRoutingModule,
      CommonModule
    ],
  declarations: [ tipsAddComponent ]
})
export class tipsAddModule { }