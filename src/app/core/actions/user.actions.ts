import { Action } from '@ngrx/store';

import { SignUpModel } from '../../authentication/models/signup.model';
import { SignInModel } from '../../authentication/models/signin.model';
import { UserModel } from '../../admin/models/user.model';

export const REGISTER = '[User] Register';
export const REGISTER_USER = '[User] REGISTER_USER';
export const REGISTER_USER_SUCCESS = '[User] REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = '[User] REGISTER_USER_ERROR';
export const LOGIN_USER = '[User] LOGIN_USER';
export const LOGIN_USER_SUCCESS = '[User] LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = '[User] LOGIN_USER_ERROR';
export const CHANGE_USER_CONTEXT = '[User] CHANGE_USER_CONTEXT';
export const LOAD_USERS = '[User] LOAD_USERS';
export const LOAD_USERS_SUCCESS = '[User] LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = '[User] LOAD_USERS_ERROR';
export const LOCK_USER = '[User] LOCK_USER';
export const LOCK_USER_SUCCESS = '[User] LOCK_USER_SUCCESS';
export const LOCK_USER_ERROR = '[User] LOCK_USER_ERROR';
export const UNLOCK_USER = '[User] UNLOCK_USER';
export const UNLOCK_USER_SUCCESS = '[User] UNLOCK_USER_SUCCESS';
export const UNLOCK_USER_ERROR = '[User] UNLOCK_USER_ERROR';

export class RegisterUserAction implements Action {
    public readonly type = REGISTER_USER;

    constructor(public payload: SignUpModel) { }
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

    constructor(public payload: SignInModel) { }
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

export class ChangeUserContextAction implements Action {
    public readonly type = CHANGE_USER_CONTEXT;
    public payload: {
        isInAdminContext: boolean
    }

    constructor(isInAdminContext: boolean) {
        this.payload = { isInAdminContext };
    }
}

export class LoadUsersAction implements Action {
    public readonly type = LOAD_USERS;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class LoadUsersSuccessAction implements Action {
    public readonly type = LOAD_USERS_SUCCESS;

    constructor(public payload: UserModel[]) { }
}

export class LoadUsersErrorAction implements Action {
    public readonly type = LOAD_USERS_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class LockUserAction implements Action {
    public readonly type = LOCK_USER;

    constructor(public payload: UserModel) { }
}

export class LockUserSuccessAction implements Action {
    public readonly type = LOCK_USER_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class LockUserErrorAction implements Action {
    public readonly type = LOCK_USER_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class UnlockUserAction implements Action {
    public readonly type = UNLOCK_USER;

    constructor(public payload: UserModel) { }
}

export class UnlockUserSuccessAction implements Action {
    public readonly type = UNLOCK_USER_SUCCESS;
    public payload: {};

    constructor() {
        this.payload = {};
    }
}

export class UnlockUserErrorAction implements Action {
    public readonly type = UNLOCK_USER_ERROR;
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
    | ChangeUserContextAction
    | LoadUsersAction
    | LoadUsersSuccessAction
    | LoadUsersErrorAction
    | LockUserAction
    | LockUserSuccessAction
    | LockUserErrorAction
    | UnlockUserAction
    | UnlockUserSuccessAction
    | UnlockUserErrorAction