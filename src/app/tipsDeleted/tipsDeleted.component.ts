import { Component, ViewContainerRef } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay } from 'ngx-modialog';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { LoaderComponent } from '../loader/loader.component';


@Component({
  templateUrl: 'tipsDeleted.component.html'
})
export class tipsDeletedComponent {

  public tips;
  Categories:any;
  itemsPPage = 10;
  curPage = '1';
  searchText = '';
  categoryIdVal:any = "all";
  showSpinner: boolean = true;
  showPage: boolean = false;

  constructor(public tipsService: TipsService, public router: Router, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    this.loadCategories();
   // this.getDelTips();
   
    
   }
   searchTips(searchTerm){
     var a = localStorage.getItem('userData');
    a = JSON.parse(a);
    var b =[];
    b.push(a);
    let c =  b[0].id;
    if(searchTerm != ''){
    this.tipsService.searchUserDelTips(searchTerm, this.categoryIdVal, c)
      .then(
        data => {   
          let g:any = data;
          let b:any =[];          
          g.forEach(element => {
            if(element.userId != c){
               b.push(element);
            }
          });   
          this.tips = b;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
    } else {
       this.getDelTips();
    }
  }
   clearSearch(){
    this.searchText = '';
    this.getDelTips();    
  }

    getDelTips() {
    var a = localStorage.getItem('userData');
    a = JSON.parse(a);
    var b =[];
    b.push(a);
    console.log(b[0].id);
    this.tipsService.getdeletedTip(b[0].id)
      .then(data => {
        this.tips = data;
        this.showSpinner = false;
        this.showPage = true;
      });
  }

    loadCategories() {
    this.tipsService.getCategories()
      .then(data => {
        console.log(data);
       this.Categories = data;
        if(this.searchText != ''){
      this.searchTips(this.searchText);
    }else{
      this.getDelTips();
    }
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