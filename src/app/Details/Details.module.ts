import {NgModule} from '@angular/core';

import {DetailsComponent} from './Details.component';
import {DetailsRoutingModule} from './Details-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    DetailsRoutingModule,
    CommonModule,
    FormsModule
    // ImageCropperModule,
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {
}
