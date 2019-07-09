import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unwatchFile } from 'fs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { element } from '@angular/core/src/render3';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  private loginInfo: AuthLoginInfo
 // username :String
  //password : String
  errorMessage: String
  ///invalidLogin = false

  constructor(private router: Router,
              private authService: AuthService,
              private tokenStorage: TokenStorageService
              ) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn=true;
    }
}

onSubmit(){
  console.log(this.form);
  
  this.loginInfo = new AuthLoginInfo(
    this.form.username,
    this.form.password
  );

  console.log(this.loginInfo);
  this.authService.attemptAuth(this.loginInfo).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUsername(data.username);

      this.isLoginFailed=false;
      console.log(this.isLoggedIn=true);
      this.router.navigate(['customerAcc', this.form.username]);
      console.log("success you are logged in!");
    },
    error => {
      console.log(error);
      this.errorMessage = "*invalid login*";
      this.isLoginFailed=true;
    }
  );
}

reloadPage(){
  window.location.reload();
}
}
