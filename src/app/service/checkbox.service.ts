import { Injectable } from '@angular/core';
import { SelectionPageComponent } from '../selection-page/selection-page.component';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {

  selectedMeat: any
  selectedFish: any
  selectedVeg: any
  selectedMisc: any

  constructor() { 

  }

}
