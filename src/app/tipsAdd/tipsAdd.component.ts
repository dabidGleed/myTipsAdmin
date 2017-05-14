import { Component } from '@angular/core';


@Component({
  templateUrl: 'tipsAdd.component.html'
})
export class tipsAddComponent {
  public data;
  constructor() { }
  onSubmit(){
    console.log("data")
  }

}