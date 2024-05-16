import { Component } from '@angular/core';
import { Section, Ingredient, PreparationStep } from '@/models/recipe.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  sections: Section[] = [];
  selectedType: string | undefined;
  condition: number = 1;
  serve: number | undefined;

  validateServe(event: Event) {
    const num = (event.target as HTMLInputElement).value;
    const parsedNum = parseInt(num, 10);

    if (isNaN(parsedNum) || parsedNum < 1 || parsedNum > 32) {
      console.error('Invalid serve value');
      this.serve = 1;
    } else {
      this.serve = parsedNum;
    }
    console.log(this.serve);
  }

  changeCost(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (value === '2') {
      this.condition = 2;
    } else if (value === '3') {
      this.condition = 3;
    } else {
      this.condition = 1;
    }
  }

  selectType(type: string) {
    this.selectedType = type;
    console.log(this.selectedType);
  }

  next = false;

  addSection() {
    this.sections.push({
      name: '',
      ingredients: [],
      preparationSteps: [],
    });
  }
  addIngredient(sectionIndex: number) {
    this.sections[sectionIndex].ingredients.push({ name: '', quantity: '' });
  }

  addPreparationStep(sectionIndex: number) {
    this.sections[sectionIndex].preparationSteps.push({ description: '' });
  }
}
