import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {isString} from '../util/string';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CoreTranslateService {

	_isLoaded = new BehaviorSubject(false);

	constructor(private _translateService: TranslateService) {
	}

	addLangs(langs: string[]): void {
		return this._translateService.addLangs(langs);
	}

	use(lang: string): Observable<any> {
		return this._translateService.use(lang);
	}

	setDefaultLang(lang: string): void {
		this._translateService.setDefaultLang(lang);
	}

	instant(
		key: string | Array<string>,
		interpolateParams?: Object
	): string | any {
		if (isString(key) && key.indexOf('_') > 0) {
			const items = (key as string).split('_');
			return items
				.map(item => this._translateService.instant(item, interpolateParams))
				.join(' ');
		}
		return this._translateService.instant(key, interpolateParams);
	}

	isCompleted() {
		this._isLoaded.next(true);
	}

	get loaded(): Observable<boolean> {
		return this._isLoaded.asObservable();
	}

}
