import { Component ,ViewContainerRef } from '@angular/core';
import {Overlay} from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {Router, NavigationExtras} from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import {AuthService} from '../providers/tipsProvider/authProvider';
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
 private userData: any;
  private data: any;
   date: DateModel;
  options: DatePickerOptions;
    constructor(public router: Router, private Auth: AuthService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.userData = {
  "firstName" : "",
  "lastName" : "",
  "email" : "",
  "password" : "",
  "mobileNumber" : "",
  "dateofBirth" : "",
  "gender" : "M",
  "profilePic" : "",
  "role" : ""
  };
    overlay.defaultViewContainer = vcRef;
    this.options = new DatePickerOptions();
  }
   register() {
    this.Auth.register(this.userData);
    console.log(this.userData);
  }
}


