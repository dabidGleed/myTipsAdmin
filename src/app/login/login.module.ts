import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';


@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
