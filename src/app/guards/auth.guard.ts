// src/app/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = !!authService.getUser(); // Check if the user is logged in

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    return router.createUrlTree(['/user/auth']);
  }

  return true;
};
