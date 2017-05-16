import { Component } from '@angular/core';
import { TipsService } from '../providers/tipsProvider/tipsProvider';


@Component({
  templateUrl: 'tipsLists.component.html'
})
export class tipsListComponent {
  public tips;
  constructor(public tipsService: TipsService) {
      this.loadTips();
   }
   loadTips(){
    this.tipsService.load()
    .then(data => {
      this.tips = data;
    });
    }

}
