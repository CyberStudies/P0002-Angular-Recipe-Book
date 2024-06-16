import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '@/models/recipe.model';
import { FirebaseService } from '@/services/firebase/firebase.service';

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
  allPreparationSteps: string[] = [];
  expandedSectionIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || 'Id not found';
    console.log('Fetching recipe for ID:', this.id); // Debugging log
    this.recipe = await this.firebaseService.getRecipe(this.id);
    console.log('Fetched recipe:', this.recipe); // Debugging log
    this.extractPreparationSteps();
  }

  extractPreparationSteps() {
    this.allPreparationSteps = [];
    if (this.recipe && this.recipe.sections) {
      this.recipe.sections.forEach((section) => {
        if (section.preparationSteps) {
          this.allPreparationSteps = this.allPreparationSteps.concat(
            section.preparationSteps.map((step) => step.description)
          );
        }
      });
    }
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
