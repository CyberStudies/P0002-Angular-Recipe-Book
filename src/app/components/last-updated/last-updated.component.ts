import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-updated',
  templateUrl: './last-updated.component.html',
  styleUrls: ['./last-updated.component.scss'],
})
export class LastUpdatedComponent implements OnInit {
  @Input() recipe: any;
  constructor(private router: Router) {}

  date: string = 'no data found';
  currentPage = 1;
  pageSize = 4;
  totalPages: number = 1;

  ngOnInit() {
    this.date = this.getFormattedDate(this.recipe.date);
    this.totalPages = Math.ceil(this.recipe.ingredients.length / this.pageSize);

    // Create a new array of ingredients
    let ingredients = [...this.recipe.ingredients];

    // If the length of ingredients is not divisible by 4
    if (ingredients.length % 4 !== 0) {
      // Add empty elements to the ingredients array
      while (ingredients.length % 4 !== 0) {
        ingredients.push('');
      }
    }

    // Update the recipe ingredients
    this.recipe.ingredients = ingredients;
  }

  getFormattedDate(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return `${date.getMonth() + 1}·${date.getDate()}·${date.getFullYear()}`;
  }
  goTo(id: Number) {
    this.router.navigate(['/selected-recipe', id]);
  }
}
