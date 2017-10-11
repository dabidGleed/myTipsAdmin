import { Component, ViewContainerRef, ViewChild, ViewEncapsulation  } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../providers/tipsProvider/authProvider';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { LoaderComponent } from '../loader/loader.component';

@Component({
   selector: 'my-app',
  templateUrl: 'Details.component.html',
  providers: [Modal],
  // directives: [ImageCropperComponent]
})
export class DetailsComponent {


  name:string;
  data1:any;
  message:String;
  cropperSettings1:CropperSettings;
  croppedWidth:number;
  croppedHeight:number;
  
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
   @ViewChild('myFirstModal')
  modalBig: ModalComponent;
  encapsulation: ViewEncapsulation.None
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
  showSpinner:Boolean = false;
  abc = false;
  cba = true;
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
    this.name = 'Angular2'
    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.width = 200;
    this.cropperSettings1.height = 200;

    this.cropperSettings1.croppedWidth = 300;
    this.cropperSettings1.croppedHeight = 300;

    this.cropperSettings1.canvasWidth = 400;
    this.cropperSettings1.canvasHeight = 300;

    this.cropperSettings1.minWidth = 100;
    this.cropperSettings1.minHeight = 100;

    this.cropperSettings1.rounded = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

    this.data1 = {};


  }
  // Local properties
  cropped(bounds:Bounds) {
    this.croppedHeight =bounds.bottom-bounds.top;
    this.croppedWidth = bounds.right-bounds.left;
  }

  set() {
    this.abc = true;
    this.cba = false;
  }
  
  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);

    };
    myReader.readAsDataURL(file);
    }


  myfile:any;
  // fileChange(fileInput: any) {
  //   this.showLoading = true;
  //   this.myfile = fileInput.target.files[0];
  //   this.uploadImageFile();
  // }

   public uploadImageFile(fileVal){
      // this.modalBig.close();
      this.showSpinner = true;
      this.AllTipsService.fileUploadBase64(fileVal)
      .then(data => {     
        this.myfile = data;
        this.tip.imageURL = '';
        this.user.userDetails.image = (this.myfile.imageURL);
        // this.showLoading = false;    
        this.showSpinner = false;
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
   }

  editProfile(validVal: NgForm){
    // this.modalBig.open('sm');
     var a = localStorage.getItem('userData');
     a = JSON.parse(a);
     var b =[];
     b.push(a);

     var sendData = this.user;
     delete sendData.email;
    this.Auth.vendorDetails(b[0].id,this.user)
          .then(
         data => {
            var custom = JSON.parse(localStorage.getItem('userData'));
            var userInfo = {
              "firstName": this.user.firstName,
              "id": custom.id,
              "lastName": this.user.lastName,
              "tokenId": custom.tokenId,
              "role": this.user.role
            };
            
            localStorage.setItem('userData', JSON.stringify(userInfo));
            localStorage.setItem('userImage', JSON.stringify(this.user.userDetails.image));
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
