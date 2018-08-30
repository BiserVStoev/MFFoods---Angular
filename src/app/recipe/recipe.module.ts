import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RecipeCreateComponent, RecipeDetailsComponent, RecipeAllComponent]
})
export class RecipeModule { }
