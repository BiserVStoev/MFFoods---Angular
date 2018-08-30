import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RecipeStoreService } from '../../core/services/recipe-store.service';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private recipe$: Observable<RecipeModel>;

  constructor(private route: ActivatedRoute, private recipeStoreService: RecipeStoreService) { }

  ngOnInit() {
    this.subscriptions.push(this.route.params.subscribe(params => {
      const recipeId: string = params['id'];
      this.subscriptions.push(this.recipeStoreService.isRecipeLoaded(recipeId).subscribe(isLoaded => {
        console.log(isLoaded)
        if (isLoaded) {
          this.recipe$ = this.recipeStoreService.getRecipeById(recipeId);
        } else {
          this.recipeStoreService.loadRecipe(recipeId);
        }
      }))
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
