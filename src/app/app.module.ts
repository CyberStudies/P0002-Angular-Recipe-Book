import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MostRatedRecipeCardComponent } from './components/most-rated-recipe-card/most-rated-recipe-card.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { AddComponent } from './pages/add/add.component';
import { LastUpdatedComponent } from './components/last-updated/last-updated.component';
import { DropDownComponent } from '../utils/drop-down/drop-down.component';
import { RecipesTableComponent } from './pages/recipes-table/recipes-table.component';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { HttpClientModule } from '@angular/common/http';

import { FormatLikesPipe } from '../utils/pipes/format-likes.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MostRatedRecipeCardComponent,
    FavouritesComponent,
    AddComponent,
    LastUpdatedComponent,
    DropDownComponent,
    RecipesTableComponent,
    SelectedRecipeComponent,
    FormatLikesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
