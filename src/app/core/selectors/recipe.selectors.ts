import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RecipesState } from '../state/reducers/recipe.reducer';
import { convertKinveyRecipeToRecipe } from '../../helpers/recipe.helper';

export const getRecipesState = createFeatureSelector<RecipesState>('recipes');

const getAllRecipesState = createSelector(
    getRecipesState,
    recipesState => recipesState.allRecipes
);

export const getKinveyRecipeById = createSelector(
    getAllRecipesState,
    recipes => (recipeId: string) => recipes[recipeId]
);

export const getAllRecipes = createSelector(
    getAllRecipesState,
    recipes => Object.keys(recipes).map(key => recipes[key]).map(convertKinveyRecipeToRecipe)
);

export const getAllApprovedRecipes = createSelector(
    getAllRecipes,
    recipes => recipes.filter(recipe => recipe.isApproved === true)
);

export const getAllNotApprovedRecipes = createSelector(
    getAllRecipes,
    recipes => recipes.filter(recipe => recipe.isApproved === false)
);

export const getAreNotApprovedRecipesLoaded = createSelector(
    getRecipesState,
    recipes => recipes.notApprovedRecipesAreLoaded
);

export const allRecipesAreLoaded = createSelector(
    getRecipesState,
    recipes => recipes.allRecipesAreLoaded
);

export const areOwnRecipesLoaded = createSelector(
    getRecipesState,
    state => state.userRecipesAreLoaded
);

export const getAllRecipiesFilter = createSelector(
    getRecipesState,
    state => state.allRecipesFilter
);

export const getAllRecipesFiltered = createSelector(
    getAllRecipes,
    getAllRecipiesFilter,
    (recipes, filter) => recipes.filter(recipe => recipe.isApproved === true && recipe.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
);

export const getLatestRecipes = createSelector(
    getAllRecipes,
    recipes => recipes.filter(recipe => recipe.isApproved).sort((r1, r2) => new Date(r2._kmd.ect).getTime() - (new Date(r1._kmd.ect).getTime())).slice(0, 4)
);

export const getUserRecipes = createSelector(
    getAllRecipes,
    recipes => (userId: string) =>
        Object.keys(recipes)
            .map(key => recipes[key])
            .filter(recipe => recipe.publisher == userId)
);

export const getRecipesById = createSelector(
    getAllRecipesState,
    recipes => (id: string) => recipes[id]
);

export const recipeIsLoaded = createSelector(
    getAllRecipesState,
    (recipes) => (id: string) => !!recipes[id]
);

export const getOwnRecipes = createSelector(
    getAllRecipes,
    (recipes) => (userId: string) => recipes.filter(r => r.publisher === userId)
);