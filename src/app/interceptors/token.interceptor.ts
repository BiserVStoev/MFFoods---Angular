import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getAuthtoken() !== null) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Kinvey ${this.authService.getAuthtoken()}`,
          'Content-Type': 'application/json'
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${this.authService.appKey}:${this.authService.appSecret}`)}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
