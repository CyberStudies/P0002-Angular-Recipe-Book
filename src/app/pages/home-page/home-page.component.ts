import { Component, AfterViewInit } from '@angular/core';
import recipes from '../../utils/recipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  sortedRecipes: Recipe[] = [];
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Create a copy of the recipes array
    this.sortedRecipes = [...this.allRecipes];

    // Sort the copied array by likes in descending order
    this.sortedRecipes.sort((a, b) => b.likes - a.likes);

    // Get the top 5 recipes
    this.sortedRecipes = this.sortedRecipes.slice(0, 5);
  }

  allRecipes: Recipe[] = recipes;
  goTo(id: Number) {
    this.router.navigate(['/selected-recipe', id]);
  }
}

interface Recipe {
  id: Number;
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
}
