import {Component, ViewContainerRef} from '@angular/core';
import {Overlay} from 'ngx-modialog';
import {Modal, BSModalContext} from 'ngx-modialog/plugins/bootstrap';
import {Router, NavigationExtras} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../providers/tipsProvider/authProvider';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: 'emailVerification.html',
  providers: [Modal]
})

export class emailVerificationComponent {
  private data: any;
  private verificationId ="";
  constructor(public router: Router, private Auth: AuthService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal,private route: ActivatedRoute) {
      if(route.params){
    this.verificationId = route.params['_value']['verificationId'];
    this.Auth.emailVerification( this.verificationId);
    console.log(this.verificationId);
    }
  }
  loginPage(){
     this.router.navigate(['/pages/login']);
  }
}