import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  // Use the intercepter when we want to send the token with iur request.
  //  Basically cloaning the request then adding the authorization header
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localToken = localStorage.getItem('token')
    request = request.clone({ headers: request.headers.set("Authorization", 'Bearer ' + localToken)
    .set("Access-Control-Allow-Headers", "*")
    .set("Access-Control-Allow-Origin", "*")
    .set("content-type", 'application/json') });
    return next.handle(request);
  }
}
