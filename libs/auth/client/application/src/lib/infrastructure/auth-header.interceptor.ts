import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthDataService} from "@tin/auth/client/application";
import {first, map, switchMap} from "rxjs/operators";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private authDataService: AuthDataService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return this.authDataService.authToken$.pipe(first(), switchMap(authToken => {
      if(authToken) {
        return next.handle(req.clone({headers: req.headers.set('Authorization', 'Bearer ' + authToken)}));
      } else {
        return next.handle(req);
      }
    }))
  }
}
