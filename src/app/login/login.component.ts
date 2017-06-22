import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AuthService } from '../providers/tipsProvider/authProvider';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  templateUrl: 'login.component.html',
  providers: [Modal]
})
export class LoginComponent {
  private userData = {identifier:'',password:''};

  constructor(private Auth: AuthService,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
    overlay.defaultViewContainer = vcRef;
  }
  // Local properties


  login(){
    console.log("It works");
    console.log(this.userData);

    // this.AllTipsService.addTip(this.tip)
    //     .then(
    //         data => {
    //           this.tip = {title:'', description:'', images:[],videos:[], category:'',tagsList:'',tags:[], postType:'',genderSpecific:[], videoLink:''};
    //           this.tipPublished();
    //         }, //Bind to view
    //         err => {
    //           // Log errors if any
    //           console.log(err);
    //         });
  }

}
