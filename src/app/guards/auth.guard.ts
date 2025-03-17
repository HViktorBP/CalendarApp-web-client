import {CanActivateFn, Router} from '@angular/router';
import { AuthService} from '@auth0/auth0-angular';
import {inject} from '@angular/core';
import {map, tap} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    tap(isAuthenticated => {
      if (!isAuthenticated)
        router.navigate(['/login']);
    }),
    map(isAuthenticated => isAuthenticated)
  );
};
