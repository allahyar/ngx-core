import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoggedInAuth} from '../../projects/core/src/lib/services/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', canActivate: [LoggedInAuth], component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
