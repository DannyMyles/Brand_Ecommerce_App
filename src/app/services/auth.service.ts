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
  private storageKey = 'authToken';


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
    const loginDate =  { username, email , password }
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

  // Method to store the token in local storage
  setAuthToken(token: string): void {
    localStorage.setItem(this.storageKey, token);
  }

  // Method to get the token from local storage
  getAuthToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  // Method to remove the token from local storage (logout)
  removeAuthToken(): void {
    localStorage.removeItem(this.storageKey);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.getAuthToken() !== null;
  }
}
