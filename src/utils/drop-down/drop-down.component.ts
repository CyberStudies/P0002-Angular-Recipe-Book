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
  ngAfterViewInit() {
    this.addClickOutsideListener();
  }
  constructor(private foodFilterService: FoodFilterService) {}
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectFoodType(type: FoodType): void {
    this.foodFilterService.changeFoodType(type);
  }
  addClickOutsideListener() {
    document.addEventListener('click', (event) => {
      if (!this.isClickInsideDropdown(event)) {
        this.dropdownVisible = false;
      }
    });
  }

  isClickInsideDropdown(event: Event): boolean {
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    return (
      (dropdownButton &&
        dropdownContent &&
        (dropdownButton.contains(event.target as Node) ||
          dropdownContent.contains(event.target as Node))) ||
      false
    );
  }
}
