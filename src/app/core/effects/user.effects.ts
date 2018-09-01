import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as UserActions from '../actions/user.actions';
import { AuthService } from '../services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Injectable()
export class UserEffects {

    @Effect()
    public register$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.REGISTER_USER),
        mergeMap((action: UserActions.RegisterUserAction) =>
            this.authService.register(action.payload).pipe(
                map(data => {
                    this.toastr.success('Registered successfuly', 'Success');
                    this.router.navigate(['/signin']);
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
                    console.log(data)
                    this.authService.saveTokenAndUserData(data['username'], data['_kmd']['authtoken'], data['_id'], data["email"], data["roles"]);
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

    @Effect()
    public loadUsers$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.LOAD_USERS),
        mergeMap((action: UserActions.LoadUsersAction) =>
            this.adminService.getAllUsers().pipe(
                map(users => {
                    return new UserActions.LoadUsersSuccessAction(users);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, "Error!");
                    return of(new UserActions.LoadUsersErrorAction());
                })
            )
        )
    );

    @Effect()
    public lockUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.LOCK_USER),
        mergeMap((action: UserActions.LockUserAction) =>
            this.adminService.lockUser(action.payload._id).pipe(
                map(data => {
                    this.toastr.success(`User ${action.payload.username} successfuly banned!`, "Error!");
                    return new UserActions.LockUserSuccessAction();
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, "Error!");
                    return of(new UserActions.LockUserErrorAction());
                })
            )
        )
    );

    @Effect()
    public unlockUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.UNLOCK_USER),
        mergeMap((action: UserActions.UnlockUserAction) =>
            this.adminService.unlockUser(action.payload._id).pipe(
                map(data => {
                    this.toastr.success(`User ${action.payload.username} successfuly unbanned!`, "Error!");
                    return new UserActions.UnlockUserSuccessAction();
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, "Error!");
                    return of(new UserActions.UnlockUserErrorAction());
                })
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private adminService: AdminService,
        private toastr: ToastrService,
        private router: Router) { }
}