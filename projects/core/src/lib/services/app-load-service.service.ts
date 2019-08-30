import {Injectable} from '@angular/core';
import {CoreTranslateService} from './core-translate.service';
import {AuthenticationService} from './authentication.service';
import {InjectToken} from '../decorators/inject.decorator';

@Injectable()
export class AppLoadService {

	@InjectToken(AuthenticationService) _authService: AuthenticationService;

	constructor(private _translateService: CoreTranslateService) {
	}

	initializeApp(): Promise<any> {
		return new Promise((resolve, reject) => {
			this._translateService.loaded.subscribe(completed => {
				if (completed) {
					console.log('test');
					this._authService.verifyToken().subscribe(res => {
						resolve();
					});
				}
			});
		});
	}

}
