import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import recipes from '../../utils/recipes';
import { Router } from '@angular/router';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  sortedRecipes: Recipe[] = [];
  allRecipes: Recipe[] = recipes.map((recipe) => ({
    ...recipe,
    id: Number(recipe.id),
  }));

  constructor(private router: Router) {}

  ngOnInit() {
    this.sortedRecipes = [...this.allRecipes];
    this.sortedRecipes.sort((a, b) => b.likes - a.likes);
    this.sortedRecipes = this.sortedRecipes.slice(0, 5);
  }

  goto(id: number) {
    this.router.navigate(['/selected-recipe', id]);
  }

  trackByRecipeId(index: number, recipe: Recipe): number {
    return recipe.id;
  }
}
