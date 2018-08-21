import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { mustMatchValidator } from '../../directives/must-match-directive';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
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
  registerForm: FormGroup;
  error: string;
  private subscriptions: Subscription[] = [];
  
  constructor(
    private authService: AuthService,
    private router: Router, 
    private toastr: ToastrService 
  ) { }

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

  onSubmit(): void {
    this.subscriptions.push(this.authService
      .register(this.registerForm.value)
      .subscribe(reg => {
          this.toastr.success('Registered Successfuly', 'Success');
          this.router.navigate(['/home']);
      }));
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
