import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { productOrder } from '../service/productOrder';

export class CheckboxItem {
  productID: Number;
  productName: String;
  checked: boolean;
  constructor(productID: any, productName: any, checked?: boolean){
this.productID=productID;
this.productName=productName;
this.checked= checked ? checked:false;
  }
}
export class QuantityItem{
  quantityAmount: Number;
  constructor(quantityAmount: any){
    this.quantityAmount=quantityAmount;
  }
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() options : CheckboxItem[];
  @Input() quanititys: QuantityItem[];
  @Input() selectedValues: Number[];
  @Output() toggle = new EventEmitter<any[]>();
  
  constructor() { }

  ngOnInit() {}

  onToggle(){

  const checkedOptions = this.options.filter(x => x.checked);
  this.selectedValues = checkedOptions.map(x => x.productID);
  this.toggle.emit(checkedOptions.map(x => x.productID));
  
  // const checkedQuantity = this.quanititys.filter(x => x.quantityAmount);
  //   console.log(checkedQuantity.map(x => x.quantityAmount));
  
}



}

