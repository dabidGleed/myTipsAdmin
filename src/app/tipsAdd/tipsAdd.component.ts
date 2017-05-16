import { Component } from '@angular/core';
import { TipsService } from '../providers/tipsProvider/tipsProvider';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  templateUrl: 'tipsAdd.component.html'
})
export class tipsAddComponent {
  private categories;
  private tip = {title:'', description:'',category:''};
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
    console.log(this.tip);
    this.AllTipsService.addTip(this.tip)
        .then(
            data => {
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
