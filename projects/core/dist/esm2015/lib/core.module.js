/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injector, NgModule } from '@angular/core';
import { Query } from './classes/query.class';
import { QueryService } from './services/query.service';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_LANG, QUERY_SERVICE_TOKEN, SUPPORT_LANG } from './tokens';
import { InjectToken } from './decorators/inject.decorator';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateModuleOptions } from './util/helper';
import { UiService } from './services/ui.service';
export class CoreModule {
    /**
     * @param {?} defaultLang
     * @param {?} supportLang
     * @param {?} injector
     */
    constructor(defaultLang, supportLang, injector) {
        window['$$$_root_injector'] = injector;
        this._translateService.addLangs(supportLang);
        this._translateService.setDefaultLang(defaultLang);
        this._translateService.use(defaultLang).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            const dir = defaultLang === 'fa' ? 'rtl' : 'ltr';
            this._uiService.setDirection(dir);
        }));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: CoreModule,
            providers: [
                UiService,
                { provide: 'config', useValue: config },
                {
                    provide: Query,
                    useClass: QueryService
                },
                {
                    provide: QUERY_SERVICE_TOKEN,
                    useValue: QueryService
                },
                {
                    provide: DEFAULT_LANG,
                    useValue: (config && config.language.default) || 'en'
                },
                {
                    provide: SUPPORT_LANG,
                    useValue: (config && config.language.support) || ['en', 'fa']
                }
            ]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    HttpClientModule,
                    TranslateModule.forRoot(translateModuleOptions)
                ],
                exports: [TranslateModule]
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [DEFAULT_LANG,] }] },
    { type: Array, decorators: [{ type: Inject, args: [SUPPORT_LANG,] }] },
    { type: Injector }
];
tslib_1.__decorate([
    InjectToken(TranslateService),
    tslib_1.__metadata("design:type", TranslateService)
], CoreModule.prototype, "_translateService", void 0);
tslib_1.__decorate([
    InjectToken(UiService),
    tslib_1.__metadata("design:type", UiService)
], CoreModule.prototype, "_uiService", void 0);
if (false) {
    /** @type {?} */
    CoreModule.prototype._translateService;
    /** @type {?} */
    CoreModule.prototype._uiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQVdoRCxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBUXJCLFlBQWtDLFdBQW1CLEVBQ25CLFdBQXFCLEVBQzNDLFFBQWtCO1FBRTVCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUV2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7O2tCQUVoRCxHQUFHLEdBQUcsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFHRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBRXRDLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsU0FBUztnQkFDVCxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDckM7b0JBQ0UsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFFBQVEsRUFBRSxZQUFZO2lCQUN2QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSTtpQkFDdEQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztpQkFDOUQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUEzREYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixlQUFlLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO2lCQUNoRDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0I7Ozs7eUNBU2MsTUFBTSxTQUFDLFlBQVk7d0NBQ25CLE1BQU0sU0FBQyxZQUFZO1lBN0JsQixRQUFROztBQXVCdEI7SUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7c0NBQ1gsZ0JBQWdCO3FEQUFDO0FBR3BDO0lBREMsV0FBVyxDQUFDLFNBQVMsQ0FBQztzQ0FDWCxTQUFTOzhDQUFDOzs7SUFKdEIsdUNBQ29DOztJQUVwQyxnQ0FDc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UXVlcnl9IGZyb20gJy4vY2xhc3Nlcy9xdWVyeS5jbGFzcyc7XG5pbXBvcnQge1F1ZXJ5U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb3JlTW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7REVGQVVMVF9MQU5HLCBRVUVSWV9TRVJWSUNFX1RPS0VOLCBTVVBQT1JUX0xBTkd9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7SW5qZWN0VG9rZW59IGZyb20gJy4vZGVjb3JhdG9ycy9pbmplY3QuZGVjb3JhdG9yJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7dHJhbnNsYXRlTW9kdWxlT3B0aW9uc30gZnJvbSAnLi91dGlsL2hlbHBlcic7XG5pbXBvcnQge1VpU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy91aS5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh0cmFuc2xhdGVNb2R1bGVPcHRpb25zKVxuICBdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcblxuICBASW5qZWN0VG9rZW4oVHJhbnNsYXRlU2VydmljZSlcbiAgX3RyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U7XG5cbiAgQEluamVjdFRva2VuKFVpU2VydmljZSlcbiAgX3VpU2VydmljZTogVWlTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREVGQVVMVF9MQU5HKSBkZWZhdWx0TGFuZzogc3RyaW5nLFxuICAgICAgICAgICAgICBASW5qZWN0KFNVUFBPUlRfTEFORykgc3VwcG9ydExhbmc6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICBpbmplY3RvcjogSW5qZWN0b3IpIHtcblxuICAgIHdpbmRvd1snJCQkX3Jvb3RfaW5qZWN0b3InXSA9IGluamVjdG9yO1xuXG4gICAgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5hZGRMYW5ncyhzdXBwb3J0TGFuZyk7XG4gICAgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyhkZWZhdWx0TGFuZyk7XG4gICAgdGhpcy5fdHJhbnNsYXRlU2VydmljZS51c2UoZGVmYXVsdExhbmcpLnN1YnNjcmliZShyZXMgPT4ge1xuXG4gICAgICBjb25zdCBkaXIgPSBkZWZhdWx0TGFuZyA9PT0gJ2ZhJyA/ICdydGwnIDogJ2x0cic7XG4gICAgICB0aGlzLl91aVNlcnZpY2Uuc2V0RGlyZWN0aW9uKGRpcik7XG5cbiAgICB9KTtcblxuICB9XG5cblxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBDb3JlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVWlTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUXVlcnksXG4gICAgICAgICAgdXNlQ2xhc3M6IFF1ZXJ5U2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUVVFUllfU0VSVklDRV9UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogUXVlcnlTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBERUZBVUxUX0xBTkcsXG4gICAgICAgICAgdXNlVmFsdWU6IChjb25maWcgJiYgY29uZmlnLmxhbmd1YWdlLmRlZmF1bHQpIHx8ICdlbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNVUFBPUlRfTEFORyxcbiAgICAgICAgICB1c2VWYWx1ZTogKGNvbmZpZyAmJiBjb25maWcubGFuZ3VhZ2Uuc3VwcG9ydCkgfHwgWydlbicsICdmYSddXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbiJdfQ==