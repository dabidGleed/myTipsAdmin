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

  public  baseURL :"http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/";

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

    public forgetPassword(role,data) {   
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/'+ role +'/forgot-password',data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

  public emailVerification(token) {
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/verify/'+ token)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }
      public resetPassword(token) {
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/verify/token/'+ token)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

    public changePassword(token,data) { 
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/reset-password?token='+ token,data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

  public vendorDetails(userId,data) { 
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/'+ userId +'/updateUser',data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }


   public passwordChange(userId,data) { 
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/' + userId + '/change-password',data)
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

