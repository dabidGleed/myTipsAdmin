import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TipsService {
  data;
  constructor(public http: Http) {
    console.log('Hello TipsService Provider');
  }
  load() {
//   if (this.data) {
//     return Promise.resolve(this.data);
//   }else{

  // don't have the data yet
  return new Promise(resolve => {   
    this.http.get('https://health-tips-backend.herokuapp.com/all/tips')
      .map(res => res.json())
      .subscribe(data => {  
        this.data = data;
        resolve(this.data);
      });
  });
  }
}

