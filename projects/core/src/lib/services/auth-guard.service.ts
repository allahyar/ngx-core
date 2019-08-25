import {Inject, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenService} from './token.service';
import {InjectToken} from '../decorators/inject.decorator';
import {AuthenticationService} from './authentication.service';
import {AuthModuleConfig} from '../interfaces/config.model';

@Injectable({
	providedIn: 'root'
})
export class LoggedInAuth implements CanActivate {


	@InjectToken(AuthenticationService)
	_authenticationService: AuthenticationService;

	@InjectToken(TokenService)
	_tokenService: TokenService;

	@InjectToken(Router)
	_router: Router;

	constructor(@Inject('config') private config: AuthModuleConfig) {
	}

	canActivate() {

		const token = this._tokenService.getToken();

		if (token && token.token) {
			return !token.isExpired();
		}

		let redirectUrl = this.config.guards.loggedInGuard.redirectUrl;
		if (redirectUrl) {
			return this._router.navigate([redirectUrl]);
		}
		return false;

	}
}


@Injectable({
	providedIn: 'root'
})
export class LoggedOutAuth implements CanActivate {

	@InjectToken(AuthenticationService)
	_authenticationService: AuthenticationService;

	@InjectToken(TokenService)
	_tokenService: TokenService;

	@InjectToken(Router)
	_router: Router;

	constructor(@Inject('config') private config: AuthModuleConfig) {
	}

	canActivate() {

		const token = this._tokenService.getToken();

		if (token && token.token && !token.isExpired()) {
			const redirectUrl = this.config.guards.loggedOutGuard.redirectUrl;
			if (redirectUrl) {
				return this._router.navigate([redirectUrl]);
			}
			return false;
		}
		return true;
	}
}
