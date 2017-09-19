import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import {Router, NavigationExtras} from '@angular/router';
import { AuthService } from '../providers/tipsProvider/authProvider';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  public userData:any = JSON.parse(localStorage.getItem('userData'));
  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  private user: any = {
    userDetails:{}
  }
  constructor(public router: Router,private Auth: AuthService,overlay: Overlay, vcRef: ViewContainerRef,){
   var a = localStorage.getItem('userData');
   a = JSON.parse(a);
   var b = [];
   b.push(a);
   this.Auth.getVendor(b[0].id)
   .then(
     data => {
       this.user = data[0];
       if(!this.user.userDetails){
        this.user.userDetails = {};
       }
     }
   )
   
  }

  ngOnInit(): void {}

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
  logout(){
    this.router.navigate(['/pages/login']);
    localStorage.removeItem('userData');
  }
}
