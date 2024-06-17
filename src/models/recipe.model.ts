import { FoodType } from '@/utils/enums';
import { Timestamp } from 'firebase/firestore/lite';

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
  serve: number;
  userId: string;
  cost: number;
}
