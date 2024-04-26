import { FoodType } from '@/utils/enums';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  selectedType: string | undefined;

  selectType(type: string) {
    this.selectedType = type;
  }

  next = false;
}
