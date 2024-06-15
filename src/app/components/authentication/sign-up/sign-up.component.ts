import { Component } from '@angular/core';

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

  onSignUp() {
    // Add sign-up logic here
    console.log('User signed up', this.user);
  }
}
