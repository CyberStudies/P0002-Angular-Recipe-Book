import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Recipe } from '@/models/recipe.model';
import { NavigationService } from '@/services/navigation.service';
import { FirebaseService } from '@/services/firebase/firebase.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  sortedRecipes: Recipe[] = [];
  allRecipes: Recipe[] = []; // Directly assign recipes data to allRecipes
  lastUpdatedRecipes: Recipe[] = [];

  constructor(
    private navigationService: NavigationService,
    private firebaseService: FirebaseService // Inject FirebaseService
  ) {}

  ngOnInit() {
    this.firebaseService.recipes$.subscribe((recipes) => {
      this.allRecipes = recipes;
      this.sortedRecipes = [...this.allRecipes];
      this.sortedRecipes.sort((a, b) => b.likes - a.likes);
      this.sortedRecipes = this.sortedRecipes.slice(0, 5); // Get the top 5 most rated recipes

      // Sort allRecipes by date in descending order
      this.allRecipes.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Get the last 10 recipes based on their date
      this.lastUpdatedRecipes = this.allRecipes.slice(0, 10);
    });
  }

  goto(id: string) {
    this.navigationService.goto(id);
  }

  trackByRecipeId(index: number, recipe: Recipe): string {
    return recipe.id;
  }
}
