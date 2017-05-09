import { NgModule } from '@angular/core';

import { tipsListComponent } from './tipsLists.component';
import { TipsListRoutingModule } from './tipsLists-routing.module';

@NgModule({
  imports: [
      TipsListRoutingModule
    ],
  declarations: [
    tipsListComponent,  
  ]
})
export class tipsListsModule { }