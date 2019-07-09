import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckboxItem } from '../product/product.component';
export class Quantity {
  quantity:Number;
  constructor(quantity: any){
this.quantity=quantity;
  }
}
@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input() options : CheckboxItem[];
  @Input() quantities : Quantity[];
  @Output() toggle = new EventEmitter<any[]>();
  constructor() { }

  productQuant: Number[];
  ngOnInit() {
  }

  onToggle(){

    // const checkedQuantity = this.quantities.filter(x => x.quantity);
    // console.log(checkedQuantity)
    let x = this.toggle.emit(this.quantities.map(x => x.quantity));
    console.log(x);
    // const checkedQuantity = this.quantities.push()
    // this.productQuantity = (document.getElementById("quantityID") as HTMLInputElement).value;
    // this.quantities.push(parsesInt(x));

    // let x = (document.getElementById("quantityID") as HTMLInputElement).value;
    // this.quantities.push(new Quantity(x));
//console.log( (document.getElementById("quantityID") as HTMLInputElement).value);
  //  this.quantities.map( x => new Quantity(x.productQuantity) );

    // this.toggle.emit(this.quantities.map(x => {x.productQuantity}));
  }
}
