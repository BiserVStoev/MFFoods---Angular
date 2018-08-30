import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as UserActions from '../actions/user.actions';
import { AuthService } from '../services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

    @Effect()
    public register$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.REGISTER_USER),
        mergeMap((action: UserActions.RegisterUserAction) =>
            this.authService.register(action.payload).pipe(
                map(data => {
                    this.toastr.success('Registered successfuly', 'Success');
                    this.router.navigate(['/home']);
                    return new UserActions.RegisterUserSuccessAction();
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, "Error!");
                    return of(new UserActions.RegisterUserErrorAction());
                })
            )
        )
    );

    @Effect()
    public login$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.LOGIN_USER),
        mergeMap((action: UserActions.LoginUserAction) =>
            this.authService.login(action.payload).pipe(
                map(data => {
                    this.authService.saveTokenAndUserData(data['username'], data['_kmd']['authtoken'], data['_id'], data["email"]);
                    this.toastr.success('Logged in successfuly', 'Success');
                    this.router.navigate(['/home']);
                    return new UserActions.LoginUserSuccessAction();
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, "Error!");
                    return of(new UserActions.LoginUserSuccessAction());
                })
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router) { }
}