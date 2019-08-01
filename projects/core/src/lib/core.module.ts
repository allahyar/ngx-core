import {ModuleWithProviders, NgModule} from '@angular/core';
import {Query} from './services/query.class';
import {QueryService} from './services/query.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class CoreModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: Query,
          useClass: QueryService
        }
      ]
    };
  }
}
