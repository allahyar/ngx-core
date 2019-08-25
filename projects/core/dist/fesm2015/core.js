import { InjectionToken, Injector, Injectable, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule, Inject } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
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
const MODULE_CONFIG_DEFAULTS = {};
/** @type {?} */
const LOCAL_STORAGE_CONFIG_DEFAULTS = {
    prefix: 'ZarsamErp'
};
/** @type {?} */
const AUTH_CONFIG_DEFAULTS = {
    loginEndPoint: '/login'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const QUERY_SERVICE_TOKEN = new InjectionToken('QueryService');
/** @type {?} */
const DEFAULT_LANG = new InjectionToken('DefaultLang');
/** @type {?} */
const SUPPORT_LANG = new InjectionToken('SupportLang');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Query {
}

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
function InjectToken(token, notFoundValue = null, flags) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        const prev = Object.getOwnPropertyDescriptor(target, key);
        /** @type {?} */
        const getter = (/**
         * @return {?}
         */
        function () {
            if (this['$$$Inject_' + token.toString()]) {
                return this['$$$Inject_' + token.toString()];
            }
            /** @type {?} */
            let localInjector = this.injector || this['$$$_Injector'];
            if (!localInjector) {
                for (const filedKey in this) {
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
            const value = (localInjector || window['$$$_root_injector']).get(token, notFoundValue, flags);
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
function GlobalInject(token, notFoundValue = null, flags) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        const prev = Object.getOwnPropertyDescriptor(target, key);
        /** @type {?} */
        const getter = (/**
         * @return {?}
         */
        function () {
            if (this['$$$Inject_' + token.toString()]) {
                return this['$$$Inject_' + token.toString()];
            }
            /** @type {?} */
            const localInjectors = this.injectors;
            if (!localInjectors) {
                console.warn('Could not find local Injectors in  (' +
                    target.constructor.name +
                    ')!');
            }
            else {
                for (let i = localInjectors.length - 1; i >= 0; --i) {
                    /** @type {?} */
                    const injector = localInjectors[i];
                    /** @type {?} */
                    const value = injector.get(token, notFoundValue, flags);
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
class HttpProvider {
    /**
     * @param {?} http
     * @param {?} injector
     */
    constructor(http, injector) {
        this.http = http;
        this.injector = injector;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        // this.http.get<any>(data.url);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next({ success: true });
            observer.complete();
        }));
    }
    /**
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(url, body, options) {
        return this.http.post(url, body, options);
    }
}
HttpProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpProvider.ctorParameters = () => [
    { type: HttpClient },
    { type: Injector }
];
/** @nocollapse */ HttpProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpProvider_Factory() { return new HttpProvider(ɵɵinject(HttpClient), ɵɵinject(INJECTOR)); }, token: HttpProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class QueryService extends Query {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super();
        this.injector = injector;
    }
    /**
     * @param {?} info
     * @return {?}
     */
    delete(info) {
        return this.http.get('dadad');
    }
    /**
     * @param {?} info
     * @return {?}
     */
    get(info) {
        return undefined;
    }
    /**
     * @param {?} info
     * @return {?}
     */
    list(info) {
        return undefined;
    }
    /**
     * @param {?} info
     * @return {?}
     */
    post(info) {
        return undefined;
    }
    /**
     * @param {?} info
     * @return {?}
     */
    grid(info) {
        return undefined;
    }
}
QueryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
QueryService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ QueryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function QueryService_Factory() { return new QueryService(ɵɵinject(INJECTOR)); }, token: QueryService, providedIn: "root" });
__decorate([
    InjectToken(HttpProvider),
    __metadata("design:type", HttpProvider)
], QueryService.prototype, "http", void 0);

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
const ɵ0 = (HttpLoaderFactory);
/** @type {?} */
const translateModuleOptions = {
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
class UiService {
    constructor() {
    }
    /**
     * @param {?} dir
     * @return {?}
     */
    setDirection(dir) {
        this.document.dir = dir;
    }
    /**
     * @return {?}
     */
    get direction() {
        return this.document.dir;
    }
}
UiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UiService.ctorParameters = () => [];
__decorate([
    InjectToken(DOCUMENT),
    __metadata("design:type", Document)
], UiService.prototype, "document", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModule {
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
__decorate([
    InjectToken(TranslateService),
    __metadata("design:type", TranslateService)
], CoreModule.prototype, "_translateService", void 0);
__decorate([
    InjectToken(UiService),
    __metadata("design:type", UiService)
], CoreModule.prototype, "_uiService", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TokenError extends Error {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.name = 'TokenError';
    }
}
class Token {
    /**
     * @param {?} token
     */
    constructor(token) {
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
    decodeBase64(str) {
        /** @type {?} */
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
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
    }
    /**
     * @return {?}
     */
    decodeToken() {
        /** @type {?} */
        const parts = this.token.split('.');
        if (parts.length !== 3) {
            throw new TokenError('A JWT Token must have 3 parts!');
        }
        /** @type {?} */
        const decoded = this.decodeBase64(parts[1]);
        if (!decoded) {
            throw new TokenError('Cannot decode the token!');
        }
        return JSON.parse(decoded);
    }
    /**
     * @return {?}
     */
    getExpirationDate() {
        /** @type {?} */
        const decoded = this.decodeToken();
        if (!decoded.hasOwnProperty('exp')) {
            return new Date();
        }
        /** @type {?} */
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    /**
     * @param {?=} offsetSeconds
     * @return {?}
     */
    isExpired(offsetSeconds = 0) {
        /** @type {?} */
        const date = this.getExpirationDate();
        if (date.getSeconds() === new Date().getSeconds()) {
            return false;
        }
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TokenService {
    constructor() {
        this._token = new BehaviorSubject(new Token(localStorage.getItem('satellizer_token')));
    }
    /**
     * Get the current token.
     * @return {?}
     */
    getToken() {
        /** @type {?} */
        const token = this._token.getValue();
        return (token && token.token) ? token : null;
    }
    /**
     * Returns an stream of tokens.
     * @return {?}
     */
    getTokenStream() {
        return this._token.asObservable();
    }
    /**
     * Update the current token.
     * @param {?} token
     * @return {?}
     */
    setToken(token) {
        this._token.next(new Token(token));
    }
    /**
     * Remove the current token.
     * @return {?}
     */
    removeToken() {
        this._token.next(null);
    }
}
TokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TokenService.ctorParameters = () => [];
/** @nocollapse */ TokenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TokenService_Factory() { return new TokenService(); }, token: TokenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this._currentUserValue = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    get currentUserValue() {
        return this._currentUserValue;
    }
    /**
     * @return {?}
     */
    get currentUser() {
        return this._currentUserValue.asObservable();
    }
    /**
     * @param {?} token
     * @return {?}
     */
    verifyToken(token) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.http.get(this.config.loginEndPoint + token).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                if (res.success) {
                    resolve(res);
                    return true;
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            err => reject(err)));
        }));
    }
    /**
     * @return {?}
     */
    loggedIn() {
        return this.currentUser !== null;
    }
    /**
     * @return {?}
     */
    logout() {
        this._currentUserValue.next(null);
        return this._currentUserValue.asObservable();
    }
}
AuthenticationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
__decorate([
    InjectToken(HttpProvider),
    __metadata("design:type", HttpProvider)
], AuthenticationService.prototype, "http", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoggedInAuth {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const token = this._tokenService.getToken();
        if (token && token.token) {
            return !token.isExpired();
        }
        /** @type {?} */
        let redirectUrl = this.config.guards.loggedInGuard.redirectUrl;
        if (redirectUrl) {
            return this._router.navigate([redirectUrl]);
        }
        return false;
    }
}
LoggedInAuth.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoggedInAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: 'config', useValue: config },
                AuthenticationService, LoggedInAuth,
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [CommonModule, HttpClientModule, RouterModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStorage {
    /**
     * @param {?=} config
     */
    constructor(config) {
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
    set(key, value, expiredAt, prefix) {
        if (value !== null) {
            /** @type {?} */
            const data = {
                expire: expiredAt || 0,
                data: value
            };
            localStorage.setItem(`${prefix || this._prefix}.${key}`, JSON.stringify(data));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getKey(index) {
        if (index < 0) {
            console.error(new Error('index has to be 0 or greater'));
        }
        try {
            return localStorage.key(index);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @param {?} key
     * @param {?=} prefix
     * @return {?}
     */
    has(key, prefix) {
        return (`${prefix || this._prefix}.${key}` in localStorage);
    }
    /**
     * @param {?} key
     * @param {?=} prefix
     * @return {?}
     */
    get(key, prefix) {
        try {
            return localStorage.getItem(`${prefix || this._prefix}.${key}`);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @param {?} key
     * @param {?=} prefix
     * @return {?}
     */
    remove(key, prefix) {
        try {
            localStorage.removeItem(`${prefix || this._prefix}_${key}`);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error(error);
        }
    }
}
LocalStorage.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LocalStorage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ LocalStorage.ngInjectableDef = ɵɵdefineInjectable({ factory: function LocalStorage_Factory() { return new LocalStorage(ɵɵinject("config")); }, token: LocalStorage, providedIn: "root" });

export { AUTH_CONFIG_DEFAULTS, AuthModule, AuthenticationService, CoreModule, DEFAULT_LANG, GlobalInject, HttpLoaderFactory, HttpProvider, InjectToken, LOCAL_STORAGE_CONFIG_DEFAULTS, LocalStorage, LoggedInAuth, MODULE_CONFIG_DEFAULTS, QUERY_SERVICE_TOKEN, Query, QueryService, SUPPORT_LANG, UiService, translateModuleOptions, TokenService as ɵc };
//# sourceMappingURL=core.js.map
