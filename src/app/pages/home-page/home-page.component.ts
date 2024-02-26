import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Sort the recipes array by likes in descending order
    this.recipes.sort((a, b) => b.likes - a.likes);

    // Get the top 5 recipes
    this.recipes = this.recipes.slice(0, 5);
  }
  recipes = [
    { image: '/assets/Img/food/f1.jpg', name: 'Recipe 1', likes: 100 },
    { image: '/assets/Img/food/f2.jpg', name: 'Recipe 2', likes: 200 },
    { image: '/assets/Img/food/f3.jpg', name: 'Recipe 3', likes: 300 },
    { image: '/assets/Img/food/f4.jpg', name: 'Recipe 4', likes: 400 },
  ];
}
