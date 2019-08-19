import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule, CoreModule} from 'core';
import {AuthModuleConfig, CoreModuleConfig} from 'core/lib/interfaces/config.model';


export const CORE_CONFIG: CoreModuleConfig = {
  storage: {
    perfix: 'ZarsamErpAP'
  }
};
export const AUTH_CONFIG: AuthModuleConfig = {
  loginEndPoint: 'خن'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(CORE_CONFIG),
    AuthModule.forRoot(AUTH_CONFIG),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
