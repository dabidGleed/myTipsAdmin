import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {globalService} from './globalService';
import {Component} from '@angular/core';

@Injectable()
export class AuthService {
  data;
  options;
  imageData;
  public  baseURL :"http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com";
  constructor(public http: Http, public globalservices:globalService) {
    console.log(this.baseURL);

    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers});
    console.log('Hello AuthService Provider');
  }


  public login(data) {
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/login', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

    public register(data) {
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/register', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

}

