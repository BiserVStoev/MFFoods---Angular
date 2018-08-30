import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../../core/services';
import { RecipeKinveyModel } from '../models/recipe-kinvey.model';
import { RecipeStoreService } from '../../core/services/recipe-store.service';
import { recipePartsDelimeter } from '../../constants/constants';

const urlRegex: RegExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const ingredientRegex: RegExp = /(.*[\w]+.*)-\s*\d+\s*$/;

@Component({
  selector: 'recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  createRecipeForm: FormGroup;

  constructor(public recipeStoreService: RecipeStoreService, private auth: AuthService) { }

  ngOnInit(): void {
    this.createRecipeForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      picture: new FormControl('', [
        Validators.required, Validators.pattern(urlRegex)
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      servings: new FormControl('', [
        Validators.required, Validators.min(1)
      ]),
      protein: new FormControl('', [
        Validators.required, Validators.min(0)
      ]),
      fat: new FormControl('', [
        Validators.required, Validators.min(0)
      ]),
      carbs: new FormControl('', [
        Validators.required
      ]),
      instructions: new FormArray([new FormControl('', Validators.required)], Validators.required),
      ingredients: new FormArray([new FormControl('', Validators.required)], Validators.required)
    });
  }

  addInstruction(): void {
    this.instructions.push(new FormControl('', Validators.required));
  }

  removeInstruction(index: number): void {
    this.instructions.removeAt(index);
  }

  addIngredient(): void {
    this.ingredients.push(new FormControl('', Validators.required));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  createRecipe(): void {
    if (this.createRecipeForm.valid) {
      const { title, picture, description, carbs, fat, protein, servings, instructions, ingredients } = this.createRecipeForm.value;
      const resultInstructions = instructions.map(i => i.trim()).join(recipePartsDelimeter);
      const resultIngredients = ingredients.map(i => i.trim()).filter(i => i.match(ingredientRegex)).join(recipePartsDelimeter);
      const result: RecipeKinveyModel= {
        title: title.trim(),
        picture: picture.trim(),
        description: description.trim(),
        servings: servings,
        carbs,
        fat,
        protein,
        instructions: resultInstructions,
        ingredients: resultIngredients,
        isApproved: false,
        publisher: this.auth.getUserId()
      }

      this.recipeStoreService.createRecipe(result);
    }
  }

  get title(): AbstractControl {
    return this.createRecipeForm.get('title');
  }

  get picture(): AbstractControl {
    return this.createRecipeForm.get('picture');
  }

  get description(): AbstractControl {
    return this.createRecipeForm.get('description');
  }

  get servings(): AbstractControl {
    return this.createRecipeForm.get('servings');
  }

  get protein(): AbstractControl {
    return this.createRecipeForm.get('protein');
  }

  get carbs(): AbstractControl {
    return this.createRecipeForm.get('carbs');
  }

  get fat(): AbstractControl {
    return this.createRecipeForm.get('fat');
  }

  get instructions(): FormArray {
    return <FormArray>this.createRecipeForm.get('instructions');
  }

  get ingredients(): FormArray {
    return <FormArray>this.createRecipeForm.get('ingredients');
  }
}
