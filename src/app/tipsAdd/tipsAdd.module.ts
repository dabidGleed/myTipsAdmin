import {NgModule} from '@angular/core';

import {tipsAddComponent} from './tipsAdd.component';
import {TipsAddRoutingModule} from './tipsAdd-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';


@NgModule({
  imports: [
    TipsAddRoutingModule,
    CommonModule,
    FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [tipsAddComponent]
})
export class tipsAddModule {
}
