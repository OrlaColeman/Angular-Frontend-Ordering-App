import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: any = {};
  signupInfo : SignUpInfo;
  isSignedUp = false;
  isSignUpFail = false;
  errorMessage = "error to sign up";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onSubmit(){
    console.log(this.form);
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );

    this.authService.SignUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFail = false;
        this.router.navigate(['customerWelcome']);
        console.log("You are registered!");
        alert("User Registered");
        
      },
      error => {
        console.log(error);
        this.errorMessage;
        this.isSignUpFail=true;
      }
    );
  }
  options(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("show").style.display='none';
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("show").style.display='block';
  }

}
