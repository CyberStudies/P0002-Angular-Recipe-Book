import { Component } from '@angular/core';
import {
  Section,
  Ingredient,
  PreparationStep,
  Recipe,
} from '@/models/recipe.model';
import { FirebaseService } from '@/services/firebase/firebase.service';
import { Timestamp } from 'firebase/firestore';
import { FoodType } from '@/utils/enums';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  sections: Section[] = [];
  selectedType: FoodType = 1;
  condition: number = 0;
  serve: number = 1;
  activeSectionIndex: number = 0;
  recipeName: string = '';
  selectedFile: File | null = null;
  recipeImage: string = '';
  userId: string | undefined = ''; // You'll need to set this based on your authentication system

  constructor(private firebaseService: FirebaseService) {
    const auth = getAuth();
    this.userId = auth.currentUser?.uid;
  }

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

  selectType(type: FoodType) {
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
    this.activeSectionIndex = this.sections.length - 1;
  }

  addIngredient(sectionIndex: number) {
    this.sections[sectionIndex].ingredients.push({
      name: '',
      quantity: '',
      kind: '',
    });
  }

  addPreparationStep(sectionIndex: number) {
    this.sections[sectionIndex].preparationSteps.push({ description: '' });
  }

  setActiveSection(index: number) {
    this.activeSectionIndex = index;
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async submitRecipe() {
    if (!this.isFormValid()) {
      console.error('Form is not valid');
      return;
    }

    if (this.selectedFile) {
      this.recipeImage = await this.firebaseService.uploadFile(
        this.selectedFile
      );
    }

    let recipe: Recipe = {
      id: '', // This will be auto-generated by Firebase
      date: Timestamp.fromDate(new Date()).toMillis(), // Current date and time as a Timestamp
      image: this.recipeImage, // The URL of the uploaded image
      name: this.recipeName, // The name of the recipe
      type: this.selectedType,
      userId: this.userId, // The user's ID from your authentication system
      likes: 0, // Initialize likes to 0
      serve: this.serve,
      cost: this.condition,
      sections: this.sections,
    };

    try {
      // Use your FirebaseService to send the recipe object to your backend and get the new recipe ID
      const recipeId = await this.firebaseService.addRecipe(recipe);
      console.log('Recipe successfully added with ID:', recipeId);

      // Update the user's userRecipes property with the new recipe ID
      if (this.userId) {
        const userData = await this.firebaseService.getUserDataFromDatabase(
          this.userId
        );
        if (userData) {
          userData.userRecipes.push(recipeId);
          await this.firebaseService.saveUserDataToDatabase(
            this.userId,
            userData
          );
          console.log('User data successfully updated with new recipe ID');
        }
      }

      // Reset the form
      this.recipeName = '';
      this.selectedType = 1;
      this.condition = 1;
      this.serve = 1;
      this.sections = [];
      this.selectedFile = null;
      this.recipeImage = '';
    } catch (error) {
      console.error('Error adding recipe or updating user data: ', error);
    }
  }

  isSectionValid(section: Section) {
    if (
      section.ingredients.length === 0 ||
      section.preparationSteps.length === 0
    ) {
      return false;
    }

    for (let ingredient of section.ingredients) {
      if (!ingredient.name || !ingredient.quantity) {
        return false;
      }
    }

    for (let step of section.preparationSteps) {
      if (!step.description) {
        return false;
      }
    }

    return true;
  }

  isFormValid() {
    if (
      !this.recipeName ||
      this.selectedType === null ||
      !this.serve ||
      this.condition === null ||
      !this.selectedFile
    ) {
      return false;
    }

    // Verifique se todas as seções são válidas
    for (let section of this.sections) {
      if (!this.isSectionValid(section)) {
        return false;
      }
    }

    // Se todas as verificações passaram, o formulário é válido
    return true;
  }

  isFirstPageValid() {
    return (
      this.recipeName !== '' &&
      this.selectedType !== null &&
      this.serve > 0 &&
      this.selectedFile !== null
    );
  }
}
