// Login Component TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  onLogin() {
    // Implement your login logic here
    console.log('User logged in', this.user);
  }
}
