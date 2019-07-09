export class productOrder {
    quantity: number
    productID: number
    orderID: number
    companyID: number
    productName: string
    cost: any
    constructor(productID: number, quantity: number){
       this.quantity= quantity;
       this.productID=productID;
    }
  }