import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import recipes from '../../../utils/recipes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  sortedRecipes: Recipe[] = [];
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Sort the recipes array by likes in descending order
    this.sortedRecipes = this.allRecipes;

    this.sortedRecipes.sort((a, b) => b.likes - a.likes);

    // Get the top 5 recipes
    this.sortedRecipes = this.allRecipes.slice(0, 5);
  }

  allRecipes: Recipe[] = recipes;
}

interface Recipe {
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
}
