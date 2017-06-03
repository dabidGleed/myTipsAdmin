import { Component, ViewContainerRef } from '@angular/core';
import {TipsService} from '../providers/tipsProvider/tipsProvider';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: 'tipsLists.component.html'
})
export class tipsListComponent {
  public tips;

  constructor(public tipsService: TipsService, private router: Router, private route: ActivatedRoute) {
    this.loadTips();
  }

  loadTips() {
    this.tipsService.load()
      .then(data => {
        this.tips = data;
      });
  }
  removeTip(tip) {
    confirm("Are you sure to delete?");
    console.log(tip);
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
