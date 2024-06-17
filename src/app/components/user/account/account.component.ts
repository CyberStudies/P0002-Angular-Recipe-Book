import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userName: string | null = null;
  userPhoto: string | null = null;
  userRecipes: any[] = [];
  favouriteRecipes: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.authService.getUserDataFromDatabase(user.uid).then((userData) => {
        if (userData) {
          this.userName = userData['name'] || user.email; // Use email if name is not available
          this.userPhoto = userData['photoURL'];
          this.userRecipes = userData['userRecipes'];
          this.favouriteRecipes = userData['favourites'];
        }
      });
    }
  }

  onSignOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
