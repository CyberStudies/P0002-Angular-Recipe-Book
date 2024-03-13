import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-recipe',
  templateUrl: './selected-recipe.component.html',
  styleUrl: './selected-recipe.component.scss',
})
export class SelectedRecipeComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
    });
  }
}
