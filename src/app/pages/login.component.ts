import { Component } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(public router: Router) { }
  login(){
    console.log("It works");
    this.router.navigate(['/Tips']);
  }
}
