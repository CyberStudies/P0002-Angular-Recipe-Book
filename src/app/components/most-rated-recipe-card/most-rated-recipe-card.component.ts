// most-rated-recipe-card.component.ts
import { Component, Input } from '@angular/core';
import recipes from '@/utils/recipes';
import { FoodType } from '@/utils/enums';
import { Recipe } from '@/models/recipe.model';

@Component({
  selector: 'app-most-rated-recipe-card',
  templateUrl: './most-rated-recipe-card.component.html',
  styleUrls: ['./most-rated-recipe-card.component.scss'],
})
export class MostRatedRecipeCardComponent {
  private _recipe: Recipe | undefined;

  @Input()
  set recipe(value: Recipe) {
    this._recipe = value;
  }

  get recipe(): Recipe {
    if (!this._recipe) {
      return {
        id: 0,
        name: '',
        ingredients: [],
        instructions: [],
        image: '',
        date: 0,
        likes: 0,
        type: FoodType.Others,
      };
    }
    return this._recipe;
  }
  allRecipes: Recipe[] = recipes;

  foodTypeNames = {
    [FoodType.Coffee]: 'Coffee',
    [FoodType.Lunch]: 'Lunch',
    [FoodType.Dinner]: 'Dinner',
    [FoodType.Drinks]: 'Drinks',
    [FoodType.Others]: 'Others',
  };
}
