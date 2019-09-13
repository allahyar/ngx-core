import { InjectionToken, Injector, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule, APP_INITIALIZER, Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, forwardRef, Directive, ElementRef, HostListener } from '@angular/core';
import { __extends, __decorate, __metadata } from 'tslib';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { NgxCoolDialogsService, NgxCoolDialogsModule } from 'ngx-cool-dialogs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Toaster, ToastNotificationsModule } from 'ngx-toast-notifications';
import { Toaster as Toaster$1 } from 'ngx-toast-notifications/dist/toaster';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, ModalModule, BsModalService } from 'ngx-bootstrap';
import { ControlContainer, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService as BsModalService$1, BsModalRef as BsModalRef$1 } from 'ngx-bootstrap/modal';

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
var QUERY_SERVICE_TOKEN = new InjectionToken('QueryService');
/** @type {?} */
var DEFAULT_LANG = new InjectionToken('DefaultLang');
/** @type {?} */
var SUPPORT_LANG = new InjectionToken('SupportLang');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
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
                        if (this[filedKey] instanceof Injector ||
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpProvider.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: HttpClient },
        { type: Injector }
    ]; };
    /** @nocollapse */ HttpProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpProvider_Factory() { return new HttpProvider(ɵɵinject("config"), ɵɵinject(HttpClient), ɵɵinject(INJECTOR)); }, token: HttpProvider, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    QueryService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ QueryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function QueryService_Factory() { return new QueryService(ɵɵinject(INJECTOR)); }, token: QueryService, providedIn: "root" });
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
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// ngx-translate and the loader module
var ɵ0 = (HttpLoaderFactory);
/** @type {?} */
var translateModuleOptions = {
    loader: {
        provide: TranslateLoader,
        useFactory: ɵ0,
        deps: [HttpClient]
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
        { type: Injectable }
    ];
    /** @nocollapse */
    UiService.ctorParameters = function () { return []; };
    __decorate([
        InjectToken(DOCUMENT),
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
        this._isLoaded = new BehaviorSubject(false);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CoreTranslateService.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    /** @nocollapse */ CoreTranslateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreTranslateService_Factory() { return new CoreTranslateService(ɵɵinject(TranslateService)); }, token: CoreTranslateService, providedIn: "root" });
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
        this._currentUserSubject = new ReplaySubject(1);
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
        return this.http.get(this.config.tokenVerifyEndPoint).pipe(map((/**
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
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] },
        { type: Router }
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
                        resolve();
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
        { type: Injectable }
    ];
    /** @nocollapse */
    AppLoadService.ctorParameters = function () { return [
        { type: CoreTranslateService },
        { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] }
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CoreHttpInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ CoreHttpInterceptor.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreHttpInterceptor_Factory() { return new CoreHttpInterceptor(ɵɵinject("config")); }, token: CoreHttpInterceptor, providedIn: "root" });
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
        this._token = new BehaviorSubject(new Token(localStorage.getItem('satellizer_token')));
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TokenService.ctorParameters = function () { return []; };
    /** @nocollapse */ TokenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TokenService_Factory() { return new TokenService(); }, token: TokenService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JwtInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] },
        { type: TokenService }
    ]; };
    /** @nocollapse */ JwtInterceptor.ngInjectableDef = ɵɵdefineInjectable({ factory: function JwtInterceptor_Factory() { return new JwtInterceptor(ɵɵinject("authConfig"), ɵɵinject(TokenService)); }, token: JwtInterceptor, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoggedInAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] }
    ]; };
    /** @nocollapse */ LoggedInAuth.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoggedInAuth_Factory() { return new LoggedInAuth(ɵɵinject("authConfig")); }, token: LoggedInAuth, providedIn: "root" });
    __decorate([
        InjectToken(AuthenticationService),
        __metadata("design:type", AuthenticationService)
    ], LoggedInAuth.prototype, "_authenticationService", void 0);
    __decorate([
        InjectToken(TokenService),
        __metadata("design:type", TokenService)
    ], LoggedInAuth.prototype, "_tokenService", void 0);
    __decorate([
        InjectToken(Router),
        __metadata("design:type", Router)
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoggedOutAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] }
    ]; };
    /** @nocollapse */ LoggedOutAuth.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoggedOutAuth_Factory() { return new LoggedOutAuth(ɵɵinject("authConfig")); }, token: LoggedOutAuth, providedIn: "root" });
    __decorate([
        InjectToken(AuthenticationService),
        __metadata("design:type", AuthenticationService)
    ], LoggedOutAuth.prototype, "_authenticationService", void 0);
    __decorate([
        InjectToken(TokenService),
        __metadata("design:type", TokenService)
    ], LoggedOutAuth.prototype, "_tokenService", void 0);
    __decorate([
        InjectToken(Router),
        __metadata("design:type", Router)
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
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                }
            ]
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [CommonModule, HttpClientModule, RouterModule]
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] },
        { type: CoreTranslateService }
    ]; };
    /** @nocollapse */ DialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(ɵɵinject("uiConfig"), ɵɵinject(CoreTranslateService)); }, token: DialogService, providedIn: "root" });
    __decorate([
        InjectToken(NgxCoolDialogsService),
        __metadata("design:type", NgxCoolDialogsService)
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
        { type: Component, args: [{
                    selector: 'lib-toast-template',
                    template: "\n\t\t<div class=\"toast-container\">\n\t\t\t<div class=\"toast-icon\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"toast-message\">\n\t\t\t\t<span class=\"msg-caption\">\n\t\t\t\t\t{{toast.caption}}\n\t\t\t\t</span>\n\t\t\t\t<span class=\"msg-text\">\n\t\t\t\t\t{{toast.text}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t",
                    styles: [""]
                }] }
    ];
    ToastTemplateComponent.propDecorators = {
        toast: [{ type: Input }]
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: CoreTranslateService },
        { type: Toaster },
        { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(ɵɵinject(CoreTranslateService), ɵɵinject(Toaster$1), ɵɵinject("uiConfig")); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalTemplateComponent = /** @class */ (function () {
    function ModalTemplateComponent(modalRef) {
        this.modalRef = modalRef;
        this.loading = false;
    }
    Object.defineProperty(ModalTemplateComponent.prototype, "componentType", {
        set: /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            this.component = c;
            this.onSubmit = new Subject();
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
        var cfr = injector.get(ComponentFactoryResolver);
        /** @type {?} */
        var componentFactory = cfr.resolveComponentFactory(this.component);
        /** @type {?} */
        var componentRef = this.container.createComponent(componentFactory);
        componentRef.instance.form = this.form;
        this.componentRef = componentRef;
        this.loading = true;
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
    /**
     * @return {?}
     */
    ModalTemplateComponent.prototype.onSave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resolveModalState = (/**
         * @return {?}
         */
        function () {
            _this.onSubmit.next(true);
            _this.modalRef.hide();
        });
        this.promise = this.cri.onSave(this.form.value);
        /** @type {?} */
        var isSubscription = this.promise instanceof Subscription;
        if (isSubscription) {
            /** @type {?} */
            var promise = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                ((/** @type {?} */ (_this.promise))).add(resolve);
            }));
            if (promise.finally) {
                promise.finally(resolveModalState);
            }
        }
    };
    /**
     * @return {?}
     */
    ModalTemplateComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.onSubmit.next(false);
        this.modalRef.hide();
    };
    /**
     * @return {?}
     */
    ModalTemplateComponent.prototype.onHide = /**
     * @return {?}
     */
    function () {
        this.modalRef.hide();
    };
    Object.defineProperty(ModalTemplateComponent.prototype, "cri", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    ModalTemplateComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<div class=\"modal-header\">\n\t\t\t<h5 class=\"modal-title\">{{title}}</h5>\n\t\t\t<button type=\"button\" class=\"close\" (click)=\"onHide()\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<form #f=\"ngForm\">\n\t\t\t\t<ng-container #container libNgForm></ng-container>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success mr-2\" *ngIf=\"loading\"\n\t\t\t\t\t\t[progress]=\"promise\"\n\t\t\t\t\t\t[disabled]=\"f.invalid\"\n\t\t\t\t\t\t(click)=\"onSave()\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"onClose()\">\n\t\t\t\t\tClose\n\t\t\t\t</button>\n\t\t\t</form>\n\n\t\t</div>\n\t",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalTemplateComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    ModalTemplateComponent.propDecorators = {
        form: [{ type: ViewChild, args: ['f', { static: true },] }],
        componentType: [{ type: Input }],
        container: [{ type: ViewChild, args: ['container', {
                        read: ViewContainerRef,
                        static: true
                    },] }]
    };
    return ModalTemplateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NgForm; }))
};
var NgFormDirective = /** @class */ (function () {
    function NgFormDirective() {
    }
    NgFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libNgForm]',
                    providers: [formDirectiveProvider],
                    exportAs: 'ngForm'
                },] }
    ];
    /** @nocollapse */
    NgFormDirective.ctorParameters = function () { return []; };
    return NgFormDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressButtonDirective = /** @class */ (function () {
    function ProgressButtonDirective(el) {
        this.isPromiseDone = false;
        this.element = el.nativeElement;
    }
    Object.defineProperty(ProgressButtonDirective.prototype, "progress", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isSubscription = value instanceof Subscription;
            if (isSubscription) {
                this.promise = new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                function (resolve) {
                    ((/** @type {?} */ (value))).add(resolve);
                }));
                this.initPromiseHandler();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProgressButtonDirective.prototype.disabled = /**
     * @return {?}
     */
    function () {
        this.element.setAttribute('disabled', 'disabled');
    };
    /**
     * @return {?}
     */
    ProgressButtonDirective.prototype.enabled = /**
     * @return {?}
     */
    function () {
        this.element.removeAttribute('disabled');
    };
    /**
     * @return {?}
     */
    ProgressButtonDirective.prototype.initPromiseHandler = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.element && this.promise) {
            this.disabled();
            /** @type {?} */
            var promise = this.promise;
            /** @type {?} */
            var resolveLoadingState = (/**
             * @return {?}
             */
            function () {
                _this.isPromiseDone = true;
                if (_this.isPromiseDone) {
                    _this.enabled();
                }
            });
            if (promise.finally) {
                promise.finally(resolveLoadingState);
            }
            else {
                promise
                    .then(resolveLoadingState)
                    .catch(resolveLoadingState);
            }
        }
    };
    /**
     * @return {?}
     */
    ProgressButtonDirective.prototype.handleButton = /**
     * @return {?}
     */
    function () {
        // some code
    };
    ProgressButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[progress]'
                },] }
    ];
    /** @nocollapse */
    ProgressButtonDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ProgressButtonDirective.propDecorators = {
        progress: [{ type: Input }],
        handleButton: [{ type: HostListener, args: ['click',] }]
    };
    return ProgressButtonDirective;
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
                ToastService,
                BsModalRef
            ]
        };
    };
    UIModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalTemplateComponent,
                        ToastTemplateComponent,
                        NgFormDirective,
                        ProgressButtonDirective
                    ],
                    imports: [
                        BrowserAnimationsModule,
                        NgxCoolDialogsModule.forRoot(DIALOG_CONFIG_DEFAULTS),
                        ToastNotificationsModule.forRoot({ component: ToastTemplateComponent }),
                        NgbDatepickerModule,
                        ModalModule.forRoot(),
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
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
var  /**
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
var ModalService = /** @class */ (function () {
    function ModalService(_modalService, resolver, modalRef, injector, config) {
        this._modalService = _modalService;
        this.resolver = resolver;
        this.modalRef = modalRef;
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
        this.modalRef = this._modalService.show(ModalTemplateComponent, { class: config.class });
        /** @type {?} */
        var content = this.modalRef.content;
        content.componentType = componentType;
        content.title = config.title || 'title';
        content.type = config.type || 'add';
        content.data = config.data || {};
        return content;
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: BsModalService },
        { type: ComponentFactoryResolver },
        { type: BsModalRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(BsModalService$1), ɵɵinject(ComponentFactoryResolver), ɵɵinject(BsModalRef$1), ɵɵinject(INJECTOR), ɵɵinject("uiConfig")); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        InjectToken(ModalService),
        __metadata("design:type", ModalService)
    ], Modal.prototype, "modalRef", void 0);
    return Modal;
}(Base));

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LocalStorage.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ LocalStorage.ngInjectableDef = ɵɵdefineInjectable({ factory: function LocalStorage_Factory() { return new LocalStorage(ɵɵinject("config")); }, token: LocalStorage, providedIn: "root" });
    return LocalStorage;
}());

export { AUTH_CONFIG_DEFAULTS, AuthModule, AuthenticationService, Base, CoreModule, CoreTranslateService, DEFAULT_LANG, DIALOG_CONFIG_DEFAULTS, DialogService, GlobalInject, HttpLoaderFactory, HttpProvider, InjectToken, LOCAL_STORAGE_CONFIG_DEFAULTS, LocalStorage, LoggedInAuth, LoggedOutAuth, MODULE_CONFIG_DEFAULTS, Modal, ModalService, ModalTemplateComponent, QUERY_SERVICE_TOKEN, Query, QueryService, SUPPORT_LANG, ToastService, ToastTemplateComponent, Token, TokenError, UIModule, UiService, init_app, isString, translateModuleOptions, AppLoadService as ɵa, CoreHttpInterceptor as ɵf, TokenService as ɵg, JwtInterceptor as ɵh, formDirectiveProvider as ɵi, NgFormDirective as ɵj, ProgressButtonDirective as ɵk };
//# sourceMappingURL=core.js.map
