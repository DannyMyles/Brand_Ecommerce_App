import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/productModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ProductUrl = environment.apiUrl

  // injecting httpclient in the Productservice
  constructor( private http :HttpClient) { }

  // get users
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ProductUrl}/Products`);
  }

  // get single user
  getProduct():Observable<Product>{
    return this.http.get<Product>(`${this.ProductUrl}/Products/1`)
  }

  // create a user (We pass in the user as the payload)
  createUser(user: Product):Observable<Product>{
   return this.http.post<Product>(`${this.ProductUrl}/users`, user)
  }
  // When updating a user we pass in the whole request body including the id
  // updateUser(user: Product):Observable<Product>{
  //   // return this.http.put<Product>(`${this.ProductUrl}/users/${user.id}`, user)
  //  }
}
