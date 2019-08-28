import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {RouterModule} from '@angular/router';
import {LoggedInAuth, LoggedOutAuth} from './services/auth-guard.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthModuleConfig} from './interfaces/config.model';


@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule, RouterModule]
})
export class AuthModule {

	static forRoot(config?: AuthModuleConfig): ModuleWithProviders {

		return {
			ngModule: AuthModule,
			providers: [
				{provide: 'authConfig', useValue: config},
				AuthenticationService, LoggedInAuth, LoggedOutAuth,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: JwtInterceptor,
					multi: true
				}
			]
		};
	}
}
