import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/services/auth/auth.service';
import { Router } from '@angular/router';
import { Recipe } from '@/models/recipe.model';
import { FoodType } from '@/utils/enums';
import { FirebaseService } from '@/services/firebase/firebase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userName: string | null = null;
  userPhoto: string | null = null;
  userRecipeIds: string[] = [];
  favouriteRecipes: any[] = [];
  allRecipes: Recipe[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.authService.getUserDataFromDatabase(user.uid).then((userData) => {
        if (userData) {
          this.userName = userData['name'] || user.email;
          this.userPhoto = userData['photoURL'];
          this.userRecipeIds = userData['userRecipes'];
          this.favouriteRecipes = userData['favourites'];
          this.fetchUserRecipes();
        }
      });
    }
  }

  fetchUserRecipes() {
    this.firebaseService.getAllRecipes().then((data: Recipe[]) => {
      this.allRecipes = data.filter((recipe) =>
        this.userRecipeIds.includes(recipe.id)
      );
    });
  }

  get currentRecipes(): Recipe[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.allRecipes.slice(start, end);
  }

  get allPages(): number {
    return Math.ceil(this.allRecipes.length / this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.allPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  mapFoodTypeName(type: FoodType): string {
    switch (type) {
      case FoodType.Coffee:
        return 'Coffee';
      case FoodType.Lunch:
        return 'Lunch';
      case FoodType.Dinner:
        return 'Dinner';
      case FoodType.Drinks:
        return 'Drinks';
      case FoodType.Others:
        return 'Others';
      default:
        return 'Unknown';
    }
  }

  gotoRecipe(id: string) {
    this.router.navigate(['/recipe', id]);
  }

  onSignOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
