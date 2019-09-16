import {APP_INITIALIZER, Inject, Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {Query} from './classes/query.class';
import {QueryService} from './services/query.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CoreModuleConfig} from './interfaces/config.model';
import {DEFAULT_LANG, QUERY_SERVICE_TOKEN, SUPPORT_LANG} from './tokens';
import {InjectToken} from './decorators/inject.decorator';
import {TranslateModule} from '@ngx-translate/core';
import {initializeApp, translateModuleOptions} from './util/helper';
import {UiService} from './services/ui.service';
import {CoreTranslateService} from './services/core-translate.service';
import {AppLoadService} from './services/app-load-service.service';
import {CoreHttpInterceptor} from './interceptors/core=http.interceptor';
import {BreadcrumbsService} from './services/breadcrumbs.service';
import {BreadcrumbsComponent} from './components/breadcrumbs.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
	declarations: [BreadcrumbsComponent],
	imports: [
		HttpClientModule,
		RouterModule,
		TranslateModule.forRoot(translateModuleOptions),
		CommonModule
	],
	exports: [TranslateModule, BreadcrumbsComponent]
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
				BreadcrumbsService,
				{provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppLoadService], multi: true},
				{provide: 'config', useValue: config},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: CoreHttpInterceptor,
					multi: true,
				},
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
