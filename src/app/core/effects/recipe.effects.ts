import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as RecipeActions from '../actions/recipe.actions';
import { RecipeService } from '../services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AdminStoreService } from '../services/admin-store.service';

@Injectable()
export class RecipeEffects {

    @Effect()
    public createRecipe$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.CREATE_RECIPE),
        mergeMap((action: RecipeActions.CreateRecipeAction) =>
            this.recipeService.createRecipe(action.payload).pipe(
                map(data => {
                    this.toastr.success('Recipe created successfuly', 'Success');
                    this.router.navigate(['/home']);
                    return new RecipeActions.CreateRecipeSuccessAction(data);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.CreateRecipeErrorAction());
                })
            )
        )
    );

    @Effect()
    public getRecipe$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.GET_RECIPE),
        mergeMap((action: RecipeActions.GetRecipeAction) =>
            this.recipeService.getRecipe(action.payload.id).pipe(
                map(data => {
                    return new RecipeActions.GetRecipeSuccessAction(data);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.GetRecipeErrorAction());
                })
            )
        )
    );

    @Effect()
    public loadAllRecipes$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.LOAD_ALL_RECIPES),
        mergeMap((action: RecipeActions.LoadAllRecipesAction) =>
            this.recipeService.getAllRecipes().pipe(
                map(data => {
                    return new RecipeActions.LoadAllRecipesSuccessAction(data);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.LoadAllRecipesErrorAction());
                })
            )
        )
    );

    @Effect()
    public loadOwnRecipes$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.LOAD_OWN_RECIPES),
        mergeMap((action: RecipeActions.LoadOwnRecipesAction) =>
            this.recipeService.getOwnRecipes(action.payload.userId).pipe(
                map(data => {
                    return new RecipeActions.LoadOwnRecipesSuccessAction(data);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.LoadOwnRecipesErrorAction());
                })
            )
        )
    );

    @Effect()
    public deleteRecipe$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.DELETE_RECIPE),
        mergeMap((action: RecipeActions.DeleteRecipeAction) =>
            this.recipeService.deleteRecipe(action.payload.recipeId).pipe(
                map(data => {
                    this.toastr.success('Recipe deleted successfuly', 'Success!');
                    return new RecipeActions.DeleteRecipeSuccessAction(action.payload.recipeId);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.DeleteRecipeErrorAction());
                })
            )
        )
    );

    @Effect()
    public loadNotApprovedRecipes$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.LOAD_NOT_APPROVED_RECIPES),
        mergeMap((action: RecipeActions.LoadNotApprovedRecipesAction) =>
            this.recipeService.getNotApprovedRecipes().pipe(
                map(data => {
                    return new RecipeActions.LoadNotApprovedRecipesSuccessAction(data);
                }),
                catchError((err) => {
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.LoadNotApprovedRecipesErrorAction());
                })
            )
        )
    );

    @Effect()
    public approveRecipe$: Observable<Action> = this.actions$.pipe(
        ofType(RecipeActions.APPROVE_RECIPE),
        mergeMap((action: RecipeActions.ApproveRecipeAction) =>
            this.adminService.approveRecipe(action.payload).pipe(
                map(data => {
                    return new RecipeActions.ApproveRecipeSuccessAction(data._id);
                }),
                catchError((err) => {
                    console.log(err)
                    this.toastr.error(err.error.description, 'Error!');
                    return of(new RecipeActions.ApproveRecipeErrorAction());
                })
            )
        )
    );

    constructor(
        private actions$: Actions,
        private recipeService: RecipeService,
        private adminService: AdminService,
        private toastr: ToastrService,
        private router: Router) { }
}