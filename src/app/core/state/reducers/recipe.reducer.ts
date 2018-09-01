import * as RecipeActions from '../../actions/recipe.actions';
import { RecipeKinveyModel } from '../../../recipe/models/recipe-kinvey.model';

interface RecipesById {
    [recipeId: string]: RecipeKinveyModel;
}

export interface RecipesState {
    allRecipes: RecipesById;
    currentUserRecipes: RecipesById,
    allRecipesAreLoaded: boolean,
    allRecipesFilter: string,
    userRecipesAreLoaded: boolean,
    notApprovedRecipesAreLoaded: boolean
};

const initialState: RecipesState = {
    allRecipes: {},
    currentUserRecipes: {},
    allRecipesAreLoaded: false,
    allRecipesFilter: '',
    userRecipesAreLoaded: false,
    notApprovedRecipesAreLoaded: false
};

export function recipesReducer(state: RecipesState = initialState, action: RecipeActions.Actions): RecipesState {
    switch (action.type) {
        case RecipeActions.CREATE_RECIPE_SUCCESS: {
            const newState = Object.assign({}, state, { allRecipes: Object.assign({}, state.allRecipes) });
            newState.allRecipes[action.payload._id] = action.payload;
            newState.currentUserRecipes[action.payload._id] = action.payload;

            return newState;
        }
        case RecipeActions.GET_RECIPE_SUCCESS: {
            const newState = Object.assign({}, state);
            newState.allRecipes[action.payload._id] = action.payload;

            return newState;
        }
        case RecipeActions.LOAD_ALL_RECIPES_SUCCESS: {
            const newState = Object.assign({}, state, { allRecipesAreLoaded: true });
            action.payload.forEach(recipe => {
                newState.allRecipes[recipe._id] = recipe;
            });

            return newState;
        }
        case RecipeActions.CHANGE_ALL_RECIPES_FILTER: {
            return Object.assign({}, state, { 
                allRecipesFilter: action.payload.filter,
                allRecipes: Object.assign({}, state.allRecipes)
            });
        }
        case RecipeActions.LOAD_OWN_RECIPES_SUCCESS: {
            const newState = Object.assign({}, state, { userRecipesAreLoaded: true });
            action.payload.forEach(recipe => {
                newState.allRecipes[recipe._id] = recipe;
            });

            return newState;
        }
        case RecipeActions.DELETE_RECIPE_SUCCESS: {
            const newState = Object.assign({}, state, { allRecipes: Object.assign({}, state.allRecipes) });
            delete newState.allRecipes[action.payload.recipeId];

            return newState;
        }
        case RecipeActions.LOAD_NOT_APPROVED_RECIPES_SUCCESS: {
            const newState = Object.assign({}, state, { notApprovedRecipesAreLoaded: true });
            action.payload.forEach(recipe => {
                newState.allRecipes[recipe._id] = recipe;
            });

            return newState;
        }
        case RecipeActions.APPROVE_RECIPE_SUCCESS: {
            const newState = Object.assign({}, state, { allRecipes: Object.assign({}, state.allRecipes) });
            newState.allRecipes[action.payload.recipeId].isApproved = true;

            return newState;
        }
        default:
            return state;
    }
};