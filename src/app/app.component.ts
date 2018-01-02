import { Component } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor/src/ckeditor.component';
// import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component'
import { NgModule } from '@angular/core';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
@NgModule({
    declarations: [
        CKEditorComponent
        // QuillEditorComponent
    ],
    exports: [
        CKEditorComponent
        // QuillEditorComponent
           ]
})
export class AppComponent { }
