import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.getAuthtoken() !== null) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Kinvey ${this.getAuthtoken()}`,
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

    return next.handle(request)
      .pipe(tap((res: HttpEvent<any>) => {
        console.log(res)
        if (res instanceof HttpResponse && res.url.endsWith(`https://baas.kinvey.com/user/${this.authService.appKey}`) && res.statusText === 'Created') {
          //this.saveToken(res.body);
          
        }
      }))
  }

  private saveToken(data) {
    localStorage.setItem('username', data['username']);
    localStorage.setItem('authToken', data['_kmd']['authtoken']);
    localStorage.setItem('userId', data['_id']);
  }

  private getAuthtoken(): string {
    return localStorage.getItem('authToken');
  }
}
