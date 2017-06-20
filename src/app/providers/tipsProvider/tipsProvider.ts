import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Component} from '@angular/core';

@Injectable()
export class TipsService {
  data;
  options;
  imageData;
  url: 'http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com';

  constructor(public http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers});
    console.log('Hello TipsService Provider');
  }

  load() {
    return new Promise(resolve => {
      this.http.get('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/list/all')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public getCategories() {
    return new Promise(resolve => {
      this.http.get('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/category/list/all')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public getOneTip(tipId) {
    return new Promise(resolve => {
      this.http.get('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/get/' + tipId + '/one')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public addTip(data) {
    return new Promise(resolve => {
      this.http.post('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/userId/create', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

    public AddCategory(data) {
    return new Promise(resolve => {
      this.http.post('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/category/12345/create', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  public updateTip(tipId, data) {
    return new Promise(resolve => {
      this.http.put('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/update', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  deleteTip(tipId) {
    return new Promise(resolve => {
      this.http.delete('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/delete')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  makePublish(tipId){
    return new Promise(resolve => {
      this.http.get('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/make/publish')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  fileUpload(file) {
    console.log(file);
    let headers = new Headers();
    let formData: FormData = new FormData();
    formData.append('content', file);
    return new Promise(resolve => {
      this.http.post('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/file/uploads3', formData, {
        headers: headers
      })
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }
}

