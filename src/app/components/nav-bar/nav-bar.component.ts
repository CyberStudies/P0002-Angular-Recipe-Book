// nav-bar.component.ts
import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { SearchService } from '@/services/search.service';
import { AutocompleteService } from '@/services/autocomplete.service';
import { FoodType } from '@/utils/enums';
import { FoodFilterService } from '@/services/food-filter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  links = [
    { path: '/home', label: 'Home' },
    { path: '/explore', label: 'Recipes' },
    { path: '/favourites', label: 'Favourites' },
    { path: '/add', label: 'Add' },
  ];

  dropdownVisible = false;
  FoodType = FoodType;

  isExploreRoute = false;
  autocompleteSuggestions: string[] = [];

  constructor(
    public router: Router,
    public searchService: SearchService,
    private foodFilterService: FoodFilterService,
    private autocompleteService: AutocompleteService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isExploreRoute = event.urlAfterRedirects.includes('/explore');
      }
    });
  }
  ngAfterViewInit(): void {}
  selectedIndex = -1;
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'f') {
      event.preventDefault();
      if (this.router.url !== '/explore') {
        this.router.navigate(['/explore']).then(() => {
          if (this.searchInput && this.searchInput.nativeElement) {
            this.searchInput.nativeElement.focus();
          }
        });
      } else {
        if (this.searchInput && this.searchInput.nativeElement) {
          this.searchInput.nativeElement.focus();
        }
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

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectFoodType(type: FoodType): void {
    this.foodFilterService.changeFoodType(type);
  }

  onSearchInputChange(term: string) {
    this.searchService.updateSearchTerm(term);
    if (term) {
      this.autocompleteSuggestions =
        this.autocompleteService.getAutocompleteSuggestions(term);
      this.selectedIndex = -1; // Reset the selected index when the input changes
    } else {
      this.autocompleteSuggestions = [];
    }
  }

  onSearchSubmit(term: string) {
    this.autocompleteService.insert(term);
  }
  onSuggestionClick(suggestion: string) {
    this.searchService.updateSearchTerm(suggestion);
    this.searchInput.nativeElement.value = suggestion;
    this.autocompleteSuggestions = [];
  }
}
