import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeatDataService } from '../service/meat-data.service';
import { NgIf } from '@angular/common';
import { productOrder } from '../service/productOrder';
import { User } from '../service/welcome-data.service';
import { SignUpInfo } from '../auth/signup-info';

export class updatedDetails {
  name: String
  username:String
  email: String

  constructor(name: String, username: String, email: String){
this.name=name;
this.username=username;
this.email=email;
  }
}

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  name: string
  userId: number
  orderIds: any[]
  orderId: number
  productsOrdered: productOrder []
  user: User
  form: any = {};
  updatedDetails : updatedDetails;
  updateName : String;
  updateUsername: String;
  updateEmail: String;
  companyId: number

  constructor(private route:ActivatedRoute, 
    private service:MeatDataService,) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
    this.hideElements();
    this.service.getUserID(this.name).subscribe(data => this.handleData(data));

  }

  hideElements(){
    document.getElementById("closeBtn").style.display='none'; 
    document.getElementById("closeBtn2").style.display='none'; 
   document.getElementById("closeBtn3").style.display='none'; 
   document.getElementById("closeBtn4").style.display='none'; 
  document.getElementById("frost").style.display='none';
  document.getElementById("frosted").style.display='none';
  document.getElementById("frosty").style.display='none';

  }
  handleData(data){
    this.userId = data;
    console.log(data);
  }

getOrderID(){
   this.service.getOrderIDs(this.userId).subscribe(data => this.handleOrderIdData(data));
  document.getElementById("closeBtn").style.display='block'; 
  document.getElementById("loop").style.display='block';
  document.getElementById("products").style.display='block';
  document.getElementById("btn-group2").style.display='none';
  document.getElementById("btn-group3").style.display='none';
  document.getElementById("btn-group4").style.display='none';
  document.getElementById("frost").style.display='block';
}

handleOrderIdData(data){
  this.orderIds = data;
}

getProductsOrdered = (data) => {
 this.service.retrieveProductOrder(data).subscribe(data => this.handleProductData(data));
}
handleProductData(data){
  this.productsOrdered = data;
  this.productsOrdered.sort((a,b) => a.companyID - b.companyID);
  console.log(this.productsOrdered)
}
closeOrders(){
document.getElementById("loop").style.display='none';
document.getElementById("products").style.display='none';
document.getElementById("closeBtn").style.display='none'; 
document.getElementById("frost").style.display='none';
document.getElementById("btn-group2").style.display='block';
document.getElementById("btn-group3").style.display='block';
document.getElementById("btn-group4").style.display='block';
document.getElementById("corryBtn").style.display='none';

}
getUserDetails(){
document.getElementById("closeBtn2").style.display='block';  
document.getElementById("userDetails").style.display='block'; 
document.getElementById("frost").style.display='block';
this.service.getUserDetails(this.userId).subscribe(data => this.handleDetails(data));


}
handleDetails(data){
this.user=data;
console.log(this.user.name);
}
closeUserDetails(){
document.getElementById("closeBtn2").style.display='none'; 
document.getElementById("userDetails").style.display='none'; 
document.getElementById("frost").style.display='none';
}
updateDetails(){
  document.getElementById("closeBtn3").style.display='block'; 
  document.getElementById("details").style.display='block';
  document.getElementById("frosted").style.display='block';
}
closeUpdateDetails(){
  document.getElementById("closeBtn3").style.display='none'; 
  document.getElementById("details").style.display='none';
  document.getElementById("frosted").style.display='none';
}

checkUpdatedDetails(){
  if(this.form.name != null){
    this.updateName = this.form.name;
  }
  else{
    this.updateName=this.user.name;
  }
  if(this.form.username != null){
    this.updateUsername = this.form.username;
  }
  else{
    this.updateUsername = this.user.username;
  }
  if(this.form.email != null){
    this.updateEmail = this.form.email;
  }
  else{
    this.updateEmail = this.user.email;
  }
}
onSubmit(){
  this.checkUpdatedDetails();

  this.updatedDetails = new updatedDetails(
    this.updateName,
    this.updateUsername,
    this.updateEmail,
  );

  this.service.updateUserDetails(this.userId, this.updatedDetails);
  console.log(this.updatedDetails);
}

updatePassword(){
  document.getElementById("closeBtn4").style.display='block'; 
  document.getElementById("pword").style.display='block';
  document.getElementById("frosty").style.display='block';
}

onSubmitP(){
  this.service.updateUserPassword(this.userId, this.form.password);
  console.log(this.form.password);
}
closeUpdatePassword(){
  document.getElementById("closeBtn4").style.display='none'; 
  document.getElementById("pword").style.display='none';
  document.getElementById("frosty").style.display='none';
}


}
//   handleCompanyData(data){
//     console.log("company ", data);
//     this.companyId=data;

//     this.service.retrieveProductOrderByCompany(this.companyId).subscribe(data => this.handleProdData(data));
//   }

//   handleProdData(data){
// this.productsOrdered = data;
// this.orderIds = this.productsOrdered.map(x => x.orderID).filter((el, i, a) => i === a.indexOf(el));
// // this.orderIds = this.orderIds
// console.log(this.orderIds);

//   }
//   getCorryProducts(){
//     this.service.retrieveCompanyID("Corry Meats").subscribe(data => this.handleCompanyData(data));
   
//   }