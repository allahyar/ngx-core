import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoggedInAuth} from '../../projects/core/src/lib/services/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoggedOutAuth} from 'core';
import {HomeComponent} from './home/home.component';
import {AppWrapperComponent} from './app-wrapper/app-wrapper.component';
import {ProductListComponent} from './product-list/product-list.component';
import {UsersComponent} from './users/users.component';
import {UserCardComponent} from './user-card/user-card.component';


const routes: Routes = [
	{
		path: 'app', component: AppWrapperComponent,
		data: {title: ''},
		children: [
			{
				path: 'home', component: HomeComponent, data: {title: 'App'},
				children: [
					{path: 'product', component: ProductListComponent, data: {title: 'adadad'}}
				]
			},
			{
				path: 'users', component: UsersComponent, data: {title: 'Users'},
				children: [
					{path: ':id', redirectTo: ':id/card'},
					{path: ':id/card', component: UserCardComponent, data: {title: 'Information'}}
				]
			}
		]
	},
	{
		path: '', canActivate: [LoggedInAuth], component: DashboardComponent, data: {title: 'Heroes List'}
	},
	{
		path: 'login', canActivate: [LoggedOutAuth], component: LoginComponent, data: {title: 'Heroes List'}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule {
}
