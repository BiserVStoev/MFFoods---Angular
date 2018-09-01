import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { mustMatchValidator } from '../../directives/must-match-directive';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { RegisterUserAction } from '../../core/actions/user.actions';
import { SignUpModel } from '../models/signup.model';

const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const usernameRegex: RegExp = /^[A-Z]{1}[A-Za-z0-9]+$/;
const passwordRegex: RegExp = /^[A-Za-z0-9]+$/;
const nameRegex: RegExp = /^[A-Z]{1}[A-Za-z]+$/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public error: string;
  private subscriptions: Subscription[] = [];
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.pattern(usernameRegex)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        Validators.pattern(passwordRegex)
      ]),
      'confirmPassword': new FormControl(''),
      'firstName': new FormControl('', [
        Validators.required,
        Validators.pattern(nameRegex)
      ]),
      'lastName': new FormControl('', [
        Validators.required,
        Validators.pattern(nameRegex)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern(emailRegex)
      ])
    }, { validators: mustMatchValidator });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }

  register(): void {
    if (this.registerForm.valid){
      const { email, firstName, lastName, username, password} = this.registerForm.value;
      const registerData = new SignUpModel(username, email, password, firstName, lastName, 'FoodLover');
      this.store.dispatch(new RegisterUserAction(registerData));
    }
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword');
  }

  get firstName(): AbstractControl {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.registerForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }
}
