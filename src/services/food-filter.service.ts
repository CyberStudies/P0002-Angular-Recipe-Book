// food-filter.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodType } from '@/utils/enums';

@Injectable({
  providedIn: 'root',
})
export class FoodFilterService {
  private selectedFoodType = new BehaviorSubject<FoodType | null>(null);
  currentFoodType = this.selectedFoodType.asObservable();

  changeFoodType(foodType: FoodType) {
    this.selectedFoodType.next(foodType);
  }
}
