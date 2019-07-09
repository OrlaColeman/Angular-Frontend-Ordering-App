import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-home',
  templateUrl: './about-us-home.component.html',
  styleUrls: ['./about-us-home.component.css']
})
export class AboutUsHomeComponent implements OnInit {

  constructor() { }

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
