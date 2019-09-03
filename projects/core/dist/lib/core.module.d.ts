import { Injector, ModuleWithProviders } from '@angular/core';
import { CoreModuleConfig } from './interfaces/config.model';
import { UiService } from './services/ui.service';
import { CoreTranslateService } from './services/core-translate.service';
export declare class CoreModule {
    _translateService: CoreTranslateService;
    _uiService: UiService;
    constructor(defaultLang: string, supportLang: string[], injector: Injector);
    static forRoot(config?: CoreModuleConfig): ModuleWithProviders;
}
