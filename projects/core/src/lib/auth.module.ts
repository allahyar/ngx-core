import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenService} from './services/token.service';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {AuthModuleConfig} from './interfaces/config.model';
import {AUTH_SERVICE_TOKEN} from './tokens.injection';
import {AuthenticationService} from './services/authentication.service';


export function provideAuthService(config: AuthModuleConfig): AuthenticationService {
  return new AuthenticationService(config);
}


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ]
})
export class AuthModule {

  static forRoot(config?: AuthModuleConfig): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AUTH_SERVICE_TOKEN,
          useValue: config
        },
        {
          provide: AuthenticationService,
          useClass: provideAuthService,
          deps: [AUTH_SERVICE_TOKEN]
        }
      ]
    };
  }
}
