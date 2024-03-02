const recipes: Recipe[] = [
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
    likes: 100,
    type: 1,
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
    likes: 200,
    type: 2,
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
    likes: 400,
    type: 4,
  },
  {
    name: 'Savory Chicken Stir-Fry',
    ingredients: [
      '500g boneless chicken breast, sliced',
      '2 cups broccoli florets',
      '1 bell pepper, thinly sliced',
      '3 cloves garlic, minced',
      '2 tablespoons soy sauce',
      '1 tablespoon oyster sauce',
      '1 teaspoon sesame oil',
      '1 tablespoon vegetable oil',
      'Salt and pepper to taste',
      'Cooked rice for serving',
    ],
    image: '/assets/Img/food/f4.jpg',
    date: 1712645418,
    likes: 150,
    type: 0,
  },
  {
    name: 'Banana Drink',
    ingredients: [
      '500g boneless chicken breast, sliced',
      '2 cups broccoli florets',
      '1 bell pepper, thinly sliced',
      '3 cloves garlic, minced',
      '2 tablespoons soy sauce',
      '1 tablespoon oyster sauce',
      '1 teaspoon sesame oil',
      '1 tablespoon vegetable oil',
      'Salt and pepper to taste',
      'Cooked rice for serving',
    ],
    image: '/assets/Img/food/f4.jpg',
    date: 1712645418,
    likes: 150,
    type: 3,
  },
];

interface Recipe {
  name: string;
  ingredients: string[];
  image: string;
  date: number;
  likes: number;
  type: number;
}

export default recipes;
