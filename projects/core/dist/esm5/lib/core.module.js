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
        InjectToken(TranslateService),
        tslib_1.__metadata("design:type", TranslateService)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUdoRDtJQWdCRSxvQkFBa0MsV0FBbUIsRUFDbkIsV0FBcUIsRUFDM0MsUUFBa0I7UUFGOUIsaUJBZUM7UUFYQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBRTdDLEdBQUcsR0FBRyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUdNLGtCQUFPOzs7O0lBQWQsVUFBZSxNQUF5QjtRQUV0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULFNBQVM7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ3JDO29CQUNFLE9BQU8sRUFBRSxLQUFLO29CQUNkLFFBQVEsRUFBRSxZQUFZO2lCQUN2QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUk7aUJBQ3REO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7aUJBQzlEO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBM0RGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztxQkFDaEQ7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUMzQjs7Ozs2Q0FTYyxNQUFNLFNBQUMsWUFBWTs0Q0FDbkIsTUFBTSxTQUFDLFlBQVk7Z0JBN0JsQixRQUFROztJQXVCdEI7UUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7MENBQ1gsZ0JBQWdCO3lEQUFDO0lBR3BDO1FBREMsV0FBVyxDQUFDLFNBQVMsQ0FBQzswQ0FDWCxTQUFTO2tEQUFDO0lBOEN4QixpQkFBQztDQUFBLEFBNURELElBNERDO1NBcERZLFVBQVU7OztJQUVyQix1Q0FDb0M7O0lBRXBDLGdDQUNzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtRdWVyeX0gZnJvbSAnLi9jbGFzc2VzL3F1ZXJ5LmNsYXNzJztcbmltcG9ydCB7UXVlcnlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3F1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0NvcmVNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcy9jb25maWcubW9kZWwnO1xuaW1wb3J0IHtERUZBVUxUX0xBTkcsIFFVRVJZX1NFUlZJQ0VfVE9LRU4sIFNVUFBPUlRfTEFOR30gZnJvbSAnLi90b2tlbnMnO1xuaW1wb3J0IHtJbmplY3RUb2tlbn0gZnJvbSAnLi9kZWNvcmF0b3JzL2luamVjdC5kZWNvcmF0b3InO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHt0cmFuc2xhdGVNb2R1bGVPcHRpb25zfSBmcm9tICcuL3V0aWwvaGVscGVyJztcbmltcG9ydCB7VWlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VpLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHRyYW5zbGF0ZU1vZHVsZU9wdGlvbnMpXG4gIF0sXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuXG4gIEBJbmplY3RUb2tlbihUcmFuc2xhdGVTZXJ2aWNlKVxuICBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTtcblxuICBASW5qZWN0VG9rZW4oVWlTZXJ2aWNlKVxuICBfdWlTZXJ2aWNlOiBVaVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChERUZBVUxUX0xBTkcpIGRlZmF1bHRMYW5nOiBzdHJpbmcsXG4gICAgICAgICAgICAgIEBJbmplY3QoU1VQUE9SVF9MQU5HKSBzdXBwb3J0TGFuZzogc3RyaW5nW10sXG4gICAgICAgICAgICAgIGluamVjdG9yOiBJbmplY3Rvcikge1xuXG4gICAgd2luZG93WyckJCRfcm9vdF9pbmplY3RvciddID0gaW5qZWN0b3I7XG5cbiAgICB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmFkZExhbmdzKHN1cHBvcnRMYW5nKTtcbiAgICB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKGRlZmF1bHRMYW5nKTtcbiAgICB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLnVzZShkZWZhdWx0TGFuZykuc3Vic2NyaWJlKHJlcyA9PiB7XG5cbiAgICAgIGNvbnN0IGRpciA9IGRlZmF1bHRMYW5nID09PSAnZmEnID8gJ3J0bCcgOiAnbHRyJztcbiAgICAgIHRoaXMuX3VpU2VydmljZS5zZXREaXJlY3Rpb24oZGlyKTtcblxuICAgIH0pO1xuXG4gIH1cblxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IENvcmVNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVaVNlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBRdWVyeSxcbiAgICAgICAgICB1c2VDbGFzczogUXVlcnlTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBRVUVSWV9TRVJWSUNFX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiBRdWVyeVNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERFRkFVTFRfTEFORyxcbiAgICAgICAgICB1c2VWYWx1ZTogKGNvbmZpZyAmJiBjb25maWcubGFuZ3VhZ2UuZGVmYXVsdCkgfHwgJ2VuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU1VQUE9SVF9MQU5HLFxuICAgICAgICAgIHVzZVZhbHVlOiAoY29uZmlnICYmIGNvbmZpZy5sYW5ndWFnZS5zdXBwb3J0KSB8fCBbJ2VuJywgJ2ZhJ11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuIl19