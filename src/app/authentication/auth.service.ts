import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from './models/signup.model';
import { SignInModel } from './models/signin.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  public readonly appKey = 'kid_ry67d6EXX';
  public readonly appSecret = 'a4ecc0867207424dba98f9ef7823fd84';
  public readonly registerUrl = `https://baas.kinvey.com/user/${this.appKey}`;
  public readonly loginUrl = `https://baas.kinvey.com/user/${this.appKey}/login`;
  public readonly logoutUrl = `https://baas.kinvey.com/user/${this.appKey}/_logout`;

  constructor(private http: HttpClient) { }

  register(body: SignUpModel) {
    return this.http.post(this.registerUrl, JSON.stringify(body));
  }

  login(body: SignInModel) {
    return this.http.post(this.loginUrl, JSON.stringify(body));
  }


  logout(): Observable<Object> {
    return this.http.post<object>(this.logoutUrl, {});
  }

  checkIfLogged() {
    return this.getAuthtoken() !== null;
  }

  getAuthtoken(): string {
    return localStorage.getItem('authToken');
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  getUserId(): string {
    return localStorage.getItem('userId');
  }

  clearSession(): void {
    localStorage.clear();
  }

  isAuthenticated() : boolean {
    return this.getAuthtoken() !== null;
  }
}