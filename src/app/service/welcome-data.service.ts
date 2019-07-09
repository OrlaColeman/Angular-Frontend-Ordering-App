import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User {
  name: String
  username: String
  email: String
  password: String
  constructor (username: String){
  }
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient) { }


  getUser(){
    let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<User>(`http://localhost:8080/users/getUsers`,{headers : header});
  }
  addUser(){
    this.http.post('http://localhost:8080/users/addUser',{}).subscribe()
  }

  createBasicAuthHttpHeader(){
    let username='orla'
    let password='killoughter'
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }


}
