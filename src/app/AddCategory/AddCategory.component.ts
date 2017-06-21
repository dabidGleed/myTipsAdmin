import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  templateUrl: 'AddCategory.component.html',
  providers: [Modal]
})
export class AddCategoryComponent {
  private categories;
  private tip = {title:'', description:'',images:[], videos:[],category:'',tagsList:'',tags:[], postType:'',genderSpecific:[],videoLink:''};
  private hello;
  public showMe = false;
  constructor(private AllTipsService: TipsService,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
    this.loadCategories();
    overlay.defaultViewContainer = vcRef;
  }
  // Local properties

  loadCategories(){
    // Get all comments
    this.AllTipsService.getCategories()
        .then(
            data => {
              console.log(data);
              this.categories = data
            }, //Bind to view
            err => {
              // Log errors if any
              console.log(err);
            });
  }

  setGender(value, event){
    if(event.target.checked){
      this.tip.genderSpecific.push(value);
    }else{
      this.tip.genderSpecific.splice(this.tip.genderSpecific.indexOf(value),1);
     }
  }

  saveTip(){
    if(this.tip.tagsList){
      this.tip.tags = this.tip.tagsList.split(',');
      delete this.tip.tagsList;
    }

    if(this.tip.videoLink != ''){
      let videoId = this.tip.videoLink.substr(this.tip.videoLink.indexOf("=") + 1);
      let imageId = 'http://img.youtube.com/vi/'+videoId+'/0.jpg';
      this.tip.videos = [];
      this.tip.images = [];
      this.tip.videos.push(videoId);
      this.tip.images.push(imageId);
      delete this.tip.videoLink;
    }

    this.AllTipsService.AddCategory(this.tip)
        .then(
            data => {
              this.tip = {title:'', description:'', images:[],videos:[], category:'',tagsList:'',tags:[], postType:'',genderSpecific:[], videoLink:''};
              this.tipPublished();
            }, //Bind to view
            err => {
              // Log errors if any
              console.log(err);
            });
  }
  myfile:any;
  fileChange(fileInput: any) {
    this.myfile = fileInput.target.files[0];
    //let fileList: FileList = event.target.files;
      this.AllTipsService.fileUpload(this.myfile)
      .then(data => {
        //console.log(data);
        this.tip.images = [];
        this.tip.images.push(data['files'][0].url);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  tipPublished(){
   this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Added Tip')
        .body(`<p>Your Tip is saved successfully. You can make it publish</p>`)
        .open();
  }
}
