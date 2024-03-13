import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
  title = 'P0002-Angular-Recipe-Book';
}
