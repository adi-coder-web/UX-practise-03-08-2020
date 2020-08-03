import { DesignUtilityService } from './../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _designServices:DesignUtilityService) {
    this._designServices.userName.subscribe(uname => {this.userName=uname})
   }
   userName:string="";
  ngOnInit(): void {
  }

  
  OnCallMethod(uname){
   
    this._designServices.userName.next(uname.value);
  }

}
