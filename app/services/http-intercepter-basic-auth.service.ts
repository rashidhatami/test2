import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthHTTPService} from '../../app/modules/auth/_services/auth-http/fake/auth-fake-http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : AuthHTTPService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const basicAuthHeaderString = this.basicAuthenticationService.auth_token;
    if(basicAuthHeaderString) {
      request = request.clone({
        setHeaders : {
            Authorization: `Bearer ${basicAuthHeaderString}`
          }
        });
    }
    return next.handle(request);
  }
}
