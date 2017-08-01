import { Component, ViewContainerRef, NgZone  } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  templateUrl: 'tipsLists.component.html'
})
export class tipsListComponent {
  public tips;
  itemsPPage = 10;
  curPage = '1';
  searchText = '';
  Categories:any = [];
  categoryIdVal:any = "all";
  constructor(public tipsService: TipsService, public router: Router, private zone: NgZone, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal,private route: ActivatedRoute) {
    
    overlay.defaultViewContainer = vcRef;
    this.curPage = route.params['_value']['page'];
    this.searchText = route.params['_value']['search'];
    this.loadCategories();
    if(this.searchText != ''){
      this.searchTips(this.searchText,'all');
    }else{
      this.loadTips();
    }
  }

  loadTips() {
    var a = localStorage.getItem('userData');
    a = JSON.parse(a);
    var b =[];
    b.push(a);
    console.log(b[0].id + 'LOAD');
    this.tipsService.load(b[0].id)
      .then(data => {
        this.tips = data;
      });      
  }

  clearSearch(){
    this.searchText = '';
    this.router.navigate(['/Tips/'+this.curPage+'/ ']);
    this.loadTips();    
  }

  loadCategories(){
    this.tipsService.getCategories()
      .then(data => {
      
        this.Categories = data;
      });
  }

  removeTip(tip) {
    var confirmed = confirm("Are you sure to delete?");
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

  searchTips(searchTerm,categoryIdVal){
    this.router.navigate(['/Tips/'+this.curPage+'/'+searchTerm]);

    if(searchTerm != ''){
    this.tipsService.searchTips(searchTerm, categoryIdVal)
      .then(
        data => {   
          this.tips = data;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
    } else {
       this.router.navigate(['/Tips/'+this.curPage+'/ ']);
       this.loadTips()
    }
  }
  makePublish(tip){
    this.tipsService.makePublish(tip.id)
      .then(
        data => {
          this.tips[this.tips.indexOf(tip)].status = 'ACTIVE';
          this.tipPublished();
          console.log(data);
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

    hideRole(role){

    var a = localStorage.getItem('userData');

    a = JSON.parse(a);
    var b =[];
    b.push(a);
    if(b[0].role[0] == role){
      return false;
    }
    else{
      return true;
    }
  }
  tipPublished(){
    this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('Added Tip')
      .body(`<p>Your Tip is published successfully</p>`)
      .open();
  }
  pagination(i,p){    

    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;

  }

  changePage(event){
    this.router.navigate(['/Tips/'+event+'/'+this.searchText]);
    this.curPage = event;
  }

}
