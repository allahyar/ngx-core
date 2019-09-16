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
import { initializeApp, translateModuleOptions } from './util/helper';
import { UiService } from './services/ui.service';
import { CoreTranslateService } from './services/core-translate.service';
import { AppLoadService } from './services/app-load-service.service';
import { CoreHttpInterceptor } from './interceptors/core=http.interceptor';
import { BreadcrumbsService } from './services/breadcrumbs.service';
import { BreadcrumbsComponent } from './components/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
                BreadcrumbsService,
                { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppLoadService], multi: true },
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
                    declarations: [BreadcrumbsComponent],
                    imports: [
                        HttpClientModule,
                        RouterModule,
                        TranslateModule.forRoot(translateModuleOptions),
                        CommonModule
                    ],
                    exports: [TranslateModule, BreadcrumbsComponent]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RSxPQUFPLEVBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDO0lBa0JDLG9CQUFrQyxXQUFtQixFQUM1QixXQUFxQixFQUMzQyxRQUFrQjtRQUZyQixpQkFpQkM7UUFiQSxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBRTlDLEdBQUcsR0FBRyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRDLENBQUMsRUFBQyxDQUFDO0lBR0osQ0FBQzs7Ozs7SUFHTSxrQkFBTzs7OztJQUFkLFVBQWUsTUFBeUI7UUFFdkMsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVixTQUFTO2dCQUNULG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7Z0JBQzFGLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUNyQztvQkFDQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixLQUFLLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsS0FBSztvQkFDZCxRQUFRLEVBQUUsWUFBWTtpQkFDdEI7Z0JBQ0Q7b0JBQ0MsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsUUFBUSxFQUFFLFlBQVk7aUJBQ3RCO2dCQUNEO29CQUNDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJO2lCQUNyRDtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2lCQUM3RDthQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQXhFRCxRQUFRLFNBQUM7b0JBQ1QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osZUFBZSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDL0MsWUFBWTtxQkFDWjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7aUJBQ2hEOzs7OzZDQVNhLE1BQU0sU0FBQyxZQUFZOzRDQUM1QixNQUFNLFNBQUMsWUFBWTtnQkF0Q1MsUUFBUTs7SUFnQ3hDO1FBREMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOzBDQUNmLG9CQUFvQjt5REFBQztJQUd4QztRQURDLFdBQVcsQ0FBQyxTQUFTLENBQUM7MENBQ1gsU0FBUztrREFBQztJQXlEdkIsaUJBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQS9EWSxVQUFVOzs7SUFFdEIsdUNBQ3dDOztJQUV4QyxnQ0FDc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgSW5qZWN0LCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtRdWVyeX0gZnJvbSAnLi9jbGFzc2VzL3F1ZXJ5LmNsYXNzJztcbmltcG9ydCB7UXVlcnlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3F1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb3JlTW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7REVGQVVMVF9MQU5HLCBRVUVSWV9TRVJWSUNFX1RPS0VOLCBTVVBQT1JUX0xBTkd9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7SW5qZWN0VG9rZW59IGZyb20gJy4vZGVjb3JhdG9ycy9pbmplY3QuZGVjb3JhdG9yJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7aW5pdGlhbGl6ZUFwcCwgdHJhbnNsYXRlTW9kdWxlT3B0aW9uc30gZnJvbSAnLi91dGlsL2hlbHBlcic7XG5pbXBvcnQge1VpU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy91aS5zZXJ2aWNlJztcbmltcG9ydCB7Q29yZVRyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY29yZS10cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge0FwcExvYWRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2FwcC1sb2FkLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQge0NvcmVIdHRwSW50ZXJjZXB0b3J9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2NvcmU9aHR0cC5pbnRlcmNlcHRvcic7XG5pbXBvcnQge0JyZWFkY3J1bWJzU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9icmVhZGNydW1icy5zZXJ2aWNlJztcbmltcG9ydCB7QnJlYWRjcnVtYnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1ic0NvbXBvbmVudF0sXG5cdGltcG9ydHM6IFtcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxuXHRcdFJvdXRlck1vZHVsZSxcblx0XHRUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh0cmFuc2xhdGVNb2R1bGVPcHRpb25zKSxcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZXhwb3J0czogW1RyYW5zbGF0ZU1vZHVsZSwgQnJlYWRjcnVtYnNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuXG5cdEBJbmplY3RUb2tlbihDb3JlVHJhbnNsYXRlU2VydmljZSlcblx0X3RyYW5zbGF0ZVNlcnZpY2U6IENvcmVUcmFuc2xhdGVTZXJ2aWNlO1xuXG5cdEBJbmplY3RUb2tlbihVaVNlcnZpY2UpXG5cdF91aVNlcnZpY2U6IFVpU2VydmljZTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KERFRkFVTFRfTEFORykgZGVmYXVsdExhbmc6IHN0cmluZyxcblx0XHRcdFx0QEluamVjdChTVVBQT1JUX0xBTkcpIHN1cHBvcnRMYW5nOiBzdHJpbmdbXSxcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yKSB7XG5cblx0XHR3aW5kb3dbJyQkJF9yb290X2luamVjdG9yJ10gPSBpbmplY3RvcjtcblxuXHRcdHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3Moc3VwcG9ydExhbmcpO1xuXHRcdHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcoZGVmYXVsdExhbmcpO1xuXHRcdHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UudXNlKGRlZmF1bHRMYW5nKS5zdWJzY3JpYmUocmVzID0+IHtcblxuXHRcdFx0Y29uc3QgZGlyID0gZGVmYXVsdExhbmcgPT09ICdmYScgPyAncnRsJyA6ICdsdHInO1xuXHRcdFx0dGhpcy5fdWlTZXJ2aWNlLnNldERpcmVjdGlvbihkaXIpO1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlU2VydmljZS5pc0NvbXBsZXRlZCgpO1xuXG5cdFx0fSk7XG5cblxuXHR9XG5cblxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBDb3JlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VWlTZXJ2aWNlLFxuXHRcdFx0XHRDb3JlVHJhbnNsYXRlU2VydmljZSxcblx0XHRcdFx0QXBwTG9hZFNlcnZpY2UsXG5cdFx0XHRcdEJyZWFkY3J1bWJzU2VydmljZSxcblx0XHRcdFx0e3Byb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCwgZGVwczogW0FwcExvYWRTZXJ2aWNlXSwgbXVsdGk6IHRydWV9LFxuXHRcdFx0XHR7cHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IENvcmVIdHRwSW50ZXJjZXB0b3IsXG5cdFx0XHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBRdWVyeSxcblx0XHRcdFx0XHR1c2VDbGFzczogUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBRVUVSWV9TRVJWSUNFX1RPS0VOLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBRdWVyeVNlcnZpY2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IERFRkFVTFRfTEFORyxcblx0XHRcdFx0XHR1c2VWYWx1ZTogKGNvbmZpZyAmJiBjb25maWcubGFuZ3VhZ2UuZGVmYXVsdCkgfHwgJ2VuJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1VQUE9SVF9MQU5HLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiAoY29uZmlnICYmIGNvbmZpZy5sYW5ndWFnZS5zdXBwb3J0KSB8fCBbJ2VuJywgJ2ZhJ11cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH07XG5cdH1cbn1cbiJdfQ==