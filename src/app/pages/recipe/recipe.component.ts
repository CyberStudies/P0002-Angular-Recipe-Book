import { SearchService } from '@/services/search.service';
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(public searchService: SearchService) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'f') {
      event.preventDefault();
      if (this.searchInput && this.searchInput.nativeElement) {
        this.searchInput.nativeElement.focus();
      }
    }
  }
  addRippleEffect() {
    const button = document.querySelector('.strange-thing');
    if (button) {
      button.classList.add('ripple');
      setTimeout(() => {
        button.classList.remove('ripple');
      }, 1000);
    }
  }
}
