import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApiFacade } from '../../../../../auth/client/application/src/lib/application/auth-api.facade';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResourceManagementGuard implements CanActivate {
  constructor(private authApiFacade: AuthApiFacade, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authApiFacade.isUserLogged$.pipe(
      map((isUserLogged) => {
        if (isUserLogged) {
          return true;
        } else {
          return this.router.createUrlTree(['/']);
        }
      })
    );
  }
}
