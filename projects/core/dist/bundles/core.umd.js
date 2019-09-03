(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@ngx-translate/core'), require('@ngx-translate/http-loader'), require('@angular/common'), require('rxjs'), require('@angular/router'), require('rxjs/operators'), require('ngx-cool-dialogs'), require('@angular/platform-browser/animations'), require('ngx-toast-notifications'), require('ngx-toast-notifications/dist/toaster'), require('@ng-bootstrap/ng-bootstrap'), require('ngx-bootstrap'), require('@angular/forms'), require('ngx-bootstrap/modal')) :
    typeof define === 'function' && define.amd ? define('core', ['exports', '@angular/core', '@angular/common/http', '@ngx-translate/core', '@ngx-translate/http-loader', '@angular/common', 'rxjs', '@angular/router', 'rxjs/operators', 'ngx-cool-dialogs', '@angular/platform-browser/animations', 'ngx-toast-notifications', 'ngx-toast-notifications/dist/toaster', '@ng-bootstrap/ng-bootstrap', 'ngx-bootstrap', '@angular/forms', 'ngx-bootstrap/modal'], factory) :
    (global = global || self, factory(global.core = {}, global.ng.core, global.ng.common.http, global.core$1, global.httpLoader, global.ng.common, global.rxjs, global.ng.router, global.rxjs.operators, global.ngxCoolDialogs, global.ng.platformBrowser.animations, global.ngxToastNotifications, global.toaster, global.ngBootstrap, global.ngxBootstrap, global.ng.forms, global.modal));
}(this, function (exports, core, http, core$1, httpLoader, common, rxjs, router, operators, ngxCoolDialogs, animations, ngxToastNotifications, toaster, ngBootstrap, ngxBootstrap, forms, modal) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULE_CONFIG_DEFAULTS = {};
    /** @type {?} */
    var LOCAL_STORAGE_CONFIG_DEFAULTS = {
        prefix: 'ZarsamErp'
    };
    /** @type {?} */
    var AUTH_CONFIG_DEFAULTS = {
        loginEndPoint: '/login'
    };
    /** @type {?} */
    var DIALOG_CONFIG_DEFAULTS = {
        theme: 'material',
        // available themes: 'default' | 'material' | 'dark'
        okButtonText: 'Yes',
        cancelButtonText: 'No',
        color: '#8030c3',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var QUERY_SERVICE_TOKEN = new core.InjectionToken('QueryService');
    /** @type {?} */
    var DEFAULT_LANG = new core.InjectionToken('DefaultLang');
    /** @type {?} */
    var SUPPORT_LANG = new core.InjectionToken('SupportLang');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var   /**
     * @abstract
     * @template T
     */
    Query = /** @class */ (function () {
        function Query() {
        }
        return Query;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} flags
     * @return {?}
     */
    function InjectToken(token, notFoundValue, flags) {
        if (notFoundValue === void 0) { notFoundValue = null; }
        return (/**
         * @param {?} target
         * @param {?} key
         * @return {?}
         */
        function (target, key) {
            /** @type {?} */
            var prev = Object.getOwnPropertyDescriptor(target, key);
            /** @type {?} */
            var getter = (/**
             * @return {?}
             */
            function () {
                if (this['$$$Inject_' + token.toString()]) {
                    return this['$$$Inject_' + token.toString()];
                }
                /** @type {?} */
                var localInjector = this.injector || this['$$$_Injector'];
                if (!localInjector) {
                    for (var filedKey in this) {
                        if (this.hasOwnProperty(filedKey)) {
                            if (this[filedKey] instanceof core.Injector ||
                                (this[filedKey] &&
                                    this[filedKey].constructor.name === 'Injector_')) {
                                localInjector = this[filedKey];
                                this['$$$_Injector'] = localInjector;
                            }
                        }
                    }
                }
                if (!localInjector) {
                    console.warn('Could not find local Injector in  (' +
                        target.constructor.name +
                        '), use root injector instead!');
                }
                else {
                    if (localInjector.constructor.name === 'StaticInjector' &&
                        localInjector.parent) {
                        localInjector = localInjector.parent;
                    }
                }
                /** @type {?} */
                var value = (localInjector || window['$$$_root_injector']).get(token, notFoundValue, flags);
                this['$$$' + token.toString()] = value;
                return value;
            });
            Object.defineProperty(target, key, {
                get: getter,
                enumerable: prev == null ? true : prev.enumerable,
                configurable: prev == null ? true : prev.configurable
            });
        });
    }
    /**
     * @template T
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} flags
     * @return {?}
     */
    function GlobalInject(token, notFoundValue, flags) {
        if (notFoundValue === void 0) { notFoundValue = null; }
        return (/**
         * @param {?} target
         * @param {?} key
         * @return {?}
         */
        function (target, key) {
            /** @type {?} */
            var prev = Object.getOwnPropertyDescriptor(target, key);
            /** @type {?} */
            var getter = (/**
             * @return {?}
             */
            function () {
                if (this['$$$Inject_' + token.toString()]) {
                    return this['$$$Inject_' + token.toString()];
                }
                /** @type {?} */
                var localInjectors = this.injectors;
                if (!localInjectors) {
                    console.warn('Could not find local Injectors in  (' +
                        target.constructor.name +
                        ')!');
                }
                else {
                    for (var i = localInjectors.length - 1; i >= 0; --i) {
                        /** @type {?} */
                        var injector = localInjectors[i];
                        /** @type {?} */
                        var value = injector.get(token, notFoundValue, flags);
                        this['$$$' + token.toString()] = value;
                        return value;
                    }
                    return undefined;
                }
            });
            Object.defineProperty(target, key, {
                get: getter,
                enumerable: prev == null ? true : prev.enumerable,
                configurable: prev == null ? true : prev.configurable
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var HttpProvider = /** @class */ (function () {
        function HttpProvider(config, http, injector) {
            this.config = config;
            this.http = http;
            this.injector = injector;
            this._baseUrl = null;
            if (!this.config.api.useInterceptor) {
                this._baseUrl = this.config.api.baseUrl;
            }
        }
        /**
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        HttpProvider.prototype.get = /**
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            // this.http.get<any>(data.url);
            // return new Observable((observer) => {
            // 	observer.next({success: true});
            // 	observer.complete();
            // });
            return this.http.get(this._baseUrl + url, options);
        };
        /**
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        HttpProvider.prototype.post = /**
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        function (url, body, options) {
            return this.http.post(this._baseUrl + url, body, options);
        };
        HttpProvider.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HttpProvider.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: http.HttpClient },
            { type: core.Injector }
        ]; };
        /** @nocollapse */ HttpProvider.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HttpProvider_Factory() { return new HttpProvider(core.ɵɵinject("config"), core.ɵɵinject(http.HttpClient), core.ɵɵinject(core.INJECTOR)); }, token: HttpProvider, providedIn: "root" });
        return HttpProvider;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var QueryService = /** @class */ (function (_super) {
        __extends(QueryService, _super);
        function QueryService(injector) {
            var _this = _super.call(this) || this;
            _this.injector = injector;
            return _this;
        }
        /**
         * @param {?} info
         * @return {?}
         */
        QueryService.prototype.delete = /**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            return this.http.get('dadad');
        };
        /**
         * @param {?} info
         * @return {?}
         */
        QueryService.prototype.get = /**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            return undefined;
        };
        /**
         * @param {?} info
         * @return {?}
         */
        QueryService.prototype.list = /**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            return undefined;
        };
        /**
         * @param {?} info
         * @return {?}
         */
        QueryService.prototype.post = /**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            return undefined;
        };
        /**
         * @param {?} info
         * @return {?}
         */
        QueryService.prototype.grid = /**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            return undefined;
        };
        QueryService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        QueryService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        /** @nocollapse */ QueryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function QueryService_Factory() { return new QueryService(core.ɵɵinject(core.INJECTOR)); }, token: QueryService, providedIn: "root" });
        __decorate([
            InjectToken(HttpProvider),
            __metadata("design:type", HttpProvider)
        ], QueryService.prototype, "http", void 0);
        return QueryService;
    }(Query));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // required for AOT compilation
    /**
     * @param {?} http
     * @return {?}
     */
    function HttpLoaderFactory(http) {
        return new httpLoader.TranslateHttpLoader(http, './assets/i18n/', '.json');
    }
    // ngx-translate and the loader module
    var ɵ0 = (HttpLoaderFactory);
    /** @type {?} */
    var translateModuleOptions = {
        loader: {
            provide: core$1.TranslateLoader,
            useFactory: ɵ0,
            deps: [http.HttpClient]
        }
    };
    /**
     * @param {?} appLoadService
     * @return {?}
     */
    function init_app(appLoadService) {
        return (/**
         * @return {?}
         */
        function () { return appLoadService.initializeApp(); });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiService = /** @class */ (function () {
        function UiService() {
        }
        /**
         * @param {?} dir
         * @return {?}
         */
        UiService.prototype.setDirection = /**
         * @param {?} dir
         * @return {?}
         */
        function (dir) {
            this.document.dir = dir;
        };
        Object.defineProperty(UiService.prototype, "direction", {
            get: /**
             * @return {?}
             */
            function () {
                return this.document.dir;
            },
            enumerable: true,
            configurable: true
        });
        UiService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UiService.ctorParameters = function () { return []; };
        __decorate([
            InjectToken(common.DOCUMENT),
            __metadata("design:type", Document)
        ], UiService.prototype, "document", void 0);
        return UiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} obj
     * @return {?}
     */
    function isString(obj) {
        return typeof obj === 'string';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreTranslateService = /** @class */ (function () {
        function CoreTranslateService(_translateService) {
            this._translateService = _translateService;
            this._isLoaded = new rxjs.BehaviorSubject(false);
        }
        /**
         * @param {?} langs
         * @return {?}
         */
        CoreTranslateService.prototype.addLangs = /**
         * @param {?} langs
         * @return {?}
         */
        function (langs) {
            return this._translateService.addLangs(langs);
        };
        /**
         * @param {?} lang
         * @return {?}
         */
        CoreTranslateService.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            return this._translateService.use(lang);
        };
        /**
         * @param {?} lang
         * @return {?}
         */
        CoreTranslateService.prototype.setDefaultLang = /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            this._translateService.setDefaultLang(lang);
        };
        /**
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?}
         */
        CoreTranslateService.prototype.instant = /**
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?}
         */
        function (key, interpolateParams) {
            var _this = this;
            if (isString(key) && key.indexOf(':') > 0) {
                /** @type {?} */
                var items = ((/** @type {?} */ (key))).split(':');
                return items
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this._translateService.instant(item, interpolateParams); }))
                    .join(' ');
            }
            return this._translateService.instant(key, interpolateParams);
        };
        /**
         * @return {?}
         */
        CoreTranslateService.prototype.isCompleted = /**
         * @return {?}
         */
        function () {
            this._isLoaded.next(true);
        };
        Object.defineProperty(CoreTranslateService.prototype, "loaded", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isLoaded.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        CoreTranslateService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CoreTranslateService.ctorParameters = function () { return [
            { type: core$1.TranslateService }
        ]; };
        /** @nocollapse */ CoreTranslateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CoreTranslateService_Factory() { return new CoreTranslateService(core.ɵɵinject(core$1.TranslateService)); }, token: CoreTranslateService, providedIn: "root" });
        return CoreTranslateService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService(config, router) {
            this.config = config;
            this.router = router;
            this._currentUserSubject = new rxjs.ReplaySubject(1);
        }
        Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
            get: /**
             * @return {?}
             */
            function () {
                return this._currentUserValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AuthenticationService.prototype, "currentUser", {
            get: /**
             * @return {?}
             */
            function () {
                return this._currentUserSubject.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} prop
         * @return {?}
         */
        AuthenticationService.prototype.setting = /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            if (prop.indexOf('.') > 0) {
                /** @type {?} */
                var split = prop.split('.');
                // return this.currentUserValue.setting.bind(split);
            }
            return this.currentUserValue.setting[prop];
        };
        /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        AuthenticationService.prototype.login = /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        function (username, password) {
        };
        /**
         * @param {?=} token
         * @return {?}
         */
        AuthenticationService.prototype.verifyToken = /**
         * @param {?=} token
         * @return {?}
         */
        function (token) {
            var _this = this;
            return this.http.get(this.config.tokenVerifyEndPoint).pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res.success) {
                    console.log(res.success);
                    _this._currentUserValue = res.result;
                    _this._currentUserSubject.next(res.result);
                    _this.router.navigateByUrl(_this.config.loginEndPoint);
                    return true;
                }
                return false;
            })));
        };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.loggedIn = /**
         * @return {?}
         */
        function () {
            return this._currentUserValue !== null;
        };
        /**
         * @param {?} endPoint
         * @return {?}
         */
        AuthenticationService.prototype.logout = /**
         * @param {?} endPoint
         * @return {?}
         */
        function (endPoint) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                _this.http.get(endPoint || _this.config.logoutEndPoint).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    _this._currentUserSubject.next(null);
                    _this._currentUserValue = null;
                    _this.router.navigateByUrl(_this.config.guards.loggedOutGuard.redirectUrl);
                    resolve(true);
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return reject; }));
            }));
        };
        AuthenticationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthenticationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['authConfig',] }] },
            { type: router.Router }
        ]; };
        __decorate([
            InjectToken(HttpProvider),
            __metadata("design:type", HttpProvider)
        ], AuthenticationService.prototype, "http", void 0);
        return AuthenticationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppLoadService = /** @class */ (function () {
        function AppLoadService(_translateService, config) {
            this._translateService = _translateService;
            this.config = config;
        }
        /**
         * @return {?}
         */
        AppLoadService.prototype.initializeApp = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                _this._translateService.loaded.subscribe((/**
                 * @param {?} completed
                 * @return {?}
                 */
                function (completed) {
                    if (completed) {
                        if (!_this.config.useTokenVerify) {
                            reject();
                            return true;
                        }
                        _this._authService.verifyToken().subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        function (res) {
                            resolve();
                            return true;
                        }));
                    }
                }));
            }));
        };
        AppLoadService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AppLoadService.ctorParameters = function () { return [
            { type: CoreTranslateService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['authConfig',] }] }
        ]; };
        __decorate([
            InjectToken(AuthenticationService),
            __metadata("design:type", AuthenticationService)
        ], AppLoadService.prototype, "_authService", void 0);
        return AppLoadService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreHttpInterceptor = /** @class */ (function () {
        function CoreHttpInterceptor(config) {
            this.config = config;
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        CoreHttpInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            /** @type {?} */
            var changeHeader;
            if (this.config.api.useInterceptor) {
                changeHeader = { url: "" + this.config.api.baseUrl + req.url };
            }
            /** @type {?} */
            var apiReq = req.clone(changeHeader);
            return next.handle(apiReq);
        };
        CoreHttpInterceptor.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CoreHttpInterceptor.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
        ]; };
        /** @nocollapse */ CoreHttpInterceptor.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CoreHttpInterceptor_Factory() { return new CoreHttpInterceptor(core.ɵɵinject("config")); }, token: CoreHttpInterceptor, providedIn: "root" });
        return CoreHttpInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    { provide: core.APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true },
                    { provide: 'config', useValue: config },
                    {
                        provide: http.HTTP_INTERCEPTORS,
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
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            http.HttpClientModule,
                            core$1.TranslateModule.forRoot(translateModuleOptions)
                        ],
                        exports: [core$1.TranslateModule]
                    },] }
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [DEFAULT_LANG,] }] },
            { type: Array, decorators: [{ type: core.Inject, args: [SUPPORT_LANG,] }] },
            { type: core.Injector }
        ]; };
        __decorate([
            InjectToken(CoreTranslateService),
            __metadata("design:type", CoreTranslateService)
        ], CoreModule.prototype, "_translateService", void 0);
        __decorate([
            InjectToken(UiService),
            __metadata("design:type", UiService)
        ], CoreModule.prototype, "_uiService", void 0);
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TokenError = /** @class */ (function (_super) {
        __extends(TokenError, _super);
        function TokenError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'TokenError';
            return _this;
        }
        return TokenError;
    }(Error));
    var Token = /** @class */ (function () {
        function Token(token) {
            this.token = token;
            if (this.token != null && this.isExpired()) {
                token = null;
            }
        }
        /**
         * @private
         * @param {?} str
         * @return {?}
         */
        Token.prototype.decodeBase64 = /**
         * @private
         * @param {?} str
         * @return {?}
         */
        function (str) {
            /** @type {?} */
            var output = str.replace(/-/g, '+').replace(/_/g, '/');
            switch (output.length % 4) {
                case 0: {
                    break;
                }
                case 2: {
                    output += '==';
                    break;
                }
                case 3: {
                    output += '=';
                    break;
                }
                default: {
                    throw new TokenError('Illegal base64url string!');
                }
            }
            return decodeURIComponent(escape(typeof window === 'undefined' ? atob(output) : window.atob(output)));
        };
        /**
         * @return {?}
         */
        Token.prototype.decodeToken = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parts = this.token.split('.');
            if (parts.length !== 3) {
                throw new TokenError('A JWT Token must have 3 parts!');
            }
            /** @type {?} */
            var decoded = this.decodeBase64(parts[1]);
            if (!decoded) {
                throw new TokenError('Cannot decode the token!');
            }
            return JSON.parse(decoded);
        };
        /**
         * @return {?}
         */
        Token.prototype.getExpirationDate = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var decoded = this.decodeToken();
            if (!decoded.hasOwnProperty('exp')) {
                return new Date();
            }
            /** @type {?} */
            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
        };
        /**
         * @param {?=} offsetSeconds
         * @return {?}
         */
        Token.prototype.isExpired = /**
         * @param {?=} offsetSeconds
         * @return {?}
         */
        function (offsetSeconds) {
            if (offsetSeconds === void 0) { offsetSeconds = 0; }
            /** @type {?} */
            var date = this.getExpirationDate();
            if (date.getSeconds() === new Date().getSeconds()) {
                return false;
            }
            return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
        };
        return Token;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TokenService = /** @class */ (function () {
        function TokenService() {
            this._token = new rxjs.BehaviorSubject(new Token(localStorage.getItem('satellizer_token')));
        }
        /**
         * Get the current token.
         */
        /**
         * Get the current token.
         * @return {?}
         */
        TokenService.prototype.getToken = /**
         * Get the current token.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var token = this._token.getValue();
            return (token && token.token) ? token : null;
        };
        /**
         * Returns an stream of tokens.
         */
        /**
         * Returns an stream of tokens.
         * @return {?}
         */
        TokenService.prototype.getTokenStream = /**
         * Returns an stream of tokens.
         * @return {?}
         */
        function () {
            return this._token.asObservable();
        };
        /**
         * Update the current token.
         */
        /**
         * Update the current token.
         * @param {?} token
         * @return {?}
         */
        TokenService.prototype.setToken = /**
         * Update the current token.
         * @param {?} token
         * @return {?}
         */
        function (token) {
            this._token.next(new Token(token));
        };
        /**
         * Remove the current token.
         */
        /**
         * Remove the current token.
         * @return {?}
         */
        TokenService.prototype.removeToken = /**
         * Remove the current token.
         * @return {?}
         */
        function () {
            this._token.next(null);
        };
        TokenService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TokenService.ctorParameters = function () { return []; };
        /** @nocollapse */ TokenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TokenService_Factory() { return new TokenService(); }, token: TokenService, providedIn: "root" });
        return TokenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JwtInterceptor = /** @class */ (function () {
        function JwtInterceptor(config, _tokenService) {
            this.config = config;
            this._tokenService = _tokenService;
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        JwtInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            /** @type {?} */
            var token = this._tokenService.getToken();
            if (token && !token.isExpired()) {
                // {headers: req.headers.set(this.config.headerName, this.config.headerPrefix + ' ' + token.token)}
                req = req.clone({
                    setHeaders: { Authorization: this.config.headerPrefix + " " + token.token }
                });
            }
            return next.handle(req);
        };
        JwtInterceptor.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JwtInterceptor.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['authConfig',] }] },
            { type: TokenService }
        ]; };
        /** @nocollapse */ JwtInterceptor.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function JwtInterceptor_Factory() { return new JwtInterceptor(core.ɵɵinject("authConfig"), core.ɵɵinject(TokenService)); }, token: JwtInterceptor, providedIn: "root" });
        return JwtInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoggedInAuth = /** @class */ (function () {
        function LoggedInAuth(config) {
            this.config = config;
        }
        /**
         * @return {?}
         */
        LoggedInAuth.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var token = this._tokenService.getToken();
            if (token && token.token) {
                return !token.isExpired();
            }
            /** @type {?} */
            var redirectUrl = this.config.guards.loggedInGuard.redirectUrl;
            if (redirectUrl) {
                return this._router.navigate([redirectUrl]);
            }
            return false;
        };
        LoggedInAuth.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoggedInAuth.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['authConfig',] }] }
        ]; };
        /** @nocollapse */ LoggedInAuth.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LoggedInAuth_Factory() { return new LoggedInAuth(core.ɵɵinject("authConfig")); }, token: LoggedInAuth, providedIn: "root" });
        __decorate([
            InjectToken(AuthenticationService),
            __metadata("design:type", AuthenticationService)
        ], LoggedInAuth.prototype, "_authenticationService", void 0);
        __decorate([
            InjectToken(TokenService),
            __metadata("design:type", TokenService)
        ], LoggedInAuth.prototype, "_tokenService", void 0);
        __decorate([
            InjectToken(router.Router),
            __metadata("design:type", router.Router)
        ], LoggedInAuth.prototype, "_router", void 0);
        return LoggedInAuth;
    }());
    var LoggedOutAuth = /** @class */ (function () {
        function LoggedOutAuth(config) {
            this.config = config;
        }
        /**
         * @return {?}
         */
        LoggedOutAuth.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var token = this._tokenService.getToken();
            if (token && token.token && !token.isExpired()) {
                /** @type {?} */
                var redirectUrl = this.config.guards.loggedOutGuard.redirectUrl;
                if (redirectUrl) {
                    return this._router.navigate([redirectUrl]);
                }
                return false;
            }
            return true;
        };
        LoggedOutAuth.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoggedOutAuth.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['authConfig',] }] }
        ]; };
        /** @nocollapse */ LoggedOutAuth.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LoggedOutAuth_Factory() { return new LoggedOutAuth(core.ɵɵinject("authConfig")); }, token: LoggedOutAuth, providedIn: "root" });
        __decorate([
            InjectToken(AuthenticationService),
            __metadata("design:type", AuthenticationService)
        ], LoggedOutAuth.prototype, "_authenticationService", void 0);
        __decorate([
            InjectToken(TokenService),
            __metadata("design:type", TokenService)
        ], LoggedOutAuth.prototype, "_tokenService", void 0);
        __decorate([
            InjectToken(router.Router),
            __metadata("design:type", router.Router)
        ], LoggedOutAuth.prototype, "_router", void 0);
        return LoggedOutAuth;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        AuthModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: AuthModule,
                providers: [
                    { provide: 'authConfig', useValue: config },
                    AuthenticationService, LoggedInAuth, LoggedOutAuth,
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: JwtInterceptor,
                        multi: true
                    }
                ]
            };
        };
        AuthModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [common.CommonModule, http.HttpClientModule, router.RouterModule]
                    },] }
        ];
        return AuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogService = /** @class */ (function () {
        function DialogService(config, _translateService) {
            this.config = config;
            this._translateService = _translateService;
            this._translateService.loaded.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res) {
                    console.log('asasas');
                }
            }));
            this.reConfig();
        }
        /**
         * @param {?} prompt
         * @return {?}
         */
        DialogService.prototype.prompt = /**
         * @param {?} prompt
         * @return {?}
         */
        function (prompt) {
            prompt = this._translateService.instant(prompt);
            return this._dialogService.prompt(prompt, this._config);
        };
        /**
         * @param {?} message
         * @return {?}
         */
        DialogService.prototype.confirm = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            message = this._translateService.instant(message);
            return this._dialogService.confirm(message, this._config);
        };
        /**
         * @param {?} message
         * @return {?}
         */
        DialogService.prototype.alert = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            return this._dialogService.alert(message, this._config);
        };
        /**
         * @return {?}
         */
        DialogService.prototype.reConfig = /**
         * @return {?}
         */
        function () {
            var _a = this.config.dialog, theme = _a.theme, defaultText = _a.defaultText, cancelButtonText = _a.cancelButtonText, okButtonText = _a.okButtonText, color = _a.color;
            // console.log(theme);
            this._config = {
                theme: theme,
                color: color,
                defaultText: this._translateService.instant(defaultText),
                cancelButtonText: this._translateService.instant(cancelButtonText),
                okButtonText: this._translateService.instant(okButtonText),
            };
        };
        DialogService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DialogService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['uiConfig',] }] },
            { type: CoreTranslateService }
        ]; };
        /** @nocollapse */ DialogService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(core.ɵɵinject("uiConfig"), core.ɵɵinject(CoreTranslateService)); }, token: DialogService, providedIn: "root" });
        __decorate([
            InjectToken(ngxCoolDialogs.NgxCoolDialogsService),
            __metadata("design:type", ngxCoolDialogs.NgxCoolDialogsService)
        ], DialogService.prototype, "_dialogService", void 0);
        return DialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastTemplateComponent = /** @class */ (function () {
        function ToastTemplateComponent() {
        }
        ToastTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-toast-template',
                        template: "\n\t\t<div class=\"toast-container\">\n\t\t\t<div class=\"toast-icon\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"toast-message\">\n\t\t\t\t<span class=\"msg-caption\">\n\t\t\t\t\t{{toast.caption}}\n\t\t\t\t</span>\n\t\t\t\t<span class=\"msg-text\">\n\t\t\t\t\t{{toast.text}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: [""]
                    }] }
        ];
        ToastTemplateComponent.propDecorators = {
            toast: [{ type: core.Input }]
        };
        return ToastTemplateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastService = /** @class */ (function () {
        function ToastService(_translateService, _toast, config) {
            this._translateService = _translateService;
            this._toast = _toast;
            this.config = config;
        }
        /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        ToastService.prototype.success = /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        function (text, replace, duration) {
            duration = duration || this.config.toast.duration;
            /** @type {?} */
            var caption = this._translateService.instant('GLOBAL.OK_TITLE', replace);
            text = this._translateService.instant(text, replace);
            return this._toast.open({ text: text, type: 'success', caption: caption, duration: duration });
        };
        /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        ToastService.prototype.warning = /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        function (text, replace, duration) {
            duration = duration || this.config.toast.duration;
            /** @type {?} */
            var caption = this._translateService.instant('GLOBAL.OK_TITLE', replace);
            text = this._translateService.instant(text, replace);
            return this._toast.open({ text: text, type: 'warning', caption: caption, duration: duration });
        };
        /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        ToastService.prototype.error = /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        function (text, replace, duration) {
            duration = duration || this.config.toast.duration;
            /** @type {?} */
            var caption = this._translateService.instant('GLOBAL.ERROR_TITLE', replace);
            text = this._translateService.instant(text, replace);
            return this._toast.open({ text: text, type: 'danger', caption: caption, duration: duration });
        };
        /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        ToastService.prototype.info = /**
         * @param {?} text
         * @param {?=} replace
         * @param {?=} duration
         * @return {?}
         */
        function (text, replace, duration) {
            duration = duration || this.config.toast.duration;
            /** @type {?} */
            var caption = this._translateService.instant('GLOBAL.INFO_TITLE', replace);
            text = this._translateService.instant(text, replace);
            return this._toast.open({ text: text, type: 'info', caption: caption, duration: duration });
        };
        ToastService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ToastService.ctorParameters = function () { return [
            { type: CoreTranslateService },
            { type: ngxToastNotifications.Toaster },
            { type: undefined, decorators: [{ type: core.Inject, args: ['uiConfig',] }] }
        ]; };
        /** @nocollapse */ ToastService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(core.ɵɵinject(CoreTranslateService), core.ɵɵinject(toaster.Toaster), core.ɵɵinject("uiConfig")); }, token: ToastService, providedIn: "root" });
        return ToastService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalTemplateComponent = /** @class */ (function () {
        function ModalTemplateComponent(modalRef, fb) {
            this.modalRef = modalRef;
            this.fb = fb;
            this.form = fb.group({});
        }
        Object.defineProperty(ModalTemplateComponent.prototype, "componentType", {
            set: /**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                this.component = c;
                this.renderContent();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ModalTemplateComponent.prototype.renderContent = /**
         * @return {?}
         */
        function () {
            this.container.clear();
            /** @type {?} */
            var injector = this.container.injector;
            /** @type {?} */
            var cfr = injector.get(core.ComponentFactoryResolver);
            /** @type {?} */
            var componentFactory = cfr.resolveComponentFactory(this.component);
            /** @type {?} */
            var componentRef = this.container.createComponent(componentFactory);
            componentRef.instance.form = this.form;
            this.componentRef = componentRef;
        };
        /**
         * @return {?}
         */
        ModalTemplateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ModalTemplateComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.componentRef) {
                this.componentRef.destroy();
            }
        };
        ModalTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n\t\t<div class=\"modal-header\">\n\t\t\t<h5 class=\"modal-title\">{{title}}</h5>\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<form [formGroup]=\"form\">\n\t\t\t\t<ng-container #container></ng-container>\n\t\t\t</form>\n\t\t</div>\n\t",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ModalTemplateComponent.ctorParameters = function () { return [
            { type: ngxBootstrap.BsModalRef },
            { type: forms.FormBuilder }
        ]; };
        ModalTemplateComponent.propDecorators = {
            componentType: [{ type: core.Input }],
            container: [{ type: core.ViewChild, args: ['container', {
                            read: core.ViewContainerRef,
                            static: true
                        },] }]
        };
        return ModalTemplateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UIModule = /** @class */ (function () {
        function UIModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        UIModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: UIModule,
                providers: [
                    { provide: 'uiConfig', useValue: config },
                    DialogService,
                    ToastService
                ]
            };
        };
        UIModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ModalTemplateComponent,
                            ToastTemplateComponent
                        ],
                        imports: [
                            animations.BrowserAnimationsModule,
                            ngxCoolDialogs.NgxCoolDialogsModule.forRoot(DIALOG_CONFIG_DEFAULTS),
                            ngxToastNotifications.ToastNotificationsModule.forRoot({ component: ToastTemplateComponent }),
                            ngBootstrap.NgbDatepickerModule,
                            ngxBootstrap.ModalModule.forRoot(),
                            common.CommonModule,
                            forms.ReactiveFormsModule
                        ],
                        entryComponents: [
                            ModalTemplateComponent,
                            ToastTemplateComponent
                        ]
                    },] }
        ];
        return UIModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    Base = /** @class */ (function () {
        function Base() {
            this.isAlive = true;
        }
        /**
         * @return {?}
         */
        Base.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        // .pipe(takeWhile(x => this.isAlive))
        // .pipe(takeWhile(x => this.isAlive))
        /**
         * @return {?}
         */
        Base.prototype.ngOnDestroy = 
        // .pipe(takeWhile(x => this.isAlive))
        /**
         * @return {?}
         */
        function () {
            this.isAlive = false;
        };
        return Base;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LocalStorage = /** @class */ (function () {
        function LocalStorage(config) {
            if (config) {
                this._prefix = config.prefix || LOCAL_STORAGE_CONFIG_DEFAULTS.prefix;
            }
        }
        /**
         * @param {?} key
         * @param {?} value
         * @param {?=} expiredAt
         * @param {?=} prefix
         * @return {?}
         */
        LocalStorage.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @param {?=} expiredAt
         * @param {?=} prefix
         * @return {?}
         */
        function (key, value, expiredAt, prefix) {
            if (value !== null) {
                /** @type {?} */
                var data = {
                    expire: expiredAt || 0,
                    data: value
                };
                localStorage.setItem((prefix || this._prefix) + "." + key, JSON.stringify(data));
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        LocalStorage.prototype.getKey = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index < 0) {
                console.error(new Error('index has to be 0 or greater'));
            }
            try {
                return localStorage.key(index);
            }
            catch (error) {
                console.error(error);
            }
        };
        /**
         * @param {?} key
         * @param {?=} prefix
         * @return {?}
         */
        LocalStorage.prototype.has = /**
         * @param {?} key
         * @param {?=} prefix
         * @return {?}
         */
        function (key, prefix) {
            return ((prefix || this._prefix) + "." + key in localStorage);
        };
        /**
         * @param {?} key
         * @param {?=} prefix
         * @return {?}
         */
        LocalStorage.prototype.get = /**
         * @param {?} key
         * @param {?=} prefix
         * @return {?}
         */
        function (key, prefix) {
            try {
                return localStorage.getItem((prefix || this._prefix) + "." + key);
            }
            catch (error) {
                console.error(error);
            }
        };
        /**
         * @param {?} key
         * @param {?=} prefix
         * @return {?}
         */
        LocalStorage.prototype.remove = /**
         * @param {?} key
         * @param {?=} prefix
         * @return {?}
         */
        function (key, prefix) {
            try {
                localStorage.removeItem((prefix || this._prefix) + "_" + key);
            }
            catch (error) {
                console.error(error);
            }
        };
        /**
         * @return {?}
         */
        LocalStorage.prototype.clear = /**
         * @return {?}
         */
        function () {
            try {
                localStorage.clear();
            }
            catch (error) {
                console.error(error);
            }
        };
        LocalStorage.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LocalStorage.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
        ]; };
        /** @nocollapse */ LocalStorage.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LocalStorage_Factory() { return new LocalStorage(core.ɵɵinject("config")); }, token: LocalStorage, providedIn: "root" });
        return LocalStorage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalService = /** @class */ (function () {
        function ModalService(_modalService, resolver, injector, config) {
            this._modalService = _modalService;
            this.resolver = resolver;
            this.injector = injector;
            this.config = config;
        }
        /**
         * @param {?} componentType
         * @param {?=} config
         * @return {?}
         */
        ModalService.prototype.open = /**
         * @param {?} componentType
         * @param {?=} config
         * @return {?}
         */
        function (componentType, config) {
            /** @type {?} */
            var ref = this._modalService.show(ModalTemplateComponent, { class: config.class });
            /** @type {?} */
            var content = ((/** @type {?} */ (ref.content)));
            content.componentType = componentType;
            content.title = config.title || 'title';
            content.type = config.type || 'add';
            content.data = config.data || {};
            return ref;
        };
        ModalService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () { return [
            { type: ngxBootstrap.BsModalService },
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: ['uiConfig',] }] }
        ]; };
        /** @nocollapse */ ModalService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(core.ɵɵinject(modal.BsModalService), core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.INJECTOR), core.ɵɵinject("uiConfig")); }, token: ModalService, providedIn: "root" });
        return ModalService;
    }());

    exports.AUTH_CONFIG_DEFAULTS = AUTH_CONFIG_DEFAULTS;
    exports.AuthModule = AuthModule;
    exports.AuthenticationService = AuthenticationService;
    exports.Base = Base;
    exports.CoreModule = CoreModule;
    exports.CoreTranslateService = CoreTranslateService;
    exports.DEFAULT_LANG = DEFAULT_LANG;
    exports.DIALOG_CONFIG_DEFAULTS = DIALOG_CONFIG_DEFAULTS;
    exports.DialogService = DialogService;
    exports.GlobalInject = GlobalInject;
    exports.HttpLoaderFactory = HttpLoaderFactory;
    exports.HttpProvider = HttpProvider;
    exports.InjectToken = InjectToken;
    exports.LOCAL_STORAGE_CONFIG_DEFAULTS = LOCAL_STORAGE_CONFIG_DEFAULTS;
    exports.LocalStorage = LocalStorage;
    exports.LoggedInAuth = LoggedInAuth;
    exports.LoggedOutAuth = LoggedOutAuth;
    exports.MODULE_CONFIG_DEFAULTS = MODULE_CONFIG_DEFAULTS;
    exports.ModalService = ModalService;
    exports.ModalTemplateComponent = ModalTemplateComponent;
    exports.QUERY_SERVICE_TOKEN = QUERY_SERVICE_TOKEN;
    exports.Query = Query;
    exports.QueryService = QueryService;
    exports.SUPPORT_LANG = SUPPORT_LANG;
    exports.ToastService = ToastService;
    exports.ToastTemplateComponent = ToastTemplateComponent;
    exports.Token = Token;
    exports.TokenError = TokenError;
    exports.UIModule = UIModule;
    exports.UiService = UiService;
    exports.init_app = init_app;
    exports.isString = isString;
    exports.translateModuleOptions = translateModuleOptions;
    exports.ɵa = AppLoadService;
    exports.ɵf = CoreHttpInterceptor;
    exports.ɵg = TokenService;
    exports.ɵh = JwtInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=core.umd.js.map
