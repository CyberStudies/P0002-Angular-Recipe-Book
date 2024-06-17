import { Component } from '@angular/core';
import { AuthService } from '@/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  async onSignUp() {
    if (this.user.password !== this.user.confirmPassword) {
      console.log('Error: Passwords do not match');
      return;
    }

    try {
      const user = await this.authService.signUp(
        this.user.email,
        this.user.password,
        this.user.username
      );
      // Navigate to dashboard
      this.router.navigate(['./']);
    } catch (error) {
      console.log('Error signing up', error);
    }
  }
}
