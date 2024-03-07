import { Component } from '@angular/core';
import { FoodType } from '@/utils/enums';
import { FoodFilterService } from '@/services/food-filter.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  dropdownVisible = false;
  FoodType = FoodType;

  constructor(private foodFilterService: FoodFilterService) {}
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectFoodType(type: FoodType): void {
    this.foodFilterService.changeFoodType(type);
  }
}
