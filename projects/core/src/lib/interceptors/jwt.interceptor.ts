import {Inject, Injectable} from '@angular/core';
import {TokenService} from '../services/token.service';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Token} from '../classes/token.class';
import {AuthModuleConfig} from '../interfaces/config.model';

@Injectable({
	providedIn: 'root'
})
export class JwtInterceptor {

	constructor(@Inject('authConfig') private config: AuthModuleConfig,
				private _tokenService: TokenService) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token: Token = this._tokenService.getToken();

		if (token && !token.isExpired()) {
			// {headers: req.headers.set(this.config.headerName, this.config.headerPrefix + ' ' + token.token)}
			req = req.clone({
				setHeaders: {Authorization: `${this.config.headerPrefix} ${token.token}`}
			});
		}

		return next.handle(req);
	}

}
