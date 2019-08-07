import {Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {Query} from './classes/query.class';
import {QueryService} from './services/query.service';
import {QUERY_SERVICE_TYPE} from './internal-injectionTokens';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: []
})
export class CoreModule {

  constructor(injector: Injector) {
    window['$$$_root_injector'] = injector;
  }

  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: Query,
          useClass: QueryService
        },
        {
          provide: QUERY_SERVICE_TYPE,
          useValue: QueryService
        },
      ]
    };
  }
}
