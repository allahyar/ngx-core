import {Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {Query} from './classes/query.class';
import {QueryService} from './services/query.service';
import {HttpClientModule} from '@angular/common/http';
import {LOCAL_STORAGE_CONFIG, LOCAL_STORAGE_TOKEN, QUERY_SERVICE_TOKEN} from './tokens.injection';
import {LocalStorage} from './services/local-storage.service';
import {ModuleConfig} from './interfaces/config.model';

export function provideStorageService(config: LOCAL_STORAGE_CONFIG): LocalStorage {
  return new LocalStorage(config);
}

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: []
})
export class CoreModule {

  constructor(injector: Injector) {
    window['$$$_root_injector'] = injector;
  }

  static forRoot(config?: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: Query,
          useClass: QueryService
        },
        {
          provide: QUERY_SERVICE_TOKEN,
          useValue: QueryService
        },
        {
          provide: LOCAL_STORAGE_TOKEN,
          useValue: config
        },
        {
          provide: LocalStorage,
          useClass: provideStorageService,
          deps: [LOCAL_STORAGE_TOKEN]
        },
      ]
    };
  }
}

