import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbindin.component.html',
  styleUrls: ['./eventbindin.component.css']
})
export class EventbindinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*msg:string="";
  onAddCart(event){
    this.msg=event.target.value+" added to cart.";
  }
*/
  onName(ninfoName){
    console.log(ninfoName.value);
  }
  user:string="Aditya";
 


}
