// recipe.model.ts
import { FoodType } from '../utils/enums';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  date: number;
  likes: number;
  type: FoodType;
}
// recipe.model.ts
export interface Ingredient {
  name: string;
  quantity: string;
}

export interface PreparationStep {
  description: string;
}

export interface Section {
  name: string;
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
}
