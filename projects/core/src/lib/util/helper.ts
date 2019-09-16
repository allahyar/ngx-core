import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModuleConfig} from '@ngx-translate/core';
import {AppLoadService} from '../services/app-load-service.service';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// ngx-translate and the loader module
export const translateModuleOptions: TranslateModuleConfig = {
	loader: {
		provide: TranslateLoader,
		useFactory: (HttpLoaderFactory),
		deps: [HttpClient]
	}
};

export function initializeApp(appLoadService: AppLoadService) {
	return () => appLoadService.initializeApp();
}


export function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}


export function routePathExtract(path: string, route: any): IRoutePath  {
	if (!isEmpty(route.snapshot.params)) {
		const key = path.split('/')[0].substr(1);
		return {
			key,
			label: route.snapshot.params[key]
		};
	}
	return {
		key: null,
		label: path
	};
}

export interface IRoutePath {
	key: string;
	label: string;
}
