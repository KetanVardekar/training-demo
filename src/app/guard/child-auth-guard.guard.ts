import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

export const childAuthGuardGuard: CanActivateFn = (route, state) => {
  const sharedService = inject(SharedService);
  const router = inject(Router);
  
  if (sharedService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
