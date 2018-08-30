import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormControlMessageComponent } from './forms/form-control-message/form-control-message.component';
import { RouterModule } from '@angular/router';
import { RecipeShortDetailsComponent } from '../recipe/recipe-short-details/recipe-short-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FormControlMessageComponent, RecipeShortDetailsComponent, NotFoundComponent],
  exports: 
  [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormControlMessageComponent,
    RecipeShortDetailsComponent,
    NgxPaginationModule
  ]
})
export class SharedModule { }
