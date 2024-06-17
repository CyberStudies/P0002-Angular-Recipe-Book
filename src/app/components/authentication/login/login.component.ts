import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.getUser()) {
      this.router.navigate(['./user/account']);
    }
  }

  onLogin() {
    this.authService
      .signIn(this.user.username, this.user.password)
      .then((user) => {
        if (user) {
          // Navigate to dashboard
          this.router.navigate(['../']);
        }
      })
      .catch((error) => {
        console.log('Error logging in', error);
      });
  }

  onLoginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((user) => {
        if (user) {
          // Navigate to dashboard
          this.router.navigate(['../']);
        }
      })
      .catch((error) => {
        console.log('Error logging in with Google', error);
      });
  }
}
