/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APP_INITIALIZER, Inject, Injector, NgModule } from '@angular/core';
import { Query } from './classes/query.class';
import { QueryService } from './services/query.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DEFAULT_LANG, QUERY_SERVICE_TOKEN, SUPPORT_LANG } from './tokens';
import { InjectToken } from './decorators/inject.decorator';
import { TranslateModule } from '@ngx-translate/core';
import { init_app, translateModuleOptions } from './util/helper';
import { UiService } from './services/ui.service';
import { CoreTranslateService } from './services/core-translate.service';
import { AppLoadService } from './services/app-load-service.service';
import { CoreHttpInterceptor } from './interceptors/core=http.interceptor';
var CoreModule = /** @class */ (function () {
    function CoreModule(defaultLang, supportLang, injector) {
        var _this = this;
        window['$$$_root_injector'] = injector;
        this._translateService.addLangs(supportLang);
        this._translateService.setDefaultLang(defaultLang);
        this._translateService.use(defaultLang).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var dir = defaultLang === 'fa' ? 'rtl' : 'ltr';
            _this._uiService.setDirection(dir);
            _this._translateService.isCompleted();
        }));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: CoreModule,
            providers: [
                UiService,
                CoreTranslateService,
                AppLoadService,
                { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true },
                { provide: 'config', useValue: config },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: CoreHttpInterceptor,
                    multi: true,
                },
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
    };
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
    CoreModule.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [DEFAULT_LANG,] }] },
        { type: Array, decorators: [{ type: Inject, args: [SUPPORT_LANG,] }] },
        { type: Injector }
    ]; };
    tslib_1.__decorate([
        InjectToken(CoreTranslateService),
        tslib_1.__metadata("design:type", CoreTranslateService)
    ], CoreModule.prototype, "_translateService", void 0);
    tslib_1.__decorate([
        InjectToken(UiService),
        tslib_1.__metadata("design:type", UiService)
    ], CoreModule.prototype, "_uiService", void 0);
    return CoreModule;
}());
export { CoreModule };
if (false) {
    /** @type {?} */
    CoreModule.prototype._translateService;
    /** @type {?} */
    CoreModule.prototype._uiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RSxPQUFPLEVBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUd6RTtJQWdCQyxvQkFBa0MsV0FBbUIsRUFDNUIsV0FBcUIsRUFDM0MsUUFBa0I7UUFGckIsaUJBaUJDO1FBYkEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsUUFBUSxDQUFDO1FBRXZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7O2dCQUU5QyxHQUFHLEdBQUcsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hELEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0QyxDQUFDLEVBQUMsQ0FBQztJQUdKLENBQUM7Ozs7O0lBR00sa0JBQU87Ozs7SUFBZCxVQUFlLE1BQXlCO1FBRXZDLE9BQU87WUFDTixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1YsU0FBUztnQkFDVCxvQkFBb0I7Z0JBQ3BCLGNBQWM7Z0JBQ2QsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztnQkFDckYsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ3JDO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLEtBQUssRUFBRSxJQUFJO2lCQUNYO2dCQUNEO29CQUNDLE9BQU8sRUFBRSxLQUFLO29CQUNkLFFBQVEsRUFBRSxZQUFZO2lCQUN0QjtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsWUFBWTtpQkFDdEI7Z0JBQ0Q7b0JBQ0MsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUk7aUJBQ3JEO2dCQUNEO29CQUNDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7aUJBQzdEO2FBQ0Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBckVELFFBQVEsU0FBQztvQkFDVCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNSLGdCQUFnQjt3QkFDaEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztxQkFDL0M7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUMxQjs7Ozs2Q0FTYSxNQUFNLFNBQUMsWUFBWTs0Q0FDNUIsTUFBTSxTQUFDLFlBQVk7Z0JBaENTLFFBQVE7O0lBMEJ4QztRQURDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQzswQ0FDZixvQkFBb0I7eURBQUM7SUFHeEM7UUFEQyxXQUFXLENBQUMsU0FBUyxDQUFDOzBDQUNYLFNBQVM7a0RBQUM7SUF3RHZCLGlCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0E5RFksVUFBVTs7O0lBRXRCLHVDQUN3Qzs7SUFFeEMsZ0NBQ3NCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIEluamVjdCwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSAnLi9jbGFzc2VzL3F1ZXJ5LmNsYXNzJztcclxuaW1wb3J0IHtRdWVyeVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcXVlcnkuc2VydmljZSc7XHJcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtDb3JlTW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHtERUZBVUxUX0xBTkcsIFFVRVJZX1NFUlZJQ0VfVE9LRU4sIFNVUFBPUlRfTEFOR30gZnJvbSAnLi90b2tlbnMnO1xyXG5pbXBvcnQge0luamVjdFRva2VufSBmcm9tICcuL2RlY29yYXRvcnMvaW5qZWN0LmRlY29yYXRvcic7XHJcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtpbml0X2FwcCwgdHJhbnNsYXRlTW9kdWxlT3B0aW9uc30gZnJvbSAnLi91dGlsL2hlbHBlcic7XHJcbmltcG9ydCB7VWlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VpLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvcmVUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NvcmUtdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwcExvYWRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2FwcC1sb2FkLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Q29yZUh0dHBJbnRlcmNlcHRvcn0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvY29yZT1odHRwLmludGVyY2VwdG9yJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW10sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHRyYW5zbGF0ZU1vZHVsZU9wdGlvbnMpXHJcblx0XSxcclxuXHRleHBvcnRzOiBbVHJhbnNsYXRlTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdEBJbmplY3RUb2tlbihDb3JlVHJhbnNsYXRlU2VydmljZSlcclxuXHRfdHJhbnNsYXRlU2VydmljZTogQ29yZVRyYW5zbGF0ZVNlcnZpY2U7XHJcblxyXG5cdEBJbmplY3RUb2tlbihVaVNlcnZpY2UpXHJcblx0X3VpU2VydmljZTogVWlTZXJ2aWNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KERFRkFVTFRfTEFORykgZGVmYXVsdExhbmc6IHN0cmluZyxcclxuXHRcdFx0XHRASW5qZWN0KFNVUFBPUlRfTEFORykgc3VwcG9ydExhbmc6IHN0cmluZ1tdLFxyXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cclxuXHRcdHdpbmRvd1snJCQkX3Jvb3RfaW5qZWN0b3InXSA9IGluamVjdG9yO1xyXG5cclxuXHRcdHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3Moc3VwcG9ydExhbmcpO1xyXG5cdFx0dGhpcy5fdHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyhkZWZhdWx0TGFuZyk7XHJcblx0XHR0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLnVzZShkZWZhdWx0TGFuZykuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBkaXIgPSBkZWZhdWx0TGFuZyA9PT0gJ2ZhJyA/ICdydGwnIDogJ2x0cic7XHJcblx0XHRcdHRoaXMuX3VpU2VydmljZS5zZXREaXJlY3Rpb24oZGlyKTtcclxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlU2VydmljZS5pc0NvbXBsZXRlZCgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogQ29yZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHRVaVNlcnZpY2UsXHJcblx0XHRcdFx0Q29yZVRyYW5zbGF0ZVNlcnZpY2UsXHJcblx0XHRcdFx0QXBwTG9hZFNlcnZpY2UsXHJcblx0XHRcdFx0e3Byb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogaW5pdF9hcHAsIGRlcHM6IFtBcHBMb2FkU2VydmljZV0sIG11bHRpOiB0cnVlfSxcclxuXHRcdFx0XHR7cHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IENvcmVIdHRwSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IFF1ZXJ5LFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFF1ZXJ5U2VydmljZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvdmlkZTogUVVFUllfU0VSVklDRV9UT0tFTixcclxuXHRcdFx0XHRcdHVzZVZhbHVlOiBRdWVyeVNlcnZpY2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IERFRkFVTFRfTEFORyxcclxuXHRcdFx0XHRcdHVzZVZhbHVlOiAoY29uZmlnICYmIGNvbmZpZy5sYW5ndWFnZS5kZWZhdWx0KSB8fCAnZW4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBTVVBQT1JUX0xBTkcsXHJcblx0XHRcdFx0XHR1c2VWYWx1ZTogKGNvbmZpZyAmJiBjb25maWcubGFuZ3VhZ2Uuc3VwcG9ydCkgfHwgWydlbicsICdmYSddXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=