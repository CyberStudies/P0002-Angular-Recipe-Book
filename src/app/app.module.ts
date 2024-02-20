import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RecipeComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
