import { Component, ViewContainerRef } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  templateUrl: 'categoryList.component.html'
})
export class categoryListComponent {
  public Categories;

  constructor(public tipsService: TipsService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.loadCategories();
    overlay.defaultViewContainer = vcRef;
  }

  loadCategories() {
    this.tipsService.getCategories()
      .then(data => {
      
        this.Categories = data;
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
