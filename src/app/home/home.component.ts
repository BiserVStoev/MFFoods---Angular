import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/services';
import { Subscription, Observable } from 'rxjs';
import { RecipeModel } from '../recipe/models/recipe.model';
import { RecipeStoreService } from '../core/services/recipe-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public mostRecentRecipes$: Observable<RecipeModel[]>;

  constructor(public authService: AuthService, private recipeStoreService: RecipeStoreService) { }

  ngOnInit() {
    this.subscriptions.push(this.recipeStoreService.allRecipesAreLoaded().subscribe(areLoaded => {
      if (areLoaded) {
        this.mostRecentRecipes$ = this.recipeStoreService.getLatesRecipes();
      } else {
        if (this.authService.isAuthenticated()){
          this.recipeStoreService.loadAllRecipes();
        }
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
