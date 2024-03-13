import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: string;

  constructor() {
    // Set a default theme
    this.theme = 'dark-theme';
  }

  // Method to set the theme
  setTheme(theme: string) {
    this.theme = theme;
    this.applyTheme();
  }

  // Method to apply the theme
  private applyTheme() {
    // Remove the old theme from the body
    document.body.classList.remove(
      'light-theme',
      'dark-theme',
      'anime-theme-dark',
      'anime-theme-light'
    );

    // Add the new theme to the body
    document.body.classList.add(this.theme);
  }
}
