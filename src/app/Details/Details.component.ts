import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../providers/tipsProvider/authProvider';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
   selector: 'my-app',
  templateUrl: 'Details.component.html',
  providers: [Modal],
  // directives: [ImageCropperComponent]
})
export class DetailsComponent {
  
  private categories;
  show = false;
  private tip = {name:'', imageURL:''};
  private hello;
  data;
  private user: any = {
    userDetails:{}
  };
  showLoading = false;
  public showMe = false;
  constructor(private AllTipsService: TipsService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal,private Auth: AuthService){
    this.data = {};
    var a = localStorage.getItem('userData');
     a = JSON.parse(a);
     var b =[];
     b.push(a);
    this.Auth.getVendor(b[0].id)
    .then(
         data => {
           this.user = data[0];   
           if(!this.user.userDetails){
             this.user.userDetails = {};
           }  
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

    // overlay.defaultViewContainer = vcRef;

  }
  // Local properties

  myfile:any;
  fileChange(fileInput: any) {
    this.showLoading = true;
    this.myfile = fileInput.target.files[0];
    this.uploadImageFile();
  }

   public uploadImageFile(){
      this.AllTipsService.fileUpload(this.myfile)
                  .then(data => {     
                  this.tip.imageURL = '';
                  this.user.userDetails.image = (data['files'][0].url);
                  this.showLoading = false;
                  }, //Bind to view
                  err => {
                  // Log errors if any
                  console.log(err);
                  });
   }

  editProfile(validVal: NgForm){
     var a = localStorage.getItem('userData');
     a = JSON.parse(a);
     var b =[];
     b.push(a);

     var sendData = this.user;
     delete sendData.email;
    this.Auth.vendorDetails(b[0].id,this.user)
          .then(
         data => {
           this.vendor("Successfully Updated");
           this.data = data;    
         });  
  }

  vendor(msg){
   this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('Added Tip')
        .body('<p>'+msg+'</p>')
        .open();
  }
  
}
