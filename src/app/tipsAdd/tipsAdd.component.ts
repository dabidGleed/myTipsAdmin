import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  templateUrl: 'tipsAdd.component.html'
})
export class tipsAddComponent {
  public data;
  model = {};
  form: FormGroup;
  tipTitle = new FormControl("", Validators.required);
  tipDesc = new FormControl("", Validators.required);
  image = new FormControl("", Validators.required);
  video = new FormControl("", Validators.required);
  category = new FormControl("", Validators.required);
  tags = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {    
    this.form = fb.group({
            "tipTitle": this.tipTitle,
            "tipDesc": this.tipDesc,
            "image": this.image,
            "video": this.video,
            "category": this.category,
            "tags": this.tags
           // "password":["", Validators.required]
   });
   }
  onSubmit(){
    console.log(this.form);
  }

}