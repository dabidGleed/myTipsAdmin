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
  show = false;
  private tip = {name:'', imageURL:''};
  private hello;
  data;
  private user: any = {
    userDetails:{}
  };
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

    ;
    overlay.defaultViewContainer = vcRef;
  }
  // Local properties

  myfile:any;
  fileChange(fileInput: any) {
    this.showLoading = true;
    this.myfile = fileInput.target.files[0];
    //  console.log(fileInput);
    //let fileList: FileList = event.target.files;

    // chack file upload width
          var reader = new FileReader();
          var width, height;
          var tip = this.tip;
          var AllTipsService = this.AllTipsService;
          var myfile = this.myfile;
          var user = this.user;
          var tip = this.tip;
          var showLoading = this.showLoading;
          reader.onload = function (e) {
            
            var img = document.createElement("img");
            img.onload = function() {
                width  = img.naturalWidth  || img.width;
                height = img.naturalHeight || img.height;
                console.log(width+" /// "+height);
               if(width && height && width === height){
                  AllTipsService.fileUpload(myfile)
                  .then(data => {     
                  tip.imageURL = '';
                  user.userDetails.image = (data['files'][0].url);
                  showLoading = false;
                  }, //Bind to view
                  err => {
                  // Log errors if any
                  console.log(err);
                  });
               }  
            }
            
            console.log(e);
            img.src = reader.result;
            // $('body').append(img);
          }

          reader.readAsDataURL(fileInput.target.files[0]);
  }

   public uploadImageFile(){
     
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
