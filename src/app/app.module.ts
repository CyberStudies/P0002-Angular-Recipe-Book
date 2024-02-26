import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MostRatedRecipeCardComponent } from './components/recipe-related/most-rated-recipe-card/most-rated-recipe-card.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RecipeComponent,
    NavBarComponent,
    MostRatedRecipeCardComponent,
    FavouritesComponent,
    AddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
