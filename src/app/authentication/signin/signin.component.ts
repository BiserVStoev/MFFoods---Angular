import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { LoginUserAction } from '../../core/actions/user.actions';
import { AppState } from '../../core/state/app.state';

import { AuthService } from '../../core/services/auth.service';

import { SignInModel } from '../models/signin.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model : SignInModel;

  constructor(private store: Store<AppState>) {
    this.model = new SignInModel("", "");
  }

  ngOnInit() {
  }

  signIn() {
    this.store.dispatch(new LoginUserAction(this.model));
  }

}
