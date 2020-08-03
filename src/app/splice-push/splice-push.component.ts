import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice-push',
  templateUrl: './splice-push.component.html',
  styleUrls: ['./splice-push.component.css']
})
export class SplicePushComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[];

  onAdd(user){
    this.users.push(user.value);
  }
  onRemove(index){
    console.log(index)
    this.users.splice(index,1);
  }
}
