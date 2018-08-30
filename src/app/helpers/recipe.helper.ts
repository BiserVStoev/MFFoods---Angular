import { RecipeKinveyModel } from "../recipe/models/recipe-kinvey.model";
import { RecipeModel } from "../recipe/models/recipe.model";
import { Ingredient } from "../recipe/models/ingredient.model";
import { recipePartsDelimeter } from '../constants/constants';

export const convertKinveyRecipeToRecipe = (kinveyRecipe: RecipeKinveyModel) => {
        const recipeResult: RecipeModel = {
            ...kinveyRecipe,
            ingredients: kinveyRecipe.ingredients.split(recipePartsDelimeter).map(ingredient => {
                const neededIndex = ingredient.lastIndexOf('-');
                const name = ingredient.substring(0, neededIndex).trim();
                const quantity: number = Number(ingredient.substring(neededIndex + 1, ingredient.length));
                const currentIngredient: Ingredient = { name, quantity };

                return currentIngredient;
            }),
            instructions: kinveyRecipe.instructions.split(recipePartsDelimeter)
        };
        console.log(recipeResult)
        return recipeResult;
}