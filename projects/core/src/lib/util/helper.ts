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

export function init_app(appLoadService: AppLoadService) {
	return () => appLoadService.initializeApp();
}
