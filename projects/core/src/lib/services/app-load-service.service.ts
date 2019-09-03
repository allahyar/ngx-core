import {Inject, Injectable} from '@angular/core';
import {CoreTranslateService} from './core-translate.service';
import {AuthenticationService} from './authentication.service';
import {InjectToken} from '../decorators/inject.decorator';
import {AuthModuleConfig} from '../interfaces/config.model';

@Injectable()
export class AppLoadService {

	@InjectToken(AuthenticationService) _authService: AuthenticationService;

	constructor(private _translateService: CoreTranslateService,
				@Inject('authConfig') private config: AuthModuleConfig) {
	}

	initializeApp(): Promise<any> {
		return new Promise((resolve, reject) => {
			this._translateService.loaded.subscribe(completed => {
				if (completed) {
					if (!this.config.useTokenVerify) {
						reject();
						return true;
					}
					this._authService.verifyToken().subscribe(res => {
						resolve();
						return true;
					});
				}
			});
		});
	}

}
