import { FoodType } from '@/utils/enums';

// src/models/recipe.model.ts
export interface Ingredient {
  name: string;
  quantity: string;
  kind: string;
}

export interface PreparationStep {
  description: string;
}

export interface Section {
  name: string;
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
}

export interface Recipe {
  id: string;
  name: string;
  sections: Section[];
  image: string;
  date: number;
  likes: number;
  type: FoodType;
}
