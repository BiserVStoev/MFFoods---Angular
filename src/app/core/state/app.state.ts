import { ActionReducerMap } from "@ngrx/store";
import {  RecipesState, recipesReducer} from './reducers/recipe.reducer';
import {  UsersState, usersReducer } from './reducers/user.reducer';

export interface AppState {
    recipes: RecipesState,
    users: UsersState
}

export const reducers: ActionReducerMap<AppState> = {
    recipes: recipesReducer,
    users: usersReducer
};