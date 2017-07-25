import {Component, ViewContainerRef} from '@angular/core';
import {Overlay} from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {Router, NavigationExtras} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../providers/tipsProvider/authProvider';

@Component({
  templateUrl: 'forgetPassword.component.html'
})

export class forgetPasswordComponent {
  private data: any;
  private userData:any = {};
  constructor(public router: Router, private Auth: AuthService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

    submitEmail(){
   this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('Added Tip')
        .body(`<p>An email with instructions has been sent to your email address (please also check your spam folder)</p>`)
        .open();
  }
  resetPassword(){
       this.router.navigate(['/pages/resetpassword']);
  }
}