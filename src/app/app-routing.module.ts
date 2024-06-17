// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { AddComponent } from './pages/add/add.component';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { RecipesTableComponent } from './pages/recipes-table/recipes-table.component';
import { AuthComponent } from './components/authentication/auth/auth.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { RecoverComponent } from './components/authentication/recover/recover.component';
import { UserComponent } from './pages/user/user.component';
import { AccountComponent } from './components/user/account/account.component';
import { authGuard } from './guards/auth.guard'; // Import the authGuard

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'explore', component: RecipesTableComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'add', component: AddComponent, canActivate: [authGuard] }, // Protect the "Add" page with authGuard
  { path: 'recipe/:id', component: SelectedRecipeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` route by default

  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'account', component: AccountComponent },
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: '', component: LoginComponent },
          { path: 'sign-up', component: SignUpComponent },
          { path: 'recover', component: RecoverComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
