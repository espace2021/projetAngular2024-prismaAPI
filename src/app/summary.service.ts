import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http:HttpClient) { }

  url="https://dummyjson.com/carts"
  
 
  getCartData(): Observable<any> {
    return this.http.get(this.url);
  }

  calculateTotalQuantity(cartData: any): number {
    let totalQuantity = 0;

    for (const cart of cartData.carts) {
      totalQuantity += cart.totalQuantity;
    }

    return totalQuantity;
  }

  calculateTotalPrice(cartData: any): number {
    let totalPrice = 0;

    for (const cart of cartData.carts) {
      for (const product of cart.products) {
        totalPrice += product.total;
      }
    }

    return totalPrice;
  }

  calculateTotalRecords(cartData: any): number {
    return cartData.total;
  }
}
