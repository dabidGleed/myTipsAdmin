import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  templateUrl: 'tipsAdd.component.html',
  providers: [Modal]
})
export class tipsAddComponent {
  private categories;
  private tip = {title:'', description:'',images:[], videos:[],category:'',tagsList:'',tags:[], postType:'',genderSpecific:[],menSpecific:false,womenSpecific:false,videoLink:''};
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
    console.log("add A TIP");
    if(this.tip.tagsList){
      this.tip.tags = this.tip.tagsList.split(',');
      delete this.tip.tagsList;
    }
    if(this.tip.postType == 'image'){
      this.tip.videoLink = '';
    }
    console.log(this.tip);
    if(this.tip.videoLink != ''){
      let videoId = this.tip.videoLink.substr(this.tip.videoLink.indexOf("=") + 1);
      let imageId = 'http://img.youtube.com/vi/'+videoId+'/0.jpg';
      this.tip.videos.push(videoId);
      this.tip.images.push(imageId);
      delete this.tip.videoLink;
    }
    //this.tip.images = [];
    //this.tip.videos = [];
    this.AllTipsService.addTip(this.tip)
        .then(
            data => {
              this.tip = {title:'', description:'', images:[],videos:[], category:'',tagsList:'',tags:[], postType:'',genderSpecific:[],menSpecific:false,womenSpecific:false, videoLink:''};
              this.tipPublished();
            }, //Bind to view
            err => {
              // Log errors if any
              console.log(err);
            });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.AllTipsService.fileUpload(file)
          .then(
              data => {
                console.log(data);
              }, //Bind to view
              err => {
                // Log errors if any
                console.log(err);
              });

    }
  }


   tipPublished() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Added Tip')
        .body(`
            <p>Your Tip is published successfully</p>`)
        .open();
  }

}
