import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/orderModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient ) { }

  // create orders
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order)
  }

  // get all orders
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }

  // get all orders for a specific user
  getOrdersForUser(id: number): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/orders/${id}`)
  }

}
