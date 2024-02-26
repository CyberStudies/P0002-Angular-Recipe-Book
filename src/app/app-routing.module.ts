import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'recipes', component: RecipeComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` route by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
