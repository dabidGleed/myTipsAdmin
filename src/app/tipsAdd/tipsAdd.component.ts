import { Component } from '@angular/core';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  templateUrl: 'tipsAdd.component.html'
})
export class tipsAddComponent {
  private categories;
  private tip = {title:'', description:'',category:'',tagsList:'',tags:[], postType:'',genderSpecific:'',menSpecific:false,womenSpecific:false};
  private hello;

  constructor(private AllTipsService: TipsService){
    this.loadCategories();
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

  saveTip(){
    console.log("add A TIP");
    if(this.tip.tagsList){
      this.tip.tags = this.tip.tagsList.split(',');
      delete this.tip.tagsList;
    }
    if(this.tip.menSpecific === true){
      this.tip.genderSpecific = "MEN"
    }else if(this.tip.womenSpecific === true){
      this.tip.genderSpecific = "WOMEN"
    }else{
      this.tip.genderSpecific = "ANY"
    }
    delete this.tip.menSpecific;
    delete this.tip.womenSpecific;
    console.log(this.tip);
    this.AllTipsService.addTip(this.tip)
        .then(
            data => {
              this.tip = {title:'', description:'',category:'',tagsList:'',tags:[], postType:'',genderSpecific:'',menSpecific:false,womenSpecific:false};
              console.log(data);
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

}
