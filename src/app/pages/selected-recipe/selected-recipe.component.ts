import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '@/models/recipe.model';
import recipes from '@/utils/recipes';

@Component({
  selector: 'app-selected-recipe',
  templateUrl: './selected-recipe.component.html',
  styleUrls: ['./selected-recipe.component.scss'],
})
export class SelectedRecipeComponent implements OnInit {
  id: string = 'String not found';
  recipe: Recipe | undefined;
  hover = false;
  charts: any = [
    { name: 'Tastyness', level: 9 },
    { name: 'Difficulty', level: 1 },
    { name: 'Approval', level: 4 },
  ];

  expandedSectionIndex: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || 'Id not found';
    this.recipe = recipes.find(
      (recipe: Recipe) => recipe.id === Number(this.id)
    );
  }

  toggleSection(index: number) {
    if (this.expandedSectionIndex === index) {
      this.expandedSectionIndex = null;
    } else {
      this.expandedSectionIndex = index;
    }
  }

  isSectionOpen(index: number): boolean {
    return this.expandedSectionIndex === index;
  }
}
