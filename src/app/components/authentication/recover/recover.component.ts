import { Component } from '@angular/core';
import { AuthService } from '@/services/auth/auth.service';
import { Router } from '@angular/router';
import { sendPasswordResetEmail } from 'firebase/auth';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {
  user: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  async onRecover() {
    try {
      await sendPasswordResetEmail(this.authService.getAuth(), this.user.email);
      console.log('Recovery email sent');
      this.router.navigate(['./']);
    } catch (error) {
      console.log('Error sending recovery email', error);
    }
  }
}
