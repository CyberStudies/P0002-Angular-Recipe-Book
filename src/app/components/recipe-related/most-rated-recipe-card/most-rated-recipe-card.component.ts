// most-rated-recipe-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-most-rated-recipe-card',
  templateUrl: './most-rated-recipe-card.component.html',
  styleUrls: ['./most-rated-recipe-card.component.scss'],
})
export class MostRatedRecipeCardComponent {
  @Input() recipe: any; // replace with your recipe model
}
