import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  links = [
    { path: '/home', label: 'Home' },
    { path: '/recipes', label: 'Recipes' },
    { path: '/favourites', label: 'Favourites' },
    { path: '/add', label: 'Add' },
  ];

  constructor(public router: Router) {}
}
