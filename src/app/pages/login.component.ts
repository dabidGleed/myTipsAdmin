import {Component, ViewContainerRef} from '@angular/core';
import {Overlay} from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {Router, NavigationExtras} from '@angular/router';

import {AuthService} from '../providers/tipsProvider/authProvider';

@Component({
  templateUrl: 'login.component.html',
  providers: [Modal]
})

export class loginComponent {
  private userData: any;
  private data: any;
  constructor(public router: Router, private Auth: AuthService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.userData = {"identifier": "", "password": ""};
    overlay.defaultViewContainer = vcRef;
  }

  login() {
    this.Auth.login(this.userData)
      .then(
        data => {
          this.data = data;
          if (this.data.status === 200) {
            this.router.navigate(['/Tips']);
          } else {
            this.tipPublished();
          }
        });
  }

    Register() {
        this.router.navigate(['/pages/register']);
     }
  tipPublished(){
    this.modal.alert()
      .size('sm')
      .title('Login Error')
      .body('<p>Invalid Login Credentials</p>')
      .open();
  }

}
