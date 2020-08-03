import { DesignUtilityService } from './../design-utility.service';
import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _designServices:DesignUtilityService) {
    this._designServices.userName.subscribe(dhiraj => {this.userName=dhiraj})
   }
   userName:string="";
  ngOnInit(): void {
  }

  @Input() public PlaceHolder;
  
 @Output() childEmit=new EventEmitter<string>();

 childmdg="child to parent commucniotion";

 ParentToChild(){
   this.childEmit.emit(this.childmdg);
 }



 OnCallMethod(uname){
  this._designServices.userName.next(uname.value);
 }

}
