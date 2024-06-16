// last-updated.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '@/services/navigation.service';
import { DateService } from '@/services/date.service';
// import { RecipeSummary } from '@/models/recipe-summary.model';
import { Ingredient, Recipe } from '@/models/recipe.model';

@Component({
  selector: 'app-last-updated',
  templateUrl: './last-updated.component.html',
  styleUrls: ['./last-updated.component.scss'],
})
export class LastUpdatedComponent implements OnInit {
  @Input() recipe: Recipe;
  date: string = 'no data found';
  currentPage = 1;
  pageSize = 4;
  totalPages: number = 1;

  ingredients: string[] = [];

  constructor(
    private navigationService: NavigationService,
    private dateService: DateService
  ) {
    this.recipe = {
      id: '0',
      name: '',
      image: '',
      date: 0,
      likes: 0,
      type: 1,
      sections: [],
    };
  }

  ngOnInit() {
    this.date = this.dateService.getFormattedDate(this.recipe.date);

    // Populate the ingredients array
    this.recipe.sections.forEach((section) => {
      section.ingredients.forEach((ingredient) => {
        this.ingredients.push(
          `${ingredient.name} (${ingredient.quantity} ${ingredient.kind}`
        );
      });
    });

    // Add empty strings until the length of the ingredients array is divisible by 4
    while (this.ingredients.length % 4 !== 0) {
      this.ingredients.push('');
    }

    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.ingredients.length / this.pageSize);
  }

  goto(id: string) {
    this.navigationService.goto(id);
  }
}
