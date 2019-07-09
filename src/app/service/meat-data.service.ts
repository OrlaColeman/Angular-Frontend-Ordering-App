import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../list-meats/list-meats.component';
import { AuthLoginInfo } from '../auth/login-info';
import { User } from '../corry/corry.component';
import { Order } from './order';
import { productOrder } from './productOrder';
import { SignUpInfo } from '../auth/signup-info';
import { updatedDetails } from '../account-details/account-details.component';
import { MarysFishComponent } from '../marys-fish/marys-fish.component';

@Injectable({
  providedIn: 'root'
})
export class MeatDataService {
counter=1;
  constructor(private http:HttpClient) { }

  retrieveCompanyID(companyName:String){
    return this.http.get(`http://localhost:8080/meats/company/${companyName}`)
  }
  retrieveCompanyProducts(companyID:number){
    return this.http.get<Product[]>(`http://localhost:8080/meats/products/${companyID}`);
  }
  retrieveAllProducts(){
    return this.http.get<Product[]>(`http://localhost:8080/products`);
  }
  retrieveProductID(name:String){
    return this.http.get(`http://localhost:8080/product/${name}`);
  }
  createOrder(userId:number){
    let url = `http://localhost:8080/addOrder/${userId}`;
    this.http.post(url, Order, {responseType: 'text'}).subscribe(
      result => {
        alert("order created - please select your products");
        location.reload
      },
      error => {
        alert("error");
      });
  }
  getOrderIDs(userId){
return this.http.get(`http://localhost:8080/getOrderIds/${userId}`)
  }
  createProductOrder(orderId:number, info:productOrder){
    let url = `http://localhost:8080/meats/productorder/${orderId}`;
   return this.http.post(url, info, {responseType:'text'}).subscribe(
      result => {
        console.log("order made");
        this.counter++;
        console.log(this.counter)
        location.reload
      },
      error => {
        alert("error");
      });
  }

  getUserID(username:String){
    return this.http.get(`http://localhost:8080/getUserId/${username}`);
  }
  getUserDetails(userID:number){
    return this.http.get<User>(`http://localhost:8080/api/auth/details/${userID}`);
  }
   
  updateUserDetails(userID:number, info: updatedDetails){
    let updateUrl = `http://localhost:8080/api/auth/updateUserDetails/${userID}`
    return this.http.put(updateUrl, info, {responseType:'text'}).subscribe(
      result => {
        alert("details updated");
        location.reload
      },
      error => {
        alert("error");
      });
  }
  updateUserPassword(userID:number, password: String){
    let updateUrl = `http://localhost:8080/api/auth/updateUserPassword/${userID}`
    return this.http.put(updateUrl, password, {responseType:'text'}).subscribe(
      result => {
        alert("password updated");
        location.reload
      },
      error => {
        alert("error");
      });
  }
  
  retrieveProductOrder(orderId:number){
return this.http.get<productOrder[]>(`http://localhost:8080/findProductsOrdered/${orderId}`); 
  }

  retrieveProductOrderByCompany(companyId:number){
    return this.http.get<productOrder[]>(`http://localhost:8080/findProductsOrder/company/${companyId}`);
  }
  deleteProduct(productId:number){
    return this.http.delete(`http://localhost:8080/productOrder/delete/${productId}`);
  }
  // createOrder(){
  //   return this.http.get<User>(`http://localhost:8080/users/getUsers')
  //   this.http.post('http://localhost:8080/addOrder').subscribe();
  // }
}
