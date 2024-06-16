import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import recipes from '../../../utils/recipes';
import { Recipe } from '@/models/recipe.model';
import { NavigationService } from '@/services/navigation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  sortedRecipes: Recipe[] = [];
  allRecipes: Recipe[] = recipes; // Directly assign recipes data to allRecipes
  lastUpdatedRecipes: Recipe[] = [];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.sortedRecipes = [...this.allRecipes];
    this.sortedRecipes.sort((a, b) => b.likes - a.likes);
    this.sortedRecipes = this.sortedRecipes.slice(0, 5); // Get the top 5 most rated recipes

    // Sort allRecipes by date in descending order
    this.allRecipes.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Get the last 10 recipes based on their date
    this.lastUpdatedRecipes = this.allRecipes.slice(0, 10);
  }

  goto(id: string) {
    this.navigationService.goto(id);
  }

  trackByRecipeId(index: number, recipe: Recipe): string {
    return recipe.id;
  }
}
