import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PagesRoutingModule} from './pages-routing.module';
// import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import { DatePickerModule } from 'ng2-datepicker';

import {P404Component} from './404.component';
import {P500Component} from './500.component';
import {loginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import { EqualValidator } from './equalValidator.directive';  // import validator
import { emailVerificationComponent } from './emailVerification.component';
import { forgetPasswordComponent } from './forgetPassword.component';
import { resetPasswordComponent } from './reset.component';
@NgModule({
  imports: [PagesRoutingModule, CommonModule,DatePickerModule,
    FormsModule, ReactiveFormsModule, 
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
    ],
  declarations: [
    P404Component,
    P500Component,
    loginComponent,
    RegisterComponent,
    emailVerificationComponent,
    forgetPasswordComponent,
    resetPasswordComponent,
    EqualValidator
  ]
})
export class PagesModule {
}
