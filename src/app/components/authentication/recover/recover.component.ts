import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {
  user: any = {};

  constructor(private router: Router) {}

  onRecover() {
    // Implement your recovery logic here
    // For example, you can send a password reset email to the provided email address
    console.log('Recovery initiated for email:', this.user.email);
    // After initiating recovery, you can redirect the user to another page
    // For example, back to the login page
    this.router.navigate(['/login']);
  }
}
