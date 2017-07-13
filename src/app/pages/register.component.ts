import { Component ,ViewContainerRef } from '@angular/core';
import {Overlay} from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {Router, NavigationExtras} from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { NGValidators } from 'ng-validators';

import {AuthService} from '../providers/tipsProvider/authProvider';
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
 private userData: any;
  private data: any;
   date: DateModel;
   theForm;
  options: DatePickerOptions;
    constructor(public router: Router, private Auth: AuthService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private fb: FormBuilder) {
//     this.userData = {
//   "firstName" : "",
//   "lastName" : "",
//   "email" : "",
//   "password" : "",
//   "mobileNumber" : "",
//   "dateofBirth" : "",
//   "gender" : "M",
//   "profilePic" : "",
//   "role" : ""
// };
this.userData = {};

    overlay.defaultViewContainer = vcRef;
    this.options = new DatePickerOptions();

    //    this.theForm = fb.group({
    //   email: ['', [Validators.required, NGValidators.isEmail()]]
    // });
  }
   register() {
    this.Auth.register(this.userData);
    console.log(this.userData);
  }
  submitButton(){
     this.register();
  }
}


