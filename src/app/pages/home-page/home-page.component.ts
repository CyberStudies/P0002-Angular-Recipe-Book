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
  last_updated = [
    {
      name: 'Risoli muito louco',
      ingredients: [
        '4 Eggs',
        '1 cup of oil',
        '1 spoon of salt',
        'free sugar',
        '200 pounds of flour',
        '500 grams of ham',
        '1 litter of lemon juice',
      ],
      image: '/assets/Img/food/f1.jpg',
      date: 1712645415,
    },
    {
      name: 'Delicious Pasta',
      ingredients: [
        '200 grams of pasta',
        '2 cups of water',
        '1 spoon of salt',
        '1 spoon of olive oil',
        '100 grams of parmesan cheese',
        '200 grams of tomato sauce',
      ],
      image: '/assets/Img/food/f2.jpg',
      date: 1712645416,
    },
    {
      name: 'Tasty Pizza',
      ingredients: [
        '1 pizza dough',
        '1 cup of tomato sauce',
        '1 cup of mozzarella cheese',
        '100 grams of pepperoni',
        '1 spoon of olive oil',
        '1 pinch of salt',
      ],
      image: '/assets/Img/food/f3.jpg',
      date: 1712645417,
    },
  ];
}
