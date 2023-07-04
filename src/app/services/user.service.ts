import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment._url

  // injecting httpclient in the userservice
  constructor( private http :HttpClient) { }

  // get users
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // get single user
  getUser():Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }

  // create a user (We pass in the user as the payload)
  createUser(user: User):Observable<User>{
   return this.http.post<User>(`${this.apiUrl}/users`, user)
  }
  // When updating a user we pass in the whole request body including the id
  updateUser(user: User):Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
   }
}
