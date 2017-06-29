import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { tipsDeletedComponent } from './tipsDeleted.component';
import { TipsDeletedRoutingModule } from './tipsDeleted-routing.module';


@NgModule({
  imports: [
      TipsDeletedRoutingModule,
      CommonModule
    ],
  declarations: [ tipsDeletedComponent ]
})
export class tipsDeletedModule { }