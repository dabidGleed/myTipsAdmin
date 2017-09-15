import { Component } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor/src/ckeditor.component';
import { NgModule } from '@angular/core';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
@NgModule({
    declarations: [
        CKEditorComponent
    ],
    exports: [
        CKEditorComponent,
           ],
           
})
export class AppComponent { }
