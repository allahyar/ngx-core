import {Injectable} from '@angular/core';
import {CoreTranslateService} from './core-translate.service';

@Injectable()
export class AppLoadService {

	constructor(private _translateService: CoreTranslateService) {
	}

	initializeApp(): Promise<any> {
		return new Promise((resolve, reject) => {
			this._translateService.loaded.subscribe(completed => {
				if (completed) {
					resolve();
				}
			});
		});
	}

}
