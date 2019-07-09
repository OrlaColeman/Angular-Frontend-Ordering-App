import { Component, OnInit, HostBinding, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CheckboxService } from '../service/checkbox.service';
import { SelectionPageComponent } from '../selection-page/selection-page.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
name = ''

  constructor(private route:ActivatedRoute, private router: Router, private checkbox:CheckboxService) {
    this.m = sessionStorage.getItem('meat');
   }

m = this.checkbox.selectedMeat   
f = this.checkbox.selectedFish
v = this.checkbox.selectedVeg
misc = this.checkbox.selectedMisc

  ngAfterViewInit(){
    sessionStorage.getItem('meat')
    sessionStorage.getItem('fish')
    sessionStorage.getItem('veg')
    sessionStorage.getItem('misc')
  } 
  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }
  
  whatMeatSelected(){
    if (this.m === "Corry's Meats"){
      this.router.navigate(['customerAcc/corry/',this.name])
    }
    if (this.m === "Fiddles Meats"){
      this.router.navigate(['/customerAcc/{{name}}/selection'])
    }
  }
  whatFishSelected(){
    if (this.f === "Mary's fish shop"){
      this.router.navigate(['/customerAcc/marysFish/', this.name])
    }
    if (this.f === "McDonaghs"){
      this.router.navigate([''])
    }
    if (this.f === "Fish Market"){
      this.router.navigate(['/customerAcc/orla/selection'])
    }
  }
  whatMiscSelected(){
    if (this.misc === "Order Up"){
      this.router.navigate(['test'])
    }
    if (this.misc === "FreshWays"){
      this.router.navigate(['/customerAcc/orla/selection'])
    }
    if (this.misc === "Pallas"){
      this.router.navigate(['customerAcc/pallas/', this.name])
    }
  }
whatVegSelected(){
    if (this.v === "Total Produce"){
      this.router.navigate(['customerAcc/totalProduce/', this.name])
    }
    if (this.v === "Fresh Veg"){
      this.router.navigate([''])
    }
  }

  }
 


