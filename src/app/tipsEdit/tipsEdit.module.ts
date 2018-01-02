import { NgModule } from '@angular/core';

import { tipsEditComponent } from './tipsEdit.component';
import { TipsEditRoutingModule } from './tipsEdit-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import { CKEditorModule, CKEditorComponent } from 'ng2-ckeditor';
// import { QuillModule,QuillEditorComponent } from 'ngx-quill'


@NgModule({
  imports: [
    TipsEditRoutingModule,
      CommonModule,
      FormsModule,
      //  FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
       CKEditorModule
      // QuillModule,
    ],
  declarations: [ tipsEditComponent ]
})
export class tipsEditModule { }
