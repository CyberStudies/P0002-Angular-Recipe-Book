import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { RouterModule } from '@angular/router';

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
import { UserComponent } from './pages/user/user.component';
import { AuthComponent } from './components/authentication/auth/auth.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { RecoverComponent } from './components/authentication/recover/recover.component';
import { AccountComponent } from './components/user/account/account.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEF0GKLWYueeDFRiytKh8ByrO6Lo9mxG8',
  authDomain: 'devdinner-ba753.firebaseapp.com',
  projectId: 'devdinner-ba753',
  storageBucket: 'devdinner-ba753.appspot.com',
  messagingSenderId: '861359263381',
  appId: '1:861359263381:web:c535d0f66b07d8c6cbd59c',
  measurementId: 'G-E9SYZ3FFYG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    UserComponent,
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    RecoverComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
