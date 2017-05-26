import { Injectable } from '@angular/core';
import { Http ,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TipsService {
  data;
    options;
  constructor(public http: Http) {
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      this.options = new RequestOptions({ headers: headers });
    console.log('Hello TipsService Provider');
  }
  load() {
  return new Promise(resolve => {
    this.http.get('https://health-tips-backend.herokuapp.com/all/tips')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });

  }
  public getCategories() {
    return new Promise(resolve => {
      this.http.get('https://health-tips-backend.herokuapp.com/category/list/all')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });

  }

  public addTip(data){
      return new Promise(resolve => {
          this.http.post('https://health-tips-backend.herokuapp.com/tips/userId/create',data)
              .map(res => res.json())
              .subscribe(data => {
                  this.data = data;
                  resolve(this.data);
              });
      });
  }

  deleteTip(tipId){
    return new Promise(resolve => {
      this.http.delete('https://health-tips-backend.herokuapp.com/tips/'+tipId+'/delete')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  fileUpload(file){
      let formData = new FormData();
      formData.append('content', file);
       //console.log(formData.get('content'));
      return new Promise(resolve => {
          this.http.post('https://health-tips-backend.herokuapp.com/file/uploads3', formData, this.options)
              .map(res => res.json())
              .subscribe(data => {
                  this.data = data;
                  resolve(this.data);
              })
      });
  }
}

