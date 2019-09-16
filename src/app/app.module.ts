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
import {ModalTest2Component} from './modal-test2/modal-test2.component';
import {HomeComponent} from './home/home.component';
import {AppWrapperComponent} from './app-wrapper/app-wrapper.component';
import {ProductListComponent} from './product-list/product-list.component';
import {UsersComponent} from './users/users.component';
import {UserCardComponent} from './user-card/user-card.component';

// import {AuthModule, CoreModule, UIModule} from '../../projects/core/src/lib/core.module';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		AppWrapperComponent,
		UserCardComponent,
		ProductListComponent,
		UsersComponent,
		HomeComponent,
		ModalTestComponent,
		ModalTest2Component
	],
	imports: [
		BrowserModule,
		RoutingModule,
		AuthModule.forRoot(AUTH_CONFIG),
		CoreModule.forRoot(CORE_CONFIG),
		UIModule.forRoot(UI_CONFIG),
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CoreModule
	],
	entryComponents: [
		ModalTestComponent,
		ModalTest2Component
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
