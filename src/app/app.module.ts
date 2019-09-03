import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AUTH_CONFIG, CORE_CONFIG, UI_CONFIG} from './module.config';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule, CoreModule, UIModule} from 'core';
import {ModalTestComponent} from './modal-test/modal-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		ModalTestComponent
	],
	imports: [
		BrowserModule,
		AuthModule.forRoot(AUTH_CONFIG),
		CoreModule.forRoot(CORE_CONFIG),
		UIModule.forRoot(UI_CONFIG),
		HttpClientModule,
		RoutingModule,
		ReactiveFormsModule
	],
	entryComponents: [
		ModalTestComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
