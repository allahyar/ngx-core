import {APP_INITIALIZER, Inject, Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {Query} from './classes/query.class';
import {QueryService} from './services/query.service';
import {HttpClientModule} from '@angular/common/http';
import {CoreModuleConfig} from './interfaces/config.model';
import {DEFAULT_LANG, QUERY_SERVICE_TOKEN, SUPPORT_LANG} from './tokens';
import {InjectToken} from './decorators/inject.decorator';
import {TranslateModule} from '@ngx-translate/core';
import {init_app, translateModuleOptions} from './util/helper';
import {UiService} from './services/ui.service';
import {CoreTranslateService} from './services/core-translate.service';
import {AppLoadService} from './services/app-load-service.service';


@NgModule({
	declarations: [],
	imports: [
		HttpClientModule,
		TranslateModule.forRoot(translateModuleOptions)
	],
	exports: [TranslateModule]
})
export class CoreModule {

	@InjectToken(CoreTranslateService)
	_translateService: CoreTranslateService;

	@InjectToken(UiService)
	_uiService: UiService;

	constructor(@Inject(DEFAULT_LANG) defaultLang: string,
				@Inject(SUPPORT_LANG) supportLang: string[],
				injector: Injector) {

		window['$$$_root_injector'] = injector;

		this._translateService.addLangs(supportLang);
		this._translateService.setDefaultLang(defaultLang);
		this._translateService.use(defaultLang).subscribe(res => {

			const dir = defaultLang === 'fa' ? 'rtl' : 'ltr';
			this._uiService.setDirection(dir);
			this._translateService.isCompleted();

		});


	}


	static forRoot(config?: CoreModuleConfig): ModuleWithProviders {

		return {
			ngModule: CoreModule,
			providers: [
				UiService,
				CoreTranslateService,
				AppLoadService,
				{provide: APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true},
				{provide: 'config', useValue: config},
				{
					provide: Query,
					useClass: QueryService
				},
				{
					provide: QUERY_SERVICE_TOKEN,
					useValue: QueryService
				},
				{
					provide: DEFAULT_LANG,
					useValue: (config && config.language.default) || 'en'
				},
				{
					provide: SUPPORT_LANG,
					useValue: (config && config.language.support) || ['en', 'fa']
				}
			]
		};
	}
}
