import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { SharedService } from '../service/shared.service';

export const auth1Guard: CanActivateFn = (route, state) => {
  const sharedService = inject(SharedService);
  const router = inject(Router);
  
  if (sharedService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
