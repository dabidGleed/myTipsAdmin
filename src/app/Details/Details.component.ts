import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../providers/tipsProvider/authProvider';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';


@Component({
  templateUrl: 'Details.component.html',
  providers: [Modal]
})
export class DetailsComponent {

  name:string;
  data1:any;
  cropperSettings1:CropperSettings;
  croppedWidth:number;
  croppedHeight:number;
  
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
  

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

    this.cropperSettings1.croppedWidth = 200;
    this.cropperSettings1.croppedHeight = 200;

    this.cropperSettings1.canvasWidth = 250;
    this.cropperSettings1.canvasHeight = 150;

    this.cropperSettings1.minWidth = 10;
    this.cropperSettings1.minHeight = 10;

    this.cropperSettings1.rounded = false;
    this.cropperSettings1.keepAspect = false;

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
  fileChange(fileInput: any) {
    this.showLoading = true;
    this.myfile = fileInput.target.files[0];
    //let fileList: FileList = event.target.files;
      this.AllTipsService.fileUpload(this.myfile)
      .then(data => {
        //console.log(data);
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
           this.vendor("Successfully Updated")
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
