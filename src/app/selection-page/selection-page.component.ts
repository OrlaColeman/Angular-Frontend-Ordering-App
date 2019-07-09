import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { CheckboxService } from '../service/checkbox.service';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.css']
})

export class SelectionPageComponent implements OnInit, AfterViewChecked {
  name = ''

  constructor(private route:ActivatedRoute, private checkbox:CheckboxService) {
    this.checkbox.selectedMeat="Corry's Meats";
   }

   ngAfterViewChecked() {
    sessionStorage.setItem('meat', this.checkbox.selectedMeat)
    sessionStorage.setItem('fish', this.checkbox.selectedFish)
    sessionStorage.setItem('veg', this.checkbox.selectedVeg)
    sessionStorage.setItem('misc', this.checkbox.selectedMisc)
   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  showM(){
    document.getElementById("meats").style.display='block'; 
    document.getElementById("hide-m").style.display='none';  
  }
  hideM(){
    document.getElementById("meats").style.display='none'; 
    document.getElementById("hide-m").style.display='block'; 
  }
  showF(){
    document.getElementById("fish").style.display='block'; 
    document.getElementById("hide-f").style.display='none';  
      }
  hideF(){
    document.getElementById("fish").style.display='none'; 
    document.getElementById("hide-f").style.display='block';  
      }    
  showV(){    
   document.getElementById("veg").style.display='block'; 
   document.getElementById("hide-v").style.display='none'; 
        } 
  hideV(){    
    document.getElementById("veg").style.display='none'; 
    document.getElementById("hide-v").style.display='block'; 
         }       
  showMisc(){   
  document.getElementById("misc").style.display='block'; 
  document.getElementById("hide-misc").style.display='none';   
  } 
  hideMisc(){   
    document.getElementById("misc").style.display='none'; 
    document.getElementById("hide-misc").style.display='block';   
    }

}

