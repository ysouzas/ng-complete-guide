import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  debugger;

  const authUrl = inject(Router).createUrlTree(['/auth']);

  return inject(AuthService).user.pipe(
    map((user) => {
      debugger;

      const isAuth = !!user;
      debugger;
      if (isAuth) {
        return true;
      }

      return authUrl;
    })
  );
};
