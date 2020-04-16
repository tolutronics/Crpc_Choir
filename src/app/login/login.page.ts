import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
pass:any;
user:any;
  constructor(public router:Router) { }

  toTab(){
console.log(this.user);
console.log(this.pass);
    this.router.navigateByUrl("/tabs");
  }
  ngOnInit() {
  }

}
