import { Action } from '@ngrx/store';

import { SignUpModel } from '../../authentication/models/signup.model';
import { SignInModel } from '../../authentication/models/signin.model';

export const REGISTER = '[User] Register';
export const REGISTER_USER = '[User] REGISTER_USER';
export const REGISTER_USER_SUCCESS = '[User] REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = '[User] REGISTER_USER_ERROR';
export const LOGIN_USER = '[User] LOGIN_USER';
export const LOGIN_USER_SUCCESS = '[User] LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = '[User] LOGIN_USER_ERROR';

export class RegisterUserAction implements Action {
    public readonly type = REGISTER_USER;

    constructor(public payload: SignUpModel) {}
}

export class RegisterUserSuccessAction implements Action {
    public readonly type = REGISTER_USER_SUCCESS;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class RegisterUserErrorAction implements Action {
    public readonly type = REGISTER_USER_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class LoginUserAction implements Action {
    public readonly type = LOGIN_USER;

    constructor(public payload: SignInModel) {}
}

export class LoginUserSuccessAction implements Action {
    public readonly type = LOGIN_USER_SUCCESS;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class LoginUserErrorAction implements Action {
    public readonly type = LOGIN_USER_ERROR;
    public payload: {};
    
    constructor() {
        this.payload = {};
    }
}

export type Actions = RegisterUserAction
    | RegisterUserSuccessAction
    | RegisterUserErrorAction
    | LoginUserAction
    | LoginUserSuccessAction
    | LoginUserErrorAction