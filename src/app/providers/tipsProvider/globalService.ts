import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Component} from '@angular/core';

@Injectable()
export class globalService {
  data;
  options;
  imageData;
public url: 'http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com';

}

