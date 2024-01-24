import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http: HttpClient) { }

  url = "https://apigenerator.dronahq.com/api/Bz7vpOmV/orders";

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  calculateTotalQuantity(orders: any[]): number {
    let totalQuantity = 0;

    for (const order of orders) {
      for (const product of order.allProduct) {
        totalQuantity += product.quantitiy;
      }
    }

    return totalQuantity;
  }

  calculateTotalPrice(orders: any[]): number {
    let totalPrice:number = 0;

    for (const order of orders) {
      for (const product of order.allProduct) {
        totalPrice += product.price.toFixed(3) * product.quantitiy;
      }
    }
   
    return totalPrice;
  }

  calculateTotalRecords(orders: any[]): number {
    return orders.length;
  }

  
}
