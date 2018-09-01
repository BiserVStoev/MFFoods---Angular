import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RecipeKinveyModel } from '../../recipe/models/recipe-kinvey.model';
import { RecipeModel } from '../../recipe/models/recipe.model';
import { AdminStoreService } from '../../core/services/admin-store.service';
import { RecipeStoreService } from '../../core/services/recipe-store.service';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit, OnDestroy {
  public recipes$: Observable<RecipeModel[]>;
  public pageSize = 12;
  public currentPage = 1;
  private subscriptions: Subscription[] = [];
  
  constructor(private adminStoreService: AdminStoreService, private recipeStoreService: RecipeStoreService) { }

  ngOnInit() {
    this.subscriptions.push(this.adminStoreService.getAreNotApprovedRecipesLoaded().subscribe(areLoaded => {
      if (areLoaded) {
        this.recipes$ = this.recipeStoreService.getNotApprovedRecipes();
        this.recipeStoreService.getNotApprovedRecipes().subscribe(x => console.log(x))
      } else {
        this.recipeStoreService.loadNotApprovedRecipes();
      }
    }));
  }

  public pageChanged(newPage: number): void{
    this.currentPage = newPage;
  }

  public approveRecipe(recipeId: string){
    this.subscriptions.push(this.recipeStoreService.getKinveyRecipeById(recipeId).subscribe(kinveyRecipe => this.adminStoreService.approveRecipe(kinveyRecipe)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
