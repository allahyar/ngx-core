import { InjectionToken, Injector, Injectable, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule, Inject } from '@angular/core';
import { __extends, __decorate, __metadata } from 'tslib';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, injector) {
        this.http = http;
        this.injector = injector;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    HttpProvider.prototype.get = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        // this.http.get<any>(data.url);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next({ success: true });
            observer.complete();
        }));
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
        return this.http.post(url, body, options);
    };
    HttpProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpProvider.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Injector }
    ]; };
    /** @nocollapse */ HttpProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpProvider_Factory() { return new HttpProvider(ɵɵinject(HttpClient), ɵɵinject(INJECTOR)); }, token: HttpProvider, providedIn: "root" });
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
    __decorate([
        InjectToken(TranslateService),
        __metadata("design:type", TranslateService)
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
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(config) {
        this.config = config;
        this._currentUserValue = new ReplaySubject();
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
            return this._currentUserValue.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} token
     * @return {?}
     */
    AuthenticationService.prototype.verifyToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.http.get(_this.config.loginEndPoint + token).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res.success) {
                    resolve(res);
                    return true;
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return reject(err); }));
        }));
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.loggedIn = /**
     * @return {?}
     */
    function () {
        return this.currentUser !== null;
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this._currentUserValue.next(null);
        return this._currentUserValue.asObservable();
    };
    AuthenticationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
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
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ LoggedInAuth.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoggedInAuth_Factory() { return new LoggedInAuth(ɵɵinject("config")); }, token: LoggedInAuth, providedIn: "root" });
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
                { provide: 'config', useValue: config },
                AuthenticationService, LoggedInAuth,
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

export { AUTH_CONFIG_DEFAULTS, AuthModule, AuthenticationService, CoreModule, DEFAULT_LANG, GlobalInject, HttpLoaderFactory, HttpProvider, InjectToken, LOCAL_STORAGE_CONFIG_DEFAULTS, LocalStorage, LoggedInAuth, MODULE_CONFIG_DEFAULTS, QUERY_SERVICE_TOKEN, Query, QueryService, SUPPORT_LANG, UiService, translateModuleOptions, TokenService as ɵc };
//# sourceMappingURL=core.js.map
