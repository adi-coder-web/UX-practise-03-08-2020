import { DesignUtilityService } from './../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _designServices:DesignUtilityService) {
    this._designServices.userName.subscribe(dhiraj => {this.userName=dhiraj})
   }
   userName:string="";

  ngOnInit(): void {
  }
  OnCallMethod(uname){
   this._designServices.userName.next(uname.value);
  }
}
