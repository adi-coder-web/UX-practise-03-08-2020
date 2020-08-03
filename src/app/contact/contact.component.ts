import { DesignUtilityService } from './../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _designServices:DesignUtilityService) {
    this._designServices.userName.subscribe(uname => {this.userName=uname})
   }
   userName:string="";

  ngOnInit(): void {
  }
  status:boolean=false;

  products=[
    {name:"Laptop"},
    {name:"mobile"},
    {name:"TV"},
    {name:"wm"}
  ]

 
  OnCallMethod(uname){
    this._designServices.userName.next(uname.value);
   }

}
