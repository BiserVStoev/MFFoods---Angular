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
export const LOAD_OWN_RECIPES = '[Recipe] LOAD_OWN_RECIPES';
export const LOAD_OWN_RECIPES_SUCCESS = '[Recipe] LOAD_OWN_RECIPES_SUCCESS';
export const LOAD_OWN_RECIPES_ERROR = '[Recipe] LOAD_OWN_RECIPES_ERROR';
export const GET_INIT_USER_PROFILE = '[Recipe] GET_INIT_USER_PROFILE';
export const GET_INIT_USER_PROFILE_SUCCESS = '[Recipe] GET_INIT_USER_PROFILE_SUCCESS';
export const GET_INIT_USER_PROFILE_ERROR = '[Recipe] GET_INIT_USER_PROFILE_ERROR';
export const DELETE_RECIPE = '[Recipe] DELETE_RECIPE';
export const DELETE_RECIPE_SUCCESS = '[Recipe] DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_ERROR = '[Recipe] DELETE_RECIPE_ERROR';
export const LOAD_NOT_APPROVED_RECIPES = '[Recipe] LOAD_NOT_APPROVED_RECIPES';
export const LOAD_NOT_APPROVED_RECIPES_SUCCESS = '[Recipe] LOAD_NOT_APPROVED_RECIPES_SUCCESS';
export const LOAD_NOT_APPROVED_RECIPES_ERROR = '[Recipe] LOAD_NOT_APPROVED_RECIPES_ERROR';
export const APPROVE_RECIPE = '[Recipe] APPROVE_RECIPE';
export const APPROVE_RECIPE_SUCCESS = '[Recipe] APPROVE_RECIPE_SUCCESS';
export const APPROVE_RECIPE_ERROR = '[Recipe] APPROVE_RECIPE_ERROR';

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

export class LoadNotApprovedRecipesAction implements Action {
    public readonly type = LOAD_NOT_APPROVED_RECIPES;
    public payload: { };

    constructor() { 
        this.payload = { };
    }
};

export class LoadNotApprovedRecipesSuccessAction implements Action {
    public readonly type = LOAD_NOT_APPROVED_RECIPES_SUCCESS;

    constructor(public payload: RecipeKinveyModel[]) { 
    }
};

export class LoadNotApprovedRecipesErrorAction implements Action {
    public readonly type = LOAD_NOT_APPROVED_RECIPES_ERROR;
    public payload: {};

    constructor() {
        this.payload = {};
    }
};

export class ApproveRecipeAction implements Action {
    public readonly type = APPROVE_RECIPE;

    constructor(public payload: RecipeKinveyModel) {}
};

export class ApproveRecipeSuccessAction implements Action {
    public readonly type = APPROVE_RECIPE_SUCCESS;
    public payload: { recipeId: string };

    constructor(recipeId: string) { 
        this.payload = { recipeId };
    }
};

export class ApproveRecipeErrorAction implements Action {
    public readonly type = APPROVE_RECIPE_ERROR;
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
    | LoadNotApprovedRecipesAction
    | LoadNotApprovedRecipesSuccessAction
    | LoadNotApprovedRecipesSuccessAction
    | ApproveRecipeAction
    | ApproveRecipeSuccessAction
    | ApproveRecipeErrorAction