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

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.sortedRecipes = [...this.allRecipes];
    this.sortedRecipes.sort((a, b) => b.likes - a.likes);
    this.sortedRecipes = this.sortedRecipes.slice(0, 5);
  }

  goto(id: number) {
    this.navigationService.goto(id);
  }

  trackByRecipeId(index: number, recipe: Recipe): number {
    return recipe.id;
  }
}
