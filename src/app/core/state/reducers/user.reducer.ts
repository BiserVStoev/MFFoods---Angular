import * as UserActions from '../../actions/user.actions';
import { UserModel } from '../../../admin/models/user.model';

interface UsersById {
    [userId: string]: UserModel;
}

export interface UsersState {
    allUsers: UsersById,
    usersAreLoaded: boolean,
    isInAdminContext: boolean
};

const initialState: UsersState = {
    allUsers: {},
    usersAreLoaded: false,
    isInAdminContext: false
};

export function usersReducer(state: UsersState = initialState, action: UserActions.Actions): UsersState {
    switch (action.type) {
        case UserActions.CHANGE_USER_CONTEXT: {
            return Object.assign({}, state, { isInAdminContext: action.payload.isInAdminContext})
        }
        case UserActions.LOAD_USERS_SUCCESS: {
            const newState = Object.assign({}, state, { usersAreLoaded: true });
            console.log(action.payload)
            action.payload.forEach(user => {
                newState.allUsers[user._id] = user;
            });

            return newState;
        }
        default:
            return state;
    }
};