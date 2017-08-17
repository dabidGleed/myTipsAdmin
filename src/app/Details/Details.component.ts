import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../providers/tipsProvider/authProvider';

@Component({
  templateUrl: 'Details.component.html',
  providers: [Modal]
})
export class DetailsComponent {
  private categories;
  private tip = {name:'', imageURL:''};
  private hello;
  data;
  private userDetails: any = [];
  showLoading = false;
  public showMe = false;
  constructor(private AllTipsService: TipsService,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal,private Auth: AuthService){
   
    var a = localStorage.getItem('userData');
     a = JSON.parse(a);
     var b =[];
     b.push(a);
    this.Auth.getVendor(b[0].id)
    .then(
         data => {
           this.userDetails = data[0];     
           console.log();
         });
    // this.userDetails ={
    //   firstname:'',
    //   lastname:'',
    //   adress:'',
    //   state:'',
    //   country:'',
    //   city:'',
    //   linkedin:'',
    //   facebook:'',
    //   mobilenumber:'',
    //   pincode:''
    // };

    ;
    overlay.defaultViewContainer = vcRef;
  }
  // Local properties


  editProfile(validVal: NgForm){
     var a = localStorage.getItem('userData');
     a = JSON.parse(a);
     var b =[];
     b.push(a);

     var sendData = this.userDetails;
     delete sendData.email;
    this.Auth.vendorDetails(b[0].id,this.userDetails)
          .then(
         data => {
           this.tipPublished("Successfully Updated")
           this.data = data;     
         });  
  }

  tipPublished(msg){
   this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('Added Tip')
        .body('<p>'+msg+'</p>')
        .open();
  }
  
}
