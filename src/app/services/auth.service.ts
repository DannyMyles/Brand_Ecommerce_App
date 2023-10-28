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
  private storageKey = 'token';


  constructor(private http : HttpClient) { }
  
  // User registration HTTP Request
  register(userData: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/auth/signup`, userData)
  }
  // User login HTTP Request
  login (loginData: User):Observable<{token: string}>{
    return this.http.post<{token: string}>(`${this.apiUrl}/auth/login`,loginData)
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
