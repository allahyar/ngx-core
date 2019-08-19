import {Injectable} from '@angular/core';
import {TokenService} from '../services/token.service';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Token} from '../classes/token.class';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor {

  // constructor(private config: AuthConfig, private _tokenService: TokenService) {
  //   this.config = new AuthConfig(config);
  // }
  //
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //
  //   const token: Token = this._tokenService.getToken();
  //
  //   if (token && !token.isExpired()) {
  //     req = req.clone({headers: req.headers.set(this.config.headerName, this.config.headerPrefix + ' ' + token.token)});
  //   }
  //
  //   return next.handle(req);
  // }

}
