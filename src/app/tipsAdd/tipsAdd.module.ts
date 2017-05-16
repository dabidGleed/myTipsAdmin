import { NgModule } from '@angular/core';

import { tipsAddComponent } from './tipsAdd.component';
import { TipsAddRoutingModule } from './tipsAdd-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
      TipsAddRoutingModule,
      CommonModule,
      FormsModule
    ],
  declarations: [ tipsAddComponent ]
})
export class tipsAddModule { }
