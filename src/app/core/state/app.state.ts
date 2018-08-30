import { ActionReducerMap } from "@ngrx/store";
import {  RecipesState, recipesReducer} from './reducers/recipe.reducer';

export interface AppState {
    recipes: RecipesState
}

export const reducers: ActionReducerMap<AppState> = {
    recipes: recipesReducer
};