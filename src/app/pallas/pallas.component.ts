import { Component, OnInit } from '@angular/core';
import { Order } from '../service/order';
import { Products } from '../corry/corry.component';
import { ActivatedRoute } from '@angular/router';
import { MeatDataService } from '../service/meat-data.service';
import { HttpClient } from '@angular/common/http';
import { productOrder } from '../service/productOrder';
import { CheckboxItem } from '../product/product.component';

@Component({
  selector: 'app-pallas',
  templateUrl: './pallas.component.html',
  styleUrls: ['./pallas.component.css']
})
export class PallasComponent implements OnInit {
  name: string
  userID: number
  companyID: number 
  orderID: number
  productIDs: any =[]
  productID: number
  quantity: number
  quantityList: any=[]
  products: Products[]
  counter: number
  productOrderInfo: productOrder
  checkedProducts: CheckboxItem[];
  productsOrdered : productOrder[];
  
  
    constructor(private route:ActivatedRoute, 
      private service:MeatDataService,
      private http:HttpClient ) { }
  
    ngOnInit() {
      this.name = this.route.snapshot.params['name']
      
      this.service.retrieveCompanyID("Pallas").subscribe(data => this.handleCompanyData(data));
  
      this.service.getUserID(this.name).subscribe(data => this.handleData(data));
  
      document.getElementById("basket").style.display='none'; 
      document.getElementById("displayBasket").style.display='none'; 
      document.getElementById("products").style.display='none';
      document.getElementById("cost").style.display='none';
      document.getElementById("quantity").style.display='none';
   
    }
  
  handleData(data){
  this.userID=data;
  console.log("user id", data)
  }
  handleCompanyData(data){
  this.companyID=data;
  console.log("company id", data)
  }
  handleOrderData(data){
  this.orderID=data
  console.log(this.orderID)
  }
  createOrder(){
  
    let url = `http://localhost:8080/addOrder/${this.userID}`;
    this.http.post(url, Order, {responseType: 'text'}).subscribe(
      data => {
        this.handleOrderData(data)
      });
    
      this.service.retrieveCompanyProducts(this.companyID).subscribe(
        data => { this.products = data
      this.checkedProducts = this.products.map(x => new CheckboxItem(x.productId, x.productName));
      
    });
  
    document.getElementById("products").style.display='block';
    document.getElementById("cost").style.display='block';
    document.getElementById("quantity").style.display='block';
    document.getElementById("basket").style.display='block';
    document.getElementById("orderBtn").style.display='none';
  }
  handleProductData(data){
  this.products=data;
  console.log(this.products)
  }
  onProductChange(productID){
    this.productIDs = productID;
    console.log(this.productIDs);
    
    }
  addQuantity(){
  
     this.quantity = parseInt((document.getElementById("1") as HTMLInputElement).value);
    console.log(this.quantity);
  
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
  
    this.counter = this.service.counter;
    console.log(this.counter)
  
  }
  addQuantity2(){
    this.quantity = parseInt((document.getElementById("2") as HTMLInputElement).value);
  
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
  
    this.counter = this.service.counter;
  }
  addQuantity3(){
    this.quantity = parseInt((document.getElementById("3") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity4(){
    this.quantity = parseInt((document.getElementById("4") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity5(){
    this.quantity = parseInt((document.getElementById("5") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
  
    this.counter = this.service.counter;
  }
  addQuantity6(){
    this.quantity = parseInt((document.getElementById("6") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity7(){
    this.quantity = parseInt((document.getElementById("7") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity8(){
    this.quantity = parseInt((document.getElementById("8") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity9(){
    this.quantity = parseInt((document.getElementById("9") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity10(){
    this.quantity = parseInt((document.getElementById("10") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity11(){
    this.quantity = parseInt((document.getElementById("11") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity12(){
    this.quantity = parseInt((document.getElementById("12") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity13(){
    this.quantity = parseInt((document.getElementById("13") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity14(){
    this.quantity = parseInt((document.getElementById("14") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  addQuantity15(){
    this.quantity = parseInt((document.getElementById("15") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
    addQuantity16(){
    this.quantity = parseInt((document.getElementById("16") as HTMLInputElement).value);
    this.productIDs.forEach(x => {
      this.productID = parseInt(x.valueOf());
  });
    
      this.productOrderInfo = new productOrder(this.productID, this.quantity);
      console.log(this.productOrderInfo)
  
    this.service.createProductOrder(this.orderID, this.productOrderInfo);
    this.counter = this.service.counter;
  }
  
  showBasket(){
    this.service.retrieveProductOrder(this.orderID).subscribe(
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
