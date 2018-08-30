import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from '../../authentication/models/signup.model';
import { SignInModel } from '../../authentication/models/signin.model';
import { BaseService } from './base.service';

@Injectable()
export class AuthService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http)
  }

  public register(body: SignUpModel) {
    const registerUrl = this.constructRequestUrl('user', '');

    return this.http.post(registerUrl, JSON.stringify(body));
  }

  public login(body: SignInModel) {
    const loginUrl = this.constructRequestUrl('user', 'login');
    
    return this.http.post(loginUrl, JSON.stringify(body));
  }

  public checkIfLogged() {
    return this.getAuthtoken() !== null;
  }

  public getAuthtoken(): string {
    return localStorage.getItem('authToken');
  }

  public getUsername(): string {
    return localStorage.getItem('username');
  }

  public getUserId(): string {
    return localStorage.getItem('userId');
  }

  public getEmail(): string {
    return localStorage.getItem('email');
  }

  public clearSession(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    return this.getAuthtoken() !== null;
  }

  public saveTokenAndUserData(username: string, authToken: string, userId: string, email: string): void {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userId', userId);
  }
}