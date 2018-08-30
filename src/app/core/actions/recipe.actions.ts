import { Action } from '@ngrx/store';

import { RecipeKinveyModel } from '../../recipe/models/recipe-kinvey.model';

export const CREATE_RECIPE = '[Recipe] CREATE_RECIPE';
export const CREATE_RECIPE_SUCCESS = '[Recipe] CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_ERROR = '[Recipe] CREATE_RECIPE_ERROR';
export const GET_RECIPE = '[Recipe] GET_RECIPE';
export const GET_RECIPE_SUCCESS = '[Recipe] GET_RECIPE_SUCCESS';
export const GET_RECIPE_ERROR = '[Recipe] GET_RECIPE_ERROR';
export const LOAD_ALL_RECIPES = '[Recipe] LOAD_ALL_RECIPES';
export const LOAD_ALL_RECIPES_SUCCESS = '[Recipe] LOAD_ALL_RECIPES_SUCCESS';
export const LOAD_ALL_RECIPES_ERROR = '[Recipe] LOAD_ALL_RECIPES_ERROR';
export const CHANGE_ALL_RECIPES_FILTER = '[Recipe CHANGE_ALL_RECIPES_FILTER]'
export const LOAD_OWN_RECIPES = '[RECIPE] LOAD_OWN_RECIPES';
export const LOAD_OWN_RECIPES_SUCCESS = '[RECIPE] LOAD_OWN_RECIPES_SUCCESS';
export const LOAD_OWN_RECIPES_ERROR = '[RECIPE] LOAD_OWN_RECIPES_ERROR';
export const GET_INIT_USER_PROFILE = '[RECIPE] GET_INIT_USER_PROFILE';
export const GET_INIT_USER_PROFILE_SUCCESS = '[RECIPE] GET_INIT_USER_PROFILE_SUCCESS';
export const GET_INIT_USER_PROFILE_ERROR = '[RECIPE] GET_INIT_USER_PROFILE_ERROR';
export const DELETE_RECIPE = '[RECIPE] DELETE_RECIPE';
export const DELETE_RECIPE_SUCCESS = '[RECIPE] DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_ERROR = '[RECIPE] DELETE_RECIPE_ERROR';

export class CreateRecipeAction implements Action {
    public readonly type = CREATE_RECIPE;

    constructor(public payload: RecipeKinveyModel) { }
};

export class CreateRecipeSuccessAction implements Action {
    public readonly type = CREATE_RECIPE_SUCCESS;

    constructor(public payload: RecipeKinveyModel) { }
};

export class CreateRecipeErrorAction implements Action {
    public readonly type = CREATE_RECIPE_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export class GetRecipeAction implements Action {
    public readonly type = GET_RECIPE;
    public payload: { id: string };

    constructor(id: string) { 
        this.payload = { id };
    }
};

export class GetRecipeSuccessAction implements Action {
    public readonly type = GET_RECIPE_SUCCESS;

    constructor(public payload: RecipeKinveyModel) { }
};

export class GetRecipeErrorAction implements Action {
    public readonly type = GET_RECIPE_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export class LoadAllRecipesAction implements Action {
    public readonly type = LOAD_ALL_RECIPES;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export class LoadAllRecipesSuccessAction implements Action {
    public readonly type = LOAD_ALL_RECIPES_SUCCESS;

    constructor(public payload: RecipeKinveyModel[]) { }
};

export class LoadAllRecipesErrorAction implements Action {
    public readonly type = LOAD_ALL_RECIPES_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export class ChangeAllRecipesFilterAction implements Action {
    public readonly type = CHANGE_ALL_RECIPES_FILTER;
    public payload: {
        filter: string
    };

    constructor(filter: string) {
        this.payload = {
            filter
        };
    }
};

export class LoadOwnRecipesAction implements Action {
    public readonly type = LOAD_OWN_RECIPES;
    public payload: { userId: string };

    constructor(userId: string) { 
        this.payload = { userId };
    }
};

export class LoadOwnRecipesSuccessAction implements Action {
    public readonly type = LOAD_OWN_RECIPES_SUCCESS;

    constructor(public payload: RecipeKinveyModel[]) { }
};

export class LoadOwnRecipesErrorAction implements Action {
    public readonly type = LOAD_OWN_RECIPES_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export class DeleteRecipeAction implements Action {
    public readonly type = DELETE_RECIPE;
    public payload: { recipeId: string };

    constructor(recipeId: string) { 
        this.payload = { recipeId };
    }
};

export class DeleteRecipeSuccessAction implements Action {
    public readonly type = DELETE_RECIPE_SUCCESS;
    public payload: { recipeId: string };

    constructor(recipeId: string) { 
        this.payload = { recipeId };
    }
};

export class DeleteRecipeErrorAction implements Action {
    public readonly type = DELETE_RECIPE_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export type Actions = CreateRecipeAction
    | CreateRecipeSuccessAction
    | CreateRecipeErrorAction
    | GetRecipeAction
    | GetRecipeSuccessAction
    | GetRecipeErrorAction
    | LoadAllRecipesAction
    | LoadAllRecipesSuccessAction
    | LoadAllRecipesErrorAction
    | ChangeAllRecipesFilterAction
    | LoadOwnRecipesAction
    | LoadOwnRecipesSuccessAction
    | LoadOwnRecipesErrorAction
    | DeleteRecipeAction
    | DeleteRecipeSuccessAction
    | DeleteRecipeAction