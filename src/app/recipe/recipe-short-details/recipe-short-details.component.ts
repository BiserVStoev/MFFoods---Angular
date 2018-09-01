import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { RecipeStoreService } from '../../core/services/recipe-store.service';

@Component({
  selector: 'recipe-short-details',
  templateUrl: './recipe-short-details.component.html',
  styleUrls: ['./recipe-short-details.component.css']
})
export class RecipeShortDetailsComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() showStatus: boolean;
  @Input() userId: boolean;
  @Input() isAdminViewing: boolean;
  @Output() approveRecipe = new EventEmitter<string>();
  
  constructor(private recipeStoreService: RecipeStoreService) { }

  ngOnInit() {
  }

  public approve(recipeId: string) {
    this.approveRecipe.emit(recipeId);
  }

  public deleteRecipe(recipeId: string){
    this.recipeStoreService.deleteRecipe(recipeId);
  }
}
