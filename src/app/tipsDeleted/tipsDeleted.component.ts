import { Component, ViewContainerRef } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  templateUrl: 'tipsDeleted.component.html'
})
export class tipsDeletedComponent {

  public tips;
  Categories;
  itemsPPage = 10;
  curPage = '1';
  constructor(public tipsService: TipsService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.loadCategories();
    this.getDelTips();
    
   }

    getDelTips() {
    this.tipsService.getdeletedTip()
      .then(data => {
        this.tips = data;
      });
  }

    loadCategories() {
    this.tipsService.getCategories()
      .then(data => {
       this.Categories = data;
      });
  }

  categoryName(categoryId){
    let catName;
    this.Categories.forEach(element => {
      if(element.id == categoryId){
         catName = element.name;
      }
      
    });
    return catName;
  }

    DelTip(tip) {
    var confirmed = confirm("Are you sure to delete?");
    if(confirmed){
      this.tipsService.perdeleteTip(tip.id)
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

    pagination(i,p){
    console.log(p);
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }
}