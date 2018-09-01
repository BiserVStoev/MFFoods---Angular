import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from '../state/reducers/user.reducer';

const getUsersState = createFeatureSelector<UsersState>('users');

export const userAreLoaded = createSelector(
    getUsersState,
    usersState => usersState.usersAreLoaded
);

export const isInAdminContext = createSelector(
    getUsersState,
    usersState => usersState.isInAdminContext
);

export const getUsers = createSelector(
    getUsersState,
    usersState => { console.log(usersState);
        return Object.keys(usersState.allUsers).map(key => usersState.allUsers[key])}
);