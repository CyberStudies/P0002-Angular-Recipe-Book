import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '@/models/recipe.model'; // Import the Recipe type from the correct location
import recipes from '@/utils/recipes';

@Component({
  selector: 'app-selected-recipe',
  templateUrl: './selected-recipe.component.html',
  styleUrls: ['./selected-recipe.component.scss'],
})
export class SelectedRecipeComponent implements OnInit {
  id: string = 'String not found';
  recipe: Recipe | undefined;
  charts: any = [
    { name: 'tastyness', level: 6 },
    { name: 'tastyness', level: 6 },
    { name: 'tastyness', level: 6 },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || 'Id not found';

    this.recipe = recipes.find((recipe) => recipe.id === Number(this.id));
  }
}
