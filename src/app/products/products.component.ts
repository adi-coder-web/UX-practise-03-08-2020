import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PlaceHolderName:string="Parent to Child communication";
  parentinfo="";
  ParentToChild(event){
    this.parentinfo=event;
  }

  Selectedproduct:string="";
  productitem:boolean=true;
  promsg:string="";
  msg:string="";
  


  onSelectItem(product){
    this.promsg=product +" is selected ";
    this.productitem=false;
    this.Selectedproduct=product;
    console.log(this.Selectedproduct)
  }

  onAddCart()
  {
    this.msg=this.Selectedproduct + " is added to my cart";
  }
}
