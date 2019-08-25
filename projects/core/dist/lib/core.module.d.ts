import { Injector, ModuleWithProviders } from '@angular/core';
import { CoreModuleConfig } from './interfaces/config.model';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from './services/ui.service';
export declare class CoreModule {
    _translateService: TranslateService;
    _uiService: UiService;
    constructor(defaultLang: string, supportLang: string[], injector: Injector);
    static forRoot(config?: CoreModuleConfig): ModuleWithProviders;
}
