import { Component } from '@angular/core';
import recipes from '../../../../utils/recipes';

@Component({
  selector: 'app-recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrl: './recipes-table.component.scss',
})
export class RecipesTableComponent {
  allRecipes: Recipe[] = recipes;
}

interface Recipe {
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
}
