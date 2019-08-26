import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthModule, CoreModule, UIModule} from 'core';
import {AUTH_CONFIG, CORE_CONFIG, UI_CONFIG} from './module.config';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		CoreModule.forRoot(CORE_CONFIG),
		AuthModule.forRoot(AUTH_CONFIG),
		UIModule.forRoot(UI_CONFIG),
		HttpClientModule,
		RoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
