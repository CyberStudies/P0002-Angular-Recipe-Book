// most-rated-recipe-card.component.ts
import { Component, Input } from '@angular/core';
import { FoodType } from '@/utils/enums';
import { Recipe } from '@/models/recipe.model';
import { Timestamp } from 'firebase/firestore';

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
        id: '0',
        name: '',
        image: '',
        sections: [],
        date: 0,
        likes: 0,
        type: FoodType.Others,
        serve: 1,
        userId: '',
        cost: 1,
      };
    }
    return this._recipe;
  }

  foodTypeNames = {
    [FoodType.Coffee]: 'Coffee',
    [FoodType.Lunch]: 'Lunch',
    [FoodType.Dinner]: 'Dinner',
    [FoodType.Drinks]: 'Drinks',
    [FoodType.Others]: 'Others',
  };
}
