import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { RecipeKinveyModel } from '../../recipe/models/recipe-kinvey.model';
import { query } from '@angular/animations';

@Injectable()
export class RecipeService extends BaseService {
    constructor(protected http: HttpClient) {
        super(http)
    }

    public createRecipe(data: RecipeKinveyModel) {
        const createRecipeUrl = this.constructRequestUrl('appdata', 'recipes');

        return this.http.post<RecipeKinveyModel>(createRecipeUrl, JSON.stringify(data))
            //.pipe(map(convertKinveyRecipeToRecipe));
    };

    public getRecipe(id: string){
        const getRecipeUrl = this.constructRequestUrl('appdata',`recipes/${id}`);
        return this.http.get<RecipeKinveyModel>(getRecipeUrl)
            //.pipe(map(convertKinveyRecipeToRecipe), share(), take(1));
    }

    public getAllRecipes() {
        const getRecipeUrl = this.constructRequestUrl('appdata','recipes');
        return this.http.get<RecipeKinveyModel[]>(getRecipeUrl)
    }

    public getOwnRecipes(userId: string) {
        const query = {
            publisher: userId
        }
        const getOwnRecipesUrl = this.constructRequestUrl('appdata','recipes', JSON.stringify(query));
        return this.http.get<RecipeKinveyModel[]>(getOwnRecipesUrl);
    }

    public deleteRecipe(recipeId: string) {
        const deleteRecipeUrl = this.constructRequestUrl('appdata',`recipes/${recipeId}`);
        return this.http.delete(deleteRecipeUrl);
    }
}