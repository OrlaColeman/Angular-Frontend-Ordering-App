import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MeatDataService } from '../service/meat-data.service';

export class Product {
  constructor(
    public productId: Number,
    public companyId: Number,
    public productName: String,
    public productCost: DecimalPipe
  ){}
}

@Component({
  selector: 'app-list-meats',
  templateUrl: './list-meats.component.html',
  styleUrls: ['./list-meats.component.css']
})
export class ListMeatsComponent implements OnInit {

  products: Product[]

 

  constructor(
    private service: MeatDataService
  ) { }

  ngOnInit() {
    this.service.retrieveAllProducts().subscribe(
      data => { this.products = data
      console.log(this.products);
        // console.log(response);
        // this.products=response;
      }
      
      
    )
  }


}
