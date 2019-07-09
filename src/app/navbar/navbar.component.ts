import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name = ''
message = ""
id = ""
  constructor(private route:ActivatedRoute,
    ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }
  options(){

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("first").style.display='none';
  
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("first").style.display='block';
  }

}
