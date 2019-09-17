import { InjectionToken, Injector, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Component, APP_INITIALIZER, NgModule, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, forwardRef, Directive, ElementRef, HostListener } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { map, filter, distinctUntilChanged } from 'rxjs/operators';
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
const MODULE_CONFIG_DEFAULTS = {};
/** @type {?} */
const LOCAL_STORAGE_CONFIG_DEFAULTS = {
    prefix: 'ZarsamErp'
};
/** @type {?} */
const AUTH_CONFIG_DEFAULTS = {
    loginEndPoint: '/login'
};
/** @type {?} */
const DIALOG_CONFIG_DEFAULTS = {
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
/**
 * @template T
 */
class HttpProvider {
    /**
     * @param {?} config
     * @param {?} http
     * @param {?} injector
     */
    constructor(config, http, injector) {
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
    get(url, options) {
        // this.http.get<any>(data.url);
        // return new Observable((observer) => {
        // 	observer.next({success: true});
        // 	observer.complete();
        // });
        return this.http.get(this._baseUrl + url, options);
    }
    /**
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(url, body, options) {
        return this.http.post(this._baseUrl + url, body, options);
    }
}
HttpProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpProvider.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: HttpClient },
    { type: Injector }
];
/** @nocollapse */ HttpProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpProvider_Factory() { return new HttpProvider(ɵɵinject("config"), ɵɵinject(HttpClient), ɵɵinject(INJECTOR)); }, token: HttpProvider, providedIn: "root" });

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
 * @param {?} appLoadService
 * @return {?}
 */
function initializeApp(appLoadService) {
    return (/**
     * @return {?}
     */
    () => appLoadService.initializeApp());
}
/**
 * @param {?} obj
 * @return {?}
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
// const split = path.split('/');
// split.forEach(crumb => {
// 	if (crumb.indexOf(':', 0) === 0) {
// 		console.log(crumb);
// 	}
// });
/**
 * @param {?} path
 * @param {?} route
 * @return {?}
 */
function routePathExtract(path, route) {
    if (!isEmpty(route.snapshot.params)) {
        /** @type {?} */
        const key = path.split('/')[0].substr(1);
        return {
            key,
            label: route.snapshot.params[key]
        };
    }
    return {
        key: null,
        label: path
    };
}
/**
 * @param {?} crumb
 * @return {?}
 */
function crumbCleaner(crumb) {
    return crumb.substr(1);
}

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
class CoreTranslateService {
    /**
     * @param {?} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
        this._isLoaded = new BehaviorSubject(false);
    }
    /**
     * @param {?} langs
     * @return {?}
     */
    addLangs(langs) {
        return this._translateService.addLangs(langs);
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        return this._translateService.use(lang);
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
        this._translateService.setDefaultLang(lang);
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    instant(key, interpolateParams) {
        if (isString(key) && key.indexOf(':') > 0) {
            /** @type {?} */
            const items = ((/** @type {?} */ (key))).split(':');
            return items
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => this._translateService.instant(item, interpolateParams)))
                .join(' ');
        }
        return this._translateService.instant(key, interpolateParams);
    }
    /**
     * @return {?}
     */
    isCompleted() {
        this._isLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get loaded() {
        return this._isLoaded.asObservable();
    }
}
CoreTranslateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CoreTranslateService.ctorParameters = () => [
    { type: TranslateService }
];
/** @nocollapse */ CoreTranslateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreTranslateService_Factory() { return new CoreTranslateService(ɵɵinject(TranslateService)); }, token: CoreTranslateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationService {
    /**
     * @param {?} config
     * @param {?} router
     */
    constructor(config, router) {
        this.config = config;
        this.router = router;
        this._currentUserSubject = new ReplaySubject(1);
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
        return this._currentUserSubject.asObservable();
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    setting(prop) {
        if (prop.indexOf('.') > 0) {
            /** @type {?} */
            const split = prop.split('.');
            // return this.currentUserValue.setting.bind(split);
        }
        return this.currentUserValue.setting[prop];
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
    }
    /**
     * @param {?=} token
     * @return {?}
     */
    verifyToken(token) {
        return this.http.get(this.config.tokenVerifyEndPoint).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res.success) {
                console.log(res.success);
                this._currentUserValue = res.result;
                this._currentUserSubject.next(res.result);
                this.router.navigateByUrl(this.config.loginEndPoint);
                return true;
            }
            return false;
        })));
    }
    /**
     * @return {?}
     */
    loggedIn() {
        return this._currentUserValue !== null;
    }
    /**
     * @param {?} endPoint
     * @return {?}
     */
    logout(endPoint) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.http.get(endPoint || this.config.logoutEndPoint).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this._currentUserSubject.next(null);
                this._currentUserValue = null;
                this.router.navigateByUrl(this.config.guards.loggedOutGuard.redirectUrl);
                resolve(true);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => reject));
        }));
    }
}
AuthenticationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] },
    { type: Router }
];
__decorate([
    InjectToken(HttpProvider),
    __metadata("design:type", HttpProvider)
], AuthenticationService.prototype, "http", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppLoadService {
    /**
     * @param {?} _translateService
     * @param {?} config
     */
    constructor(_translateService, config) {
        this._translateService = _translateService;
        this.config = config;
    }
    /**
     * @return {?}
     */
    initializeApp() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this._translateService.loaded.subscribe((/**
             * @param {?} completed
             * @return {?}
             */
            completed => {
                if (completed) {
                    if (!this.config.useTokenVerify) {
                        resolve();
                        return true;
                    }
                    this._authService.verifyToken().subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    res => {
                        resolve();
                        return true;
                    }));
                }
            }));
        }));
    }
}
AppLoadService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppLoadService.ctorParameters = () => [
    { type: CoreTranslateService },
    { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] }
];
__decorate([
    InjectToken(AuthenticationService),
    __metadata("design:type", AuthenticationService)
], AppLoadService.prototype, "_authService", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreHttpInterceptor {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        let changeHeader;
        if (this.config.api.useInterceptor) {
            changeHeader = { url: `${this.config.api.baseUrl}${req.url}` };
        }
        /** @type {?} */
        const apiReq = req.clone(changeHeader);
        return next.handle(apiReq);
    }
}
CoreHttpInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CoreHttpInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ CoreHttpInterceptor.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreHttpInterceptor_Factory() { return new CoreHttpInterceptor(ɵɵinject("config")); }, token: CoreHttpInterceptor, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsService {
    /**
     * @param {?} router
     * @param {?} activatedRoute
     * @param {?} config
     */
    constructor(router, activatedRoute, config) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.config = config;
        this.breadcrumbs$ = new BehaviorSubject([]);
        router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd)), distinctUntilChanged()).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            /** @type {?} */
            const prefix = this.config.breadcrumb.prefix;
            /** @type {?} */
            const crumb = (prefix) ? [{ label: prefix.toString(), url: '', key: null }] : [];
            this.breadcrumbs$.next(crumb);
            this._resolveCrumbs(activatedRoute.root);
            if (this.config.breadcrumb.useTitle) {
                console.log(activatedRoute.root.firstChild);
            }
        }));
    }
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @return {?}
     */
    _resolveCrumbs(route, url = '') {
        /** @type {?} */
        const path = route.routeConfig ? route.routeConfig.path : '';
        /** @type {?} */
        const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['title'] || '' : 'Home';
        /** @type {?} */
        let nextUrl;
        if (path.indexOf(':') !== -1) {
            /** @type {?} */
            const sucked = path.split('/');
            sucked.forEach((/**
             * @param {?} crumb
             * @return {?}
             */
            crumb => {
                if (crumb.indexOf(':', 0) === 0) {
                    /** @type {?} */
                    const key = crumbCleaner(crumb);
                    /** @type {?} */
                    const newLabel = route.snapshot.params[key];
                    nextUrl = `${url}${newLabel}/`;
                    this.push(newLabel, key, nextUrl);
                }
                else {
                    nextUrl = `${url}${crumb}/`;
                    this.push(label, null, nextUrl);
                }
            }));
        }
        else {
            nextUrl = `${url}${path}/`;
            this.push(label, null, nextUrl);
        }
        if (route.firstChild) {
            return this._resolveCrumbs(route.firstChild, url);
        }
    }
    /**
     * @private
     * @return {?}
     */
    get crumbsValue() {
        return this.breadcrumbs$.value;
    }
    /**
     * @return {?}
     */
    get crumbsAsObservable() {
        return this.breadcrumbs$.asObservable();
    }
    /**
     * @param {?} key
     * @param {?} label
     * @return {?}
     */
    store(key, label) {
        this.breadcrumbs$
            .pipe(map((/**
         * @param {?} users
         * @return {?}
         */
        users => users.find((/**
         * @param {?} user
         * @return {?}
         */
        user => user.key === key)))))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            const index = this.crumbsValue.indexOf(res);
            this.crumbsValue[index]['label'] = label;
        }));
    }
    /**
     * @param {?} label
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    push(label, key, url) {
        /** @type {?} */
        const breadcrumb = { key, label, url };
        /** @type {?} */
        const newBreadcrumbs = [...this.crumbsValue, breadcrumb];
        this.breadcrumbs$.next(newBreadcrumbs);
    }
}
BreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BreadcrumbsService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] }
];
/** @nocollapse */ BreadcrumbsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(ɵɵinject(Router), ɵɵinject(ActivatedRoute), ɵɵinject("uiConfig")); }, token: BreadcrumbsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsComponent {
    /**
     * @param {?} _breadcrumbs
     */
    constructor(_breadcrumbs) {
        this._breadcrumbs = _breadcrumbs;
        // this.breadcrumbs$ = _breadcrumbs.breadcrumbs$.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'breadcrumbs',
                template: "<ol class=\"breadcrumb\">\n\t<ng-container *ngFor=\"let breadcrumb of _breadcrumbs.breadcrumbs$ | async; last as isLast;\">\n\t\t<li *ngIf=\"breadcrumb.label!==''\"\n\t\t\tclass=\"breadcrumb-item\"\n\t\t\t[ngClass]=\"{'active': isLast}\">\n\t\t\t<a *ngIf=\"!isLast; else lastRoute\"\n\t\t\t   [routerLink]=\"[breadcrumb.url]\"\n\t\t\t   routerLinkActive=\"active\">\n\t\t\t\t{{ breadcrumb.label }}\n\t\t\t</a>\n\t\t\t<ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\n\t\t</li>\n\t</ng-container>\n</ol>\n"
            }] }
];
/** @nocollapse */
BreadcrumbsComponent.ctorParameters = () => [
    { type: BreadcrumbsService }
];

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
            this._translateService.isCompleted();
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
    }
}
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
CoreModule.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [DEFAULT_LANG,] }] },
    { type: Array, decorators: [{ type: Inject, args: [SUPPORT_LANG,] }] },
    { type: Injector }
];
__decorate([
    InjectToken(CoreTranslateService),
    __metadata("design:type", CoreTranslateService)
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
class JwtInterceptor {
    /**
     * @param {?} config
     * @param {?} _tokenService
     */
    constructor(config, _tokenService) {
        this.config = config;
        this._tokenService = _tokenService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const token = this._tokenService.getToken();
        if (token && !token.isExpired()) {
            // {headers: req.headers.set(this.config.headerName, this.config.headerPrefix + ' ' + token.token)}
            req = req.clone({
                setHeaders: { Authorization: `${this.config.headerPrefix} ${token.token}` }
            });
        }
        return next.handle(req);
    }
}
JwtInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JwtInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] },
    { type: TokenService }
];
/** @nocollapse */ JwtInterceptor.ngInjectableDef = ɵɵdefineInjectable({ factory: function JwtInterceptor_Factory() { return new JwtInterceptor(ɵɵinject("authConfig"), ɵɵinject(TokenService)); }, token: JwtInterceptor, providedIn: "root" });

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
    { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] }
];
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
class LoggedOutAuth {
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
        if (token && token.token && !token.isExpired()) {
            /** @type {?} */
            const redirectUrl = this.config.guards.loggedOutGuard.redirectUrl;
            if (redirectUrl) {
                return this._router.navigate([redirectUrl]);
            }
            return false;
        }
        return true;
    }
}
LoggedOutAuth.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoggedOutAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['authConfig',] }] }
];
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
                { provide: 'authConfig', useValue: config },
                AuthenticationService, LoggedInAuth, LoggedOutAuth,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                }
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
class DialogService {
    /**
     * @param {?} config
     * @param {?} _translateService
     */
    constructor(config, _translateService) {
        this.config = config;
        this._translateService = _translateService;
        this.reConfig();
    }
    /**
     * @param {?} prompt
     * @return {?}
     */
    prompt(prompt) {
        prompt = this._translateService.instant(prompt);
        return this._dialogService.prompt(prompt, this._config);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    confirm(message) {
        message = this._translateService.instant(message);
        return this._dialogService.confirm(message, this._config);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    alert(message) {
        return this._dialogService.alert(message, this._config);
    }
    /**
     * @return {?}
     */
    reConfig() {
        const { theme, defaultText, cancelButtonText, okButtonText, color } = this.config.dialog;
        // console.log(theme);
        this._config = {
            theme,
            color,
            defaultText: this._translateService.instant(defaultText),
            cancelButtonText: this._translateService.instant(cancelButtonText),
            okButtonText: this._translateService.instant(okButtonText),
        };
    }
}
DialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DialogService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] },
    { type: CoreTranslateService }
];
/** @nocollapse */ DialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(ɵɵinject("uiConfig"), ɵɵinject(CoreTranslateService)); }, token: DialogService, providedIn: "root" });
__decorate([
    InjectToken(NgxCoolDialogsService),
    __metadata("design:type", NgxCoolDialogsService)
], DialogService.prototype, "_dialogService", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastTemplateComponent {
}
ToastTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-toast-template',
                template: `
		<div class="toast-container">
			<div class="toast-icon">
				
			</div>
			<div class="toast-message">
				<span class="msg-caption">
					{{toast.caption}}
				</span>
				<span class="msg-text">
					{{toast.text}}
				</span>
			</div>
		</div>
	`,
                styles: [""]
            }] }
];
ToastTemplateComponent.propDecorators = {
    toast: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastService {
    /**
     * @param {?} _translateService
     * @param {?} _toast
     * @param {?} config
     */
    constructor(_translateService, _toast, config) {
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
    success(text, replace, duration) {
        duration = duration || this.config.toast.duration;
        /** @type {?} */
        const caption = this._translateService.instant('GLOBAL.OK_TITLE', replace);
        text = this._translateService.instant(text, replace);
        return this._toast.open({ text, type: 'success', caption, duration });
    }
    /**
     * @param {?} text
     * @param {?=} replace
     * @param {?=} duration
     * @return {?}
     */
    warning(text, replace, duration) {
        duration = duration || this.config.toast.duration;
        /** @type {?} */
        const caption = this._translateService.instant('GLOBAL.OK_TITLE', replace);
        text = this._translateService.instant(text, replace);
        return this._toast.open({ text, type: 'warning', caption, duration });
    }
    /**
     * @param {?} text
     * @param {?=} replace
     * @param {?=} duration
     * @return {?}
     */
    error(text, replace, duration) {
        duration = duration || this.config.toast.duration;
        /** @type {?} */
        const caption = this._translateService.instant('GLOBAL.ERROR_TITLE', replace);
        text = this._translateService.instant(text, replace);
        return this._toast.open({ text, type: 'danger', caption, duration });
    }
    /**
     * @param {?} text
     * @param {?=} replace
     * @param {?=} duration
     * @return {?}
     */
    info(text, replace, duration) {
        duration = duration || this.config.toast.duration;
        /** @type {?} */
        const caption = this._translateService.instant('GLOBAL.INFO_TITLE', replace);
        text = this._translateService.instant(text, replace);
        return this._toast.open({ text, type: 'info', caption, duration });
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: CoreTranslateService },
    { type: Toaster },
    { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] }
];
/** @nocollapse */ ToastService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(ɵɵinject(CoreTranslateService), ɵɵinject(Toaster$1), ɵɵinject("uiConfig")); }, token: ToastService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalTemplateComponent {
    /**
     * @param {?} modalRef
     */
    constructor(modalRef) {
        this.modalRef = modalRef;
        this.loading = false;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    set componentType(c) {
        this.component = c;
        this.onSubmit = new Subject();
        this.renderContent();
    }
    /**
     * @return {?}
     */
    renderContent() {
        this.container.clear();
        /** @type {?} */
        const injector = this.container.injector;
        /** @type {?} */
        const cfr = injector.get(ComponentFactoryResolver);
        /** @type {?} */
        const componentFactory = cfr.resolveComponentFactory(this.component);
        /** @type {?} */
        const componentRef = this.container.createComponent(componentFactory);
        componentRef.instance.form = this.form;
        this.componentRef = componentRef;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    /**
     * @return {?}
     */
    onSave() {
        /** @type {?} */
        const resolveModalState = (/**
         * @return {?}
         */
        () => {
            this.onSubmit.next(true);
            this.modalRef.hide();
        });
        this.promise = this.cri.onSave(this.form.value);
        /** @type {?} */
        const isSubscription = this.promise instanceof Subscription;
        if (isSubscription) {
            /** @type {?} */
            const promise = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            (resolve) => {
                ((/** @type {?} */ (this.promise))).add(resolve);
            }));
            if (promise.finally) {
                promise.finally(resolveModalState);
            }
        }
    }
    /**
     * @return {?}
     */
    onClose() {
        this.onSubmit.next(false);
        this.modalRef.hide();
    }
    /**
     * @return {?}
     */
    onHide() {
        this.modalRef.hide();
    }
    /**
     * @return {?}
     */
    get cri() {
        return this.componentRef.instance;
    }
}
ModalTemplateComponent.decorators = [
    { type: Component, args: [{
                template: `
		<div class="modal-header">
			<h5 class="modal-title">{{title}}</h5>
			<button type="button" class="close" (click)="onHide()">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<form #f="ngForm">
				<ng-container #container libNgForm></ng-container>
				<button type="submit" class="btn btn-success mr-2" *ngIf="loading"
						[progress]="promise"
						[disabled]="f.invalid"
						(click)="onSave()">
					Save
				</button>
				<button type="submit" class="btn btn-success" (click)="onClose()">
					Close
				</button>
			</form>

		</div>
	`,
                styles: [""]
            }] }
];
/** @nocollapse */
ModalTemplateComponent.ctorParameters = () => [
    { type: BsModalRef }
];
ModalTemplateComponent.propDecorators = {
    form: [{ type: ViewChild, args: ['f', { static: true },] }],
    componentType: [{ type: Input }],
    container: [{ type: ViewChild, args: ['container', {
                    read: ViewContainerRef,
                    static: true
                },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgForm))
};
class NgFormDirective {
    constructor() {
    }
}
NgFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libNgForm]',
                providers: [formDirectiveProvider],
                exportAs: 'ngForm'
            },] }
];
/** @nocollapse */
NgFormDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressButtonDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.isPromiseDone = false;
        this.element = el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progress(value) {
        /** @type {?} */
        const isSubscription = value instanceof Subscription;
        if (isSubscription) {
            this.promise = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            (resolve) => {
                ((/** @type {?} */ (value))).add(resolve);
            }));
            this.initPromiseHandler();
        }
    }
    /**
     * @return {?}
     */
    disabled() {
        this.element.setAttribute('disabled', 'disabled');
    }
    /**
     * @return {?}
     */
    enabled() {
        this.element.removeAttribute('disabled');
    }
    /**
     * @return {?}
     */
    initPromiseHandler() {
        if (this.element && this.promise) {
            this.disabled();
            /** @type {?} */
            const promise = this.promise;
            /** @type {?} */
            const resolveLoadingState = (/**
             * @return {?}
             */
            () => {
                this.isPromiseDone = true;
                if (this.isPromiseDone) {
                    this.enabled();
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
    }
    /**
     * @return {?}
     */
    handleButton() {
        // some code
    }
}
ProgressButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[progress]'
            },] }
];
/** @nocollapse */
ProgressButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
ProgressButtonDirective.propDecorators = {
    progress: [{ type: Input }],
    handleButton: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: 'uiConfig', useValue: config },
                DialogService,
                ToastService,
                BsModalRef
            ]
        };
    }
}
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
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                ],
                entryComponents: [
                    ModalTemplateComponent,
                    ToastTemplateComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Base {
    constructor() {
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    // .pipe(takeWhile(x => this.isAlive))
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isAlive = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalService {
    /**
     * @param {?} _modalService
     * @param {?} resolver
     * @param {?} modalRef
     * @param {?} injector
     * @param {?} config
     */
    constructor(_modalService, resolver, modalRef, injector, config) {
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
    open(componentType, config) {
        this.modalRef = this._modalService.show(ModalTemplateComponent, { class: config.class });
        /** @type {?} */
        const content = this.modalRef.content;
        content.componentType = componentType;
        content.title = config.title || 'title';
        content.type = config.type || 'add';
        content.data = config.data || {};
        return content;
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: BsModalService },
    { type: ComponentFactoryResolver },
    { type: BsModalRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: ['uiConfig',] }] }
];
/** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(BsModalService$1), ɵɵinject(ComponentFactoryResolver), ɵɵinject(BsModalRef$1), ɵɵinject(INJECTOR), ɵɵinject("uiConfig")); }, token: ModalService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Modal extends Base {
}
__decorate([
    InjectToken(ModalService),
    __metadata("design:type", ModalService)
], Modal.prototype, "modalService", void 0);

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

export { AUTH_CONFIG_DEFAULTS, AuthModule, AuthenticationService, Base, BreadcrumbsComponent, BreadcrumbsService, CoreModule, CoreTranslateService, DEFAULT_LANG, DIALOG_CONFIG_DEFAULTS, DialogService, GlobalInject, HttpLoaderFactory, HttpProvider, InjectToken, LOCAL_STORAGE_CONFIG_DEFAULTS, LocalStorage, LoggedInAuth, LoggedOutAuth, MODULE_CONFIG_DEFAULTS, Modal, ModalService, ModalTemplateComponent, QUERY_SERVICE_TOKEN, Query, QueryService, SUPPORT_LANG, ToastService, ToastTemplateComponent, Token, TokenError, UIModule, UiService, crumbCleaner, initializeApp, isEmpty, isString, routePathExtract, translateModuleOptions, AppLoadService as ɵa, CoreHttpInterceptor as ɵb, TokenService as ɵc, JwtInterceptor as ɵd, formDirectiveProvider as ɵe, NgFormDirective as ɵf, ProgressButtonDirective as ɵg };
//# sourceMappingURL=core.js.map
