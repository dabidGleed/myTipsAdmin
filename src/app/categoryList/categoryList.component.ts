import { Component, ViewContainerRef } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';


@Component({
  templateUrl: 'categoryList.component.html'
})
export class categoryListComponent {
  public Categories;
  public tips;
  itemsPPage = 10;
  curPage = '1';
  constructor(public tipsService: TipsService, public modal: Modal) {
    this.loadCategories();
  }

  loadCategories() {
    this.tipsService.getCategories()
      .then(data => {
      
        this.Categories = data;
      });
  }
    DelCategory(category) {
      console.log(category);

    // var confirmed = confirm("Are you sure to delete?");
    if(category.count == 0){
         this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Added Tip')
        .body(`<p>Category is deleted successfully.</p>`)
        .open();
      this.tipsService.deleteCategory(category.id)
        .then(
          data => {
            this.Categories.splice(this.Categories.indexOf(category),1);
            console.log(data);
          }, //Bind to view
          err => {
            // Log errors if any
            console.log(err);
          });
    }
    else{
      this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Added Tip')
        .body(`<p>Category cannot be deleted, As it has some Tips added.</p>`)
        .open();
    }

  }

    pagination(i,p){
    
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }

}
