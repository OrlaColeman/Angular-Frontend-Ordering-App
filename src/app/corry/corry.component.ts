import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservableLike } from 'rxjs';
import { MeatDataService } from '../service/meat-data.service';
import { DecimalPipe } from '@angular/common';
import { AuthLoginInfo } from '../auth/login-info';
import { userInfo } from 'os';
import { productOrder } from '../service/productOrder';
import { element } from '@angular/core/src/render3';
import { ElementFinder } from 'protractor';
import { Product } from '../list-meats/list-meats.component';
import { CheckboxItem } from '../product/product.component';
import { Quantity } from '../product-quantity/product-quantity.component';
import { Order } from '../service/order';
import { HttpClient } from '@angular/common/http';

export class Products {
  constructor(
    public productId: Number,
    public companyId: Number,
    public productName: String,
    public productCost: DecimalPipe
  ){}
}
export class ID {
  constructor(
    public id: Number
  ){}
}
export class User {
  constructor(
    public id: number
  ){}
}

@Component({
  selector: 'app-corry',
  templateUrl: './corry.component.html',
  styleUrls: ['./corry.component.css']
})
export class CorryComponent implements OnInit {
  name = ''
  companyID: number
  produce: Products[]
  prod: Products;
  user : User
  userId: number
  productOrderInfo : productOrder
  form: any = {}
  checkedProducts: CheckboxItem[];
  getProdID: any = [];
  getQuantity: any = [];
  productQuantity: productOrder[];
  quant : number;
  pID : number;
  q : number;
  counter =0;
  productsOrdered : productOrder[];
 
  constructor(private route:ActivatedRoute, 
              private service:MeatDataService,    
              private http:HttpClient      
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name']

    document.getElementById("basket").style.display='none'; 
    document.getElementById("displayBasket").style.display='none'; 
    document.getElementById("products").style.display='none';
    document.getElementById("cost").style.display='none';
    document.getElementById("quantity").style.display='none';
    
    this.service.retrieveCompanyID("Corry Meats").subscribe(data => this.handleCompanyData(data));

  this.service.getUserID(this.name).subscribe(data => this.handleData(data));

}

handleCompanyData(data){
  this.companyID = data;
  console.log(data);
}

createOrder(){

  let url = `http://localhost:8080/addOrder/${this.userId}`;
  this.http.post(url, Order, {responseType: 'text'}).subscribe(
    data => {
      this.handleOrderData(data)
    });
    document.getElementById("products").style.display='block';
    document.getElementById("cost").style.display='block';
    document.getElementById("quantity").style.display='block';
    document.getElementById("basket").style.display='block';
    document.getElementById("orderBtn").style.display='none';
    

    this.service.retrieveCompanyProducts(this.companyID).subscribe(
      data => { this.produce = data
    this.checkedProducts = this.produce.map(x => new CheckboxItem(x.productId, x.productName));
    
  });

}

handleOrderData(data){
  this.q= data;
  console.log("orderID", this.q);
}

onProductChange(productID){
this.getProdID = productID;
console.log(this.getProdID);

}

addQuantity(){
  
  this.quant = parseInt((document.getElementById("1") as HTMLInputElement).value);
  this.getQuantity.push(this.quant);
  this.getProdID.forEach(x => {
    this.pID = parseInt(x.valueOf());

   });
  
   this.productOrderInfo = new productOrder(this.pID, this.quant);
   console.log(this.productOrderInfo);
   console.log(this.q);

   this.service.createProductOrder(this.q, this.productOrderInfo);
   this.counter++;

}
addQuantity2(){
  this.quant = parseInt((document.getElementById("2") as HTMLInputElement).value);
  this.getQuantity.push(this.quant);
  this.getProdID.forEach(x => {
    this.pID = parseInt(x.valueOf());

   });
  
   this.productOrderInfo = new productOrder(this.pID, this.quant);
   console.log(this.productOrderInfo);
   console.log(this.q);

   this.service.createProductOrder(this.q, this.productOrderInfo);
  this.counter++;
}
addQuantity3(){
  this.quant = parseInt((document.getElementById("3") as HTMLInputElement).value);

  this.getQuantity.push(this.quant);
  this.getProdID.forEach(x => {
    this.pID = parseInt(x.valueOf());

   });
  
   this.productOrderInfo = new productOrder(this.pID, this.quant);
   console.log(this.productOrderInfo);
   console.log(this.q);

  this.service.createProductOrder(this.q, this.productOrderInfo);
  this.counter++;
}
addQuantity4(){
  this.quant = parseInt((document.getElementById("4") as HTMLInputElement).value);
  this.getQuantity.push(this.quant);
  this.getProdID.forEach(x => {
    this.pID = parseInt(x.valueOf());

   });
  
   this.productOrderInfo = new productOrder(this.pID, this.quant);
   console.log(this.productOrderInfo);
   console.log(this.q);

   this.service.createProductOrder(this.q, this.productOrderInfo);
   this.counter++;
}
addQuantity5(){
  this.quant = parseInt((document.getElementById("5") as HTMLInputElement).value);
  this.getQuantity.push(this.quant);
  this.getProdID.forEach(x => {
    this.pID = parseInt(x.valueOf());

   });
  
   this.productOrderInfo = new productOrder(this.pID, this.quant);
   console.log(this.productOrderInfo);
   console.log(this.q);

   this.service.createProductOrder(this.q, this.productOrderInfo);
   this.counter++;
}
addQuantity6(){
  this.quant = parseInt((document.getElementById("6") as HTMLInputElement).value);
  this.getQuantity.push(this.quant);
  this.getProdID.forEach(x => {
    this.pID = parseInt(x.valueOf());

   });
  
   this.productOrderInfo = new productOrder(this.pID, this.quant);
   console.log(this.productOrderInfo);
   console.log(this.q);

   this.service.createProductOrder(this.q, this.productOrderInfo);
   this.counter++;
}
handleData(data){
 this.userId = data;
 console.log("userID", this.userId);
} 

showBasket(){
  this.service.retrieveProductOrder(this.q).subscribe(
    data => { this.productsOrdered = data 
    //  console.log(data); 
    this.productsOrdered.forEach( x => {
      console.log(x.productName), console.log(x.cost), console.log(x.quantity);
    }) 
      
    })
    document.getElementById("products").style.display='none';
    document.getElementById("cost").style.display='none';
    document.getElementById("quantity").style.display='none';
    document.getElementById("displayBasket").style.display='block'; 

  }
handleBasketData(data){
console.log(data);
}
closeOrders(){
  document.getElementById("products").style.display='block';
       document.getElementById("cost").style.display='block';
       document.getElementById("quantity").style.display='block';
       document.getElementById("displayBasket").style.display='none'; 
   }
deleteProduct(ID){
console.log(ID);
this.service.deleteProduct(ID).subscribe(
  data => console.log(data, "item deleted"));
   }

  }
       
  //  this.produce.forEach(element => {if (event.target.checked) {
  //   console.log("checked");
  //   console.log(element.productName.indexOf[0]);
  //    }
   
      
      
  






