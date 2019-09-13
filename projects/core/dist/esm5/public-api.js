/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of core
 */
export { MODULE_CONFIG_DEFAULTS, LOCAL_STORAGE_CONFIG_DEFAULTS, AUTH_CONFIG_DEFAULTS, DIALOG_CONFIG_DEFAULTS } from './lib/config';
export { QUERY_SERVICE_TOKEN, DEFAULT_LANG, SUPPORT_LANG } from './lib/tokens';
export { CoreModule } from './lib/core.module';
export { AuthModule } from './lib/auth.module';
export { UIModule } from './lib/ui.module';
export { HttpLoaderFactory, init_app, translateModuleOptions, isString } from './lib/util/public-api';
export {} from './lib/interfaces/public-api';
export { InjectToken, GlobalInject } from './lib/decorators/public-api';
export { Query, Base, TokenError, Token, Modal } from './lib/classes/public-api';
export { QueryService, LocalStorage, HttpProvider, AuthenticationService, LoggedInAuth, LoggedOutAuth, DialogService, CoreTranslateService, UiService, ToastService, ModalService } from './lib/services/public-api';
export { ToastTemplateComponent, ModalTemplateComponent } from './lib/components/public-api';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxvSEFBYyxjQUFjLENBQUM7QUFDN0IsZ0VBQWMsY0FBYyxDQUFDO0FBRTdCLDJCQUFjLG1CQUFtQixDQUFDO0FBQ2xDLDJCQUFjLG1CQUFtQixDQUFDO0FBQ2xDLHlCQUFjLGlCQUFpQixDQUFDO0FBRWhDLDhFQUFjLHVCQUF1QixDQUFDO0FBQ3RDLGVBQWMsNkJBQTZCLENBQUM7QUFDNUMsMENBQWMsNkJBQTZCLENBQUM7QUFDNUMsc0RBQWMsMEJBQTBCLENBQUM7QUFDekMseUxBQWMsMkJBQTJCLENBQUM7QUFDMUMsK0RBQWMsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgY29yZVxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3Rva2Vucyc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb3JlLm1vZHVsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2F1dGgubW9kdWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvdWkubW9kdWxlJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3V0aWwvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2ludGVyZmFjZXMvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RlY29yYXRvcnMvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NsYXNzZXMvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2VzL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb21wb25lbnRzL3B1YmxpYy1hcGknO1xyXG4vLyBleHBvcnQgKiBmcm9tICcuL2xpYi9wcm92aWRlcnMvcHVibGljLWFwaSc7XHJcblxyXG4iXX0=