import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeModel } from '../recipe/models/recipe.model';
import { AuthService } from '../core/services';
import { RecipeStoreService } from '../core/services/recipe-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public recipes: RecipeModel[];
  public approvedRecipes: number;
  public notApprovedRecipes: number;
  public pageSize = 2;
  public currentPage = 1;

  constructor(public authService: AuthService, private recipeStoreService: RecipeStoreService) { }

  ngOnInit() {
    this.subscriptions.push(this.recipeStoreService.areOwnRecipesLoaded().subscribe(areLoaded => {
      if (areLoaded) {
        this.subscriptions.push(this.recipeStoreService.getOwnRecipes(this.authService.getUserId()).subscribe(recipes => {
          this.recipes = recipes;
          this.approvedRecipes = recipes.filter(r => r.isApproved).length;
          this.notApprovedRecipes = recipes.filter(r => !r.isApproved).length;
        }));
      } else {
        if (this.authService.isAuthenticated()) {
          this.recipeStoreService.loadOwnRecipes(this.authService.getUserId());
        }
      }
    }));
  }

  public pageChanged(newPage: number): void{
    this.currentPage = newPage;
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
