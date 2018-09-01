import { Injectable } from "@angular/core";
import * as fromRoot from '../state';
import { Store } from "@ngrx/store";
import * as UserActions from "../actions/user.actions";
import * as RecipeActions from "../actions/recipe.actions";
import * as userSelectors from '../selectors/user.selectors'
import * as recipeSelectors from '../selectors/recipe.selectors'
import { Observable } from "rxjs";
import { UserModel } from "../../admin/models/user.model";
import { RecipeKinveyModel } from "../../recipe/models/recipe-kinvey.model";

@Injectable()
export class AdminStoreService {
    constructor(private store: Store<fromRoot.AppState>) { }
    
    public getAreUsersLoaded(): Observable<boolean>{
        return this.store.select(userSelectors.userAreLoaded);
    }

    public loadUsers(): void {
        this.store.dispatch(new UserActions.LoadUsersAction());
    }

    public getUsers(): Observable<UserModel[]>{
        return this.store.select(userSelectors.getUsers);
    }

    public lockUser(user: UserModel): void{
        this.store.dispatch(new UserActions.LockUserAction(user));
    }

    public unlockUser(user: UserModel): void{
        this.store.dispatch(new UserActions.UnlockUserAction(user));
    }

    public approveRecipe(recipe: RecipeKinveyModel): void {
        this.store.dispatch(new RecipeActions.ApproveRecipeAction(recipe));
    }

    public getAreNotApprovedRecipesLoaded(): Observable<boolean> {
        return this.store.select(recipeSelectors.getAreNotApprovedRecipesLoaded);
    }
}
