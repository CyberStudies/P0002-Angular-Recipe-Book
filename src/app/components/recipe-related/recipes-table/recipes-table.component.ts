// my-component.ts
import { Component } from '@angular/core';
import recipes from '../../../../utils/recipes';
import { FoodType } from '../../../../utils/enums';

@Component({
  selector: 'app-recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.scss'],
})
export class RecipesTableComponent {
  allRecipes: Recipe[] = recipes;
  currentPage: number = 1;
  allPages: number = Math.ceil(recipes.length / 20);

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
}

interface Recipe {
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
  type: FoodType;
}
