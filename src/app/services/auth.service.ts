import { Injectable } from '@angular/core';
import { User } from '../models/userModel';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;


  constructor(private http : HttpClient) { }

  
  // User registration
  register(userData: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/signup`, userData).pipe(
      map((response:any) =>{
        console.log('sign up', response)
        return response
      }),
      catchError(err =>{
        return throwError(err)
      })
    )
  }
  // User login
  login (username: string, email: string, password: string):Observable<User>{
    const loginDate =  { username, email , password}
    return this.http.post<User>(`${this.apiUrl}/login`,loginDate).pipe(
      map((response:any) =>{
        console.log("response", response);
        return response
      }),
      catchError(err =>{
        return throwError(err)
      })
    )
  }
}
