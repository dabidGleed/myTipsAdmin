import { Component, ViewContainerRef } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  templateUrl: 'categoryList.component.html'
})
export class categoryListComponent {
  public tips;

  constructor(public tipsService: TipsService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.loadTips();
    overlay.defaultViewContainer = vcRef;
  }

  loadTips() {
    this.tipsService.load()
      .then(data => {
        this.tips = data;
      });
  }
  removeTip(tip) {
    var confirmed = confirm("Are you sure to delete?");
    console.log(tip);
    if(confirmed){
      this.tipsService.deleteTip(tip.id)
        .then(
          data => {
            this.tips.splice(this.tips.indexOf(tip),1);
            console.log(data);
          }, //Bind to view
          err => {
            // Log errors if any
            console.log(err);
          });
    }

  }
  makePublish(tip){
    this.tipsService.makePublish(tip.id)
      .then(
        data => {
          this.tips[this.tips.indexOf(tip)] = 'ACTIVE';
          this.tipPublished();
          console.log(data);
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
      .body(`<p>Your Tip is published successfully</p>`)
      .open();
  }


}
