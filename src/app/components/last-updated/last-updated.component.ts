// last-updated.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '@/services/navigation.service';
import { DateService } from '@/services/date.service';
import { PaginationService } from '@/services/pagination.service';
import { RecipeSummary } from '@/models/recipe-summary.model';

@Component({
  selector: 'app-last-updated',
  templateUrl: './last-updated.component.html',
  styleUrls: ['./last-updated.component.scss'],
})
export class LastUpdatedComponent implements OnInit {
  @Input() recipe: RecipeSummary;
  date: string = 'no data found';
  currentPage = 1;
  pageSize = 4;
  totalPages: number = 1;
  paginatedIngredients: string[];

  constructor(
    private navigationService: NavigationService,
    private dateService: DateService,
    private paginationService: PaginationService
  ) {
    this.paginatedIngredients = [];
    this.recipe = { id: 0, name: '', image: '', date: 0, ingredients: [] };
  }
  checkAndPadIngredients() {
    let remainder = this.recipe.ingredients.length % 4;
    if (remainder !== 0) {
      let itemsToAdd = 4 - remainder;
      for (let i = 0; i < itemsToAdd; i++) {
        this.recipe.ingredients.push('');
      }
    }
  }

  ngOnInit() {
    this.date = this.dateService.getFormattedDate(this.recipe.date);
    this.checkAndPadIngredients();
    this.totalPages = Math.ceil(this.recipe.ingredients.length / this.pageSize);
    this.paginatedIngredients = this.paginationService.getPaginatedItems(
      this.recipe.ingredients,
      this.pageSize
    );
  }

  goto(id: number) {
    this.navigationService.goto(id);
  }
}
