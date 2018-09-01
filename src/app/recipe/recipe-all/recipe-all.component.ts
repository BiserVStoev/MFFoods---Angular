import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { RecipeStoreService } from '../../core/services/recipe-store.service';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent implements OnInit {
  public filterRecipiesForm: FormGroup;
  public pageSize = 12;
  public currentPage = 1;
  public recipes$: Observable<RecipeModel[]>;
  private subscriptions: Subscription[] = [];

  constructor(private recipeStoreService: RecipeStoreService) { }

  ngOnInit() {
    this.filterRecipiesForm = new FormGroup({
      'recipeFilter': new FormControl('')
    });
    this.subscriptions.push(this.recipeStoreService.allRecipesAreLoaded().subscribe(areLoaded => {
      if (areLoaded) {
        this.recipes$ = this.recipeStoreService.getAllRecipesByFilter();
      } else {
        this.recipeStoreService.loadAllRecipes();
      }
    }));
  }

  public changeFilter(){
    this.recipeStoreService.changeAllRecipesFilter(this.recipeFilter.value);
  }

  get recipeFilter(): AbstractControl {
    return this.filterRecipiesForm.get('recipeFilter');
  }

  public pageChanged(newPage: number): void{
    this.currentPage = newPage;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
