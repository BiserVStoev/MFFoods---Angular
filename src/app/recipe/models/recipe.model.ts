import { Ingredient } from "./ingredient.model";

export interface RecipeModel {
    title: string,
    picture: string,
    description: string,
    servings: number,
    carbs: number,
    fat: number,
    protein: number,
    instructions: string[]
    ingredients: Ingredient[]
    isApproved: boolean
    publisher: string,
    _id?: string,
    _kmd?: { ect: string}
}