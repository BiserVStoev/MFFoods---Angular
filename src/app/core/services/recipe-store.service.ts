import { Injectable } from "@angular/core";
import * as fromRoot from '../state';
import { Store, select } from "@ngrx/store";
import * as RecipeActions from '../actions/recipe.actions';
import * as recipeSelectors from '../selectors/recipe.selectors'
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { RecipeModel } from "../../recipe/models/recipe.model";
import { convertKinveyRecipeToRecipe } from '../../helpers/recipe.helper';
import { RecipeKinveyModel } from "../../recipe/models/recipe-kinvey.model";

@Injectable()
export class RecipeStoreService {
    constructor(private store: Store<fromRoot.AppState>) { }
    
    public allRecipesAreLoaded(): Observable<boolean> {
        return this.store.select(recipeSelectors.allRecipesAreLoaded);
    }

    public loadAllRecipes(): void {
        this.store.dispatch(new RecipeActions.LoadAllRecipesAction());
    }

    public getAllRecipes(): Observable<RecipeModel[]> {
        return this.store.select(recipeSelectors.getAllRecipes);
    }

    public getAllRecipesByFilter(){
        return this.store.select(recipeSelectors.getAllRecipesFiltered);
    }

    public getLatesRecipes(){
        return this.store.select(recipeSelectors.getLatestRecipes);
    }

    public createRecipe(recipe: RecipeKinveyModel): void {
        this.store.dispatch(new RecipeActions.CreateRecipeAction(recipe));
    }

    public isRecipeLoaded(id: string): Observable<boolean> {
        return this.store.select((state) => recipeSelectors.recipeIsLoaded(state)(id));
    }

    public areOwnRecipesLoaded():  Observable<boolean> {
        return this.store.select(recipeSelectors.areOwnRecipesLoaded);
    }

    public loadOwnRecipes(userId: string): void {
        this.store.dispatch(new RecipeActions.LoadOwnRecipesAction(userId));
    }

    public loadRecipe(id: string): void {
        this.store.dispatch(new RecipeActions.GetRecipeAction(id));
    }

    public getRecipeById(id: string): Observable<RecipeModel> {
        return this.store
            .pipe(
                select((state) => recipeSelectors.getRecipesById(state)(id)),
                map(convertKinveyRecipeToRecipe));
    }

    public changeAllRecipesFilter(filter: string){
        this.store.dispatch(new RecipeActions.ChangeAllRecipesFilterAction(filter));
    }

    public getOwnRecipes(userId: string){
        return this.store.select((state) => recipeSelectors.getOwnRecipes(state)(userId));
    }

    public deleteRecipe(recipeId: string) {
        this.store.dispatch(new RecipeActions.DeleteRecipeAction(recipeId));
    }
}
