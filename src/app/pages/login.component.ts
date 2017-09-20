import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../providers/tipsProvider/authProvider';

@Component({
  templateUrl: 'login.component.html',
  providers: [Modal]
})

export class loginComponent {
  private userData: any;
  private data: any;
  showSpinner: boolean = false;
  showPage: boolean = true;
  constructor(public router: Router, private Auth: AuthService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.userData = { "identifier": "", "password": "" };
  }

  login(val) {
    if (val) {
      this.showSpinner = true;
      this.showPage = false;
      this.Auth.login(this.userData)
        .then(
        data => {
          var tempData = [];
          tempData.push(data);
          this.data = data;
          if (this.data.status === 200) {
            this.router.navigate(['/Tips/1/ ']);
            var userInfo = {
              "firstName": tempData[0].user.firstName,
              "id": tempData[0].user.id,
              "lastName": tempData[0].user.lastName,
              "tokenId": tempData[0].user.tokenId,
              "role": tempData[0].user.role,
              // "userDetails": tempData[0].user.userDetails
            }
            localStorage.setItem('userData', JSON.stringify(userInfo));
          } else {
            this.loginMessage('Invalid Login Credentials');
            // this.showSpinner = false;
            // this.showPage = true;
          }

        });
    } else {
      this.loginMessage('Enter Login Credentials');
    }
  }

    Register() {
        this.router.navigate(['/pages/register']);
     }
  loginMessage(message){

    this.modal.alert()
      .size('sm')
      .title('Login Error')
      .body('<p>' + message + '</p>')
      .open();
  }
 

  forgetPassword() {
    this.router.navigate(['/pages/forgetpassword']);
  }

}
