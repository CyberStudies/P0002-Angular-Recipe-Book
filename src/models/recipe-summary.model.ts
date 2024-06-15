// recipe-summary.model.ts
import { FoodType } from '@/utils/enums';
export interface RecipeSummary {
  id: number;
  name: string;
  image: string;
  date: number;
  likes: number;
  // ingredients: string[]; // Adjust the type if necessary
  type: FoodType;
}
