import { productOrder } from "./productOrder";

export class Order {
    userId: number;
    productsOrder: productOrder[];
    productName: string;
    quantity: number; 

    constructor(userId: number){
       this.userId=userId;
    }
  }