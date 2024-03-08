import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { FavouritesComponent } from './pages/favourites/favourites.component';
import { AddComponent } from './pages/add/add.component';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { RecipesTableComponent } from './pages/recipes-table/recipes-table.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'recipes', component: RecipesTableComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'add', component: AddComponent },
  { path: 'selected-recipe/:id', component: SelectedRecipeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` route by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
