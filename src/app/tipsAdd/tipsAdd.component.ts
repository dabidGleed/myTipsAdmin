import { Component } from '@angular/core';


@Component({
  templateUrl: 'tipsAdd.component.html'
})
export class tipsAddComponent {
  public data;
  model = {};
  constructor() { }
  onSubmit(){
    console.log("data")
  }

}