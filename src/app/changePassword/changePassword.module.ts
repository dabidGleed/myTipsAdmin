import {NgModule} from '@angular/core';

import {changePasswordComponent} from './changePassword.component';
import {changePasswordRoutingModule} from './changePassword-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';


@NgModule({
  imports: [
    changePasswordRoutingModule,
    CommonModule,
    FormsModule,
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [changePasswordComponent]
})
export class changePasswordModule {
}
