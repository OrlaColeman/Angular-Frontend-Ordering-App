import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
 
})
export class WelcomeComponent implements OnInit {

  heading = 'welcome'

  constructor() { 
  }

  ngOnInit() {
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
