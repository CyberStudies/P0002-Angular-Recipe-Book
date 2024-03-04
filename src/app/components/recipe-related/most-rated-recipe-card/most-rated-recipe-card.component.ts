// most-rated-recipe-card.component.ts
import { Component, Input } from '@angular/core';
import recipes from '../../../../utils/recipes';
import { FoodType } from '../../../../utils/enums';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-most-rated-recipe-card',
  templateUrl: './most-rated-recipe-card.component.html',
  styleUrls: ['./most-rated-recipe-card.component.scss'],
  providers: [DecimalPipe],
})
export class MostRatedRecipeCardComponent {
  @Input() recipe: any;
  allRecipes: Recipe[] = recipes;

  constructor(private decimalPipe: DecimalPipe) {}

  mapFoodTypeName(type: FoodType): string {
    switch (type) {
      case FoodType.Coffee:
        return 'Coffee';
      case FoodType.Lunch:
        return 'Lunch';
      case FoodType.Dinner:
        return 'Dinner';
      case FoodType.Drinks:
        return 'Drinks';
      case FoodType.Others:
        return 'Others';
      default:
        return 'Unknown';
    }
  }
  formatLikes(likes: number): string {
    const formattedLikes = this.decimalPipe.transform(likes, '1.0-0');
    return formattedLikes !== null ? formattedLikes.replace(/,/g, '.') : '';
  }
}

interface Recipe {
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
  type: FoodType;
}
