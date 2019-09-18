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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var QUERY_SERVICE_TOKEN = new core.InjectionToken('QueryService');
    /** @type {?} */
    var DEFAULT_LANG = new core.InjectionToken('DefaultLang');
    /** @type {?} */
    var SUPPORT_LANG = new core.InjectionToken('SupportLang');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /**
         * @abstract
         * @param {?} info
         * @return {?}
         */
        Query.prototype.grid = function (info) { };
        /**
         * @abstract
         * @param {?} info
         * @return {?}
         */
        Query.prototype.get = function (info) { };
        /**
         * @abstract
         * @param {?} info
         * @return {?}
         */
        Query.prototype.list = function (info) { };
        /**
         * @abstract
         * @param {?} info
         * @return {?}
         */
        Query.prototype.post = function (info) { };
        /**
         * @abstract
         * @param {?} info
         * @return {?}
         */
        Query.prototype.delete = function (info) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        HttpProvider.prototype._baseUrl;
        /**
         * @type {?}
         * @private
         */
        HttpProvider.prototype.config;
        /**
         * @type {?}
         * @private
         */
        HttpProvider.prototype.http;
        /**
         * @type {?}
         * @private
         */
        HttpProvider.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        QueryService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        QueryService.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    function initializeApp(appLoadService) {
        return (/**
         * @return {?}
         */
        function () { return appLoadService.initializeApp(); });
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
            var key = path.split('/')[0].substr(1);
            return {
                key: key,
                label: route.snapshot.params[key]
            };
        }
        return {
            key: null,
            label: path
        };
    }
    /**
     * @record
     */
    function IRoutePath() { }
    if (false) {
        /** @type {?} */
        IRoutePath.prototype.key;
        /** @type {?} */
        IRoutePath.prototype.label;
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        UiService.prototype.document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        CoreTranslateService.prototype._isLoaded;
        /**
         * @type {?}
         * @private
         */
        CoreTranslateService.prototype._translateService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        AuthenticationService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        AuthenticationService.prototype._currentUserSubject;
        /**
         * @type {?}
         * @private
         */
        AuthenticationService.prototype._currentUserValue;
        /**
         * @type {?}
         * @private
         */
        AuthenticationService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        AuthenticationService.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        AppLoadService.prototype._authService;
        /**
         * @type {?}
         * @private
         */
        AppLoadService.prototype._translateService;
        /**
         * @type {?}
         * @private
         */
        AppLoadService.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CoreHttpInterceptor.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbsService = /** @class */ (function () {
        function BreadcrumbsService(router$1, activatedRoute, config) {
            var _this = this;
            this.router = router$1;
            this.activatedRoute = activatedRoute;
            this.config = config;
            this.breadcrumbs$ = new rxjs.BehaviorSubject([]);
            router$1.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationEnd; })), operators.distinctUntilChanged()).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                /** @type {?} */
                var prefix = (config.breadcrumb.prefix);
                _this.url = (prefix) ? '/' : '';
                /** @type {?} */
                var crumb = (prefix) ? [{ label: prefix.toString(), url: _this.url, key: null }] : [];
                _this.breadcrumbs$.next(crumb);
                _this._resolveCrumbs(activatedRoute.root);
            }));
        }
        /**
         * @private
         * @param {?} route
         * @return {?}
         */
        BreadcrumbsService.prototype._resolveCrumbs = /**
         * @private
         * @param {?} route
         * @return {?}
         */
        function (route) {
            var _this = this;
            /** @type {?} */
            var path = route.routeConfig ? route.routeConfig.path : '';
            /** @type {?} */
            var label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['title'] || '' : '';
            if (path.indexOf(':') !== -1) {
                /** @type {?} */
                var sucked = path.split('/');
                sucked.forEach((/**
                 * @param {?} crumb
                 * @return {?}
                 */
                function (crumb) {
                    if (crumb.indexOf(':', 0) === 0) {
                        /** @type {?} */
                        var key = crumb.substr(1);
                        /** @type {?} */
                        var newLabel = route.snapshot.params[key];
                        _this.url += newLabel + "/";
                        _this.push(newLabel, key, _this.url);
                    }
                    else {
                        _this.url += crumb + "/";
                        _this.push(label, null, _this.url);
                    }
                }));
            }
            else {
                this.url += path + "/";
                this.push(label, null, this.url);
            }
            if (route.firstChild) {
                return this._resolveCrumbs(route.firstChild);
            }
        };
        Object.defineProperty(BreadcrumbsService.prototype, "crumbsValue", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.breadcrumbs$.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbsService.prototype, "crumbsAsObservable", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.breadcrumbs$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} key
         * @param {?} label
         * @return {?}
         */
        BreadcrumbsService.prototype.store = /**
         * @param {?} key
         * @param {?} label
         * @return {?}
         */
        function (key, label) {
            var _this = this;
            this.breadcrumbs$
                .pipe(operators.map((/**
             * @param {?} users
             * @return {?}
             */
            function (users) { return users.find((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user.key === key; })); })))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var index = _this.crumbsValue.indexOf(res);
                if (_this.crumbsValue[index]) {
                    _this.crumbsValue[index]['label'] = label;
                }
            }));
        };
        /**
         * @private
         * @param {?} label
         * @param {?} key
         * @param {?} url
         * @return {?}
         */
        BreadcrumbsService.prototype.push = /**
         * @private
         * @param {?} label
         * @param {?} key
         * @param {?} url
         * @return {?}
         */
        function (label, key, url) {
            /** @type {?} */
            var breadcrumb = { key: key, label: label, url: url };
            /** @type {?} */
            var newBreadcrumbs = __spread(this.crumbsValue, [breadcrumb]);
            this.breadcrumbs$.next(newBreadcrumbs);
        };
        BreadcrumbsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BreadcrumbsService.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: undefined, decorators: [{ type: core.Inject, args: ['uiConfig',] }] }
        ]; };
        /** @nocollapse */ BreadcrumbsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(core.ɵɵinject(router.Router), core.ɵɵinject(router.ActivatedRoute), core.ɵɵinject("uiConfig")); }, token: BreadcrumbsService, providedIn: "root" });
        return BreadcrumbsService;
    }());
    if (false) {
        /** @type {?} */
        BreadcrumbsService.prototype.breadcrumbs$;
        /**
         * @type {?}
         * @private
         */
        BreadcrumbsService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        BreadcrumbsService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        BreadcrumbsService.prototype.activatedRoute;
        /**
         * @type {?}
         * @private
         */
        BreadcrumbsService.prototype.config;
    }
    /**
     * @record
     */
    function IBreadcrumb() { }
    if (false) {
        /** @type {?} */
        IBreadcrumb.prototype.label;
        /** @type {?} */
        IBreadcrumb.prototype.url;
        /** @type {?} */
        IBreadcrumb.prototype.key;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent(_breadcrumbs) {
            this._breadcrumbs = _breadcrumbs;
            // this.breadcrumbs$ = _breadcrumbs.breadcrumbs$.asObservable();
        }
        /**
         * @return {?}
         */
        BreadcrumbsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BreadcrumbsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'breadcrumbs',
                        template: "<ol class=\"breadcrumb\">\n\t<ng-container *ngFor=\"let breadcrumb of _breadcrumbs.breadcrumbs$ | async; last as isLast;\">\n\t\t<li *ngIf=\"breadcrumb.label!==''\"\n\t\t\tclass=\"breadcrumb-item\"\n\t\t\t[ngClass]=\"{'active': isLast}\">\n\t\t\t<a *ngIf=\"!isLast; else lastRoute\"\n\t\t\t   [routerLink]=\"[breadcrumb.url]\"\n\t\t\t   routerLinkActive=\"active\">\n\t\t\t\t{{ breadcrumb.label }}\n\t\t\t</a>\n\t\t\t<ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>\n\t\t</li>\n\t</ng-container>\n</ol>\n"
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbsComponent.ctorParameters = function () { return [
            { type: BreadcrumbsService }
        ]; };
        return BreadcrumbsComponent;
    }());
    if (false) {
        /** @type {?} */
        BreadcrumbsComponent.prototype._breadcrumbs;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    BreadcrumbsService,
                    { provide: core.APP_INITIALIZER, useFactory: initializeApp, deps: [AppLoadService], multi: true },
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
                        declarations: [BreadcrumbsComponent],
                        imports: [
                            http.HttpClientModule,
                            router.RouterModule,
                            core$1.TranslateModule.forRoot(translateModuleOptions),
                            common.CommonModule
                        ],
                        exports: [core$1.TranslateModule, BreadcrumbsComponent]
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
    if (false) {
        /** @type {?} */
        CoreModule.prototype._translateService;
        /** @type {?} */
        CoreModule.prototype._uiService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        TokenError.prototype.name;
    }
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
    if (false) {
        /** @type {?} */
        Token.prototype.token;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TokenService.prototype._token;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /**
         * @type {?}
         * @private
         */
        JwtInterceptor.prototype.config;
        /**
         * @type {?}
         * @private
         */
        JwtInterceptor.prototype._tokenService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        LoggedInAuth.prototype._authenticationService;
        /** @type {?} */
        LoggedInAuth.prototype._tokenService;
        /** @type {?} */
        LoggedInAuth.prototype._router;
        /**
         * @type {?}
         * @private
         */
        LoggedInAuth.prototype.config;
    }
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
    if (false) {
        /** @type {?} */
        LoggedOutAuth.prototype._authenticationService;
        /** @type {?} */
        LoggedOutAuth.prototype._tokenService;
        /** @type {?} */
        LoggedOutAuth.prototype._router;
        /**
         * @type {?}
         * @private
         */
        LoggedOutAuth.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogService = /** @class */ (function () {
        function DialogService(config, _translateService) {
            this.config = config;
            this._translateService = _translateService;
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
    if (false) {
        /** @type {?} */
        DialogService.prototype._dialogService;
        /**
         * @type {?}
         * @private
         */
        DialogService.prototype._config;
        /**
         * @type {?}
         * @private
         */
        DialogService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        DialogService.prototype._translateService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        ToastTemplateComponent.prototype.toast;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ToastService.prototype._translateService;
        /**
         * @type {?}
         * @private
         */
        ToastService.prototype._toast;
        /**
         * @type {?}
         * @private
         */
        ToastService.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.onSubmit = new rxjs.Subject();
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
            var isSubscription = this.promise instanceof rxjs.Subscription;
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
            { type: core.Component, args: [{
                        template: "\n\t\t<div class=\"modal-header\">\n\t\t\t<h5 class=\"modal-title\">{{title}}</h5>\n\t\t\t<button type=\"button\" class=\"close\" (click)=\"onHide()\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<form #f=\"ngForm\">\n\t\t\t\t<ng-container #container libNgForm></ng-container>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success mr-2\" *ngIf=\"loading\"\n\t\t\t\t\t\t[progress]=\"promise\"\n\t\t\t\t\t\t[disabled]=\"f.invalid\"\n\t\t\t\t\t\t(click)=\"onSave()\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"onClose()\">\n\t\t\t\t\tClose\n\t\t\t\t</button>\n\t\t\t</form>\n\n\t\t</div>\n\t",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ModalTemplateComponent.ctorParameters = function () { return [
            { type: ngxBootstrap.BsModalRef }
        ]; };
        ModalTemplateComponent.propDecorators = {
            form: [{ type: core.ViewChild, args: ['f', { static: true },] }],
            componentType: [{ type: core.Input }],
            container: [{ type: core.ViewChild, args: ['container', {
                            read: core.ViewContainerRef,
                            static: true
                        },] }]
        };
        return ModalTemplateComponent;
    }());
    if (false) {
        /** @type {?} */
        ModalTemplateComponent.prototype.form;
        /** @type {?} */
        ModalTemplateComponent.prototype.onSubmit;
        /** @type {?} */
        ModalTemplateComponent.prototype.title;
        /** @type {?} */
        ModalTemplateComponent.prototype.type;
        /** @type {?} */
        ModalTemplateComponent.prototype.data;
        /** @type {?} */
        ModalTemplateComponent.prototype.component;
        /** @type {?} */
        ModalTemplateComponent.prototype.componentRef;
        /** @type {?} */
        ModalTemplateComponent.prototype.loading;
        /** @type {?} */
        ModalTemplateComponent.prototype.promise;
        /** @type {?} */
        ModalTemplateComponent.prototype.container;
        /**
         * @type {?}
         * @private
         */
        ModalTemplateComponent.prototype.modalRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var formDirectiveProvider = {
        provide: forms.ControlContainer,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return forms.NgForm; }))
    };
    var NgFormDirective = /** @class */ (function () {
        function NgFormDirective() {
        }
        NgFormDirective.decorators = [
            { type: core.Directive, args: [{
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                var isSubscription = value instanceof rxjs.Subscription;
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
            { type: core.Directive, args: [{
                        selector: '[progress]'
                    },] }
        ];
        /** @nocollapse */
        ProgressButtonDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ProgressButtonDirective.propDecorators = {
            progress: [{ type: core.Input }],
            handleButton: [{ type: core.HostListener, args: ['click',] }]
        };
        return ProgressButtonDirective;
    }());
    if (false) {
        /** @type {?} */
        ProgressButtonDirective.prototype.element;
        /** @type {?} */
        ProgressButtonDirective.prototype.promise;
        /** @type {?} */
        ProgressButtonDirective.prototype.isPromiseDone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    ngxBootstrap.BsModalRef
                ]
            };
        };
        UIModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ModalTemplateComponent,
                            ToastTemplateComponent,
                            NgFormDirective,
                            ProgressButtonDirective
                        ],
                        imports: [
                            animations.BrowserAnimationsModule,
                            ngxCoolDialogs.NgxCoolDialogsModule.forRoot(DIALOG_CONFIG_DEFAULTS),
                            ngxToastNotifications.ToastNotificationsModule.forRoot({ component: ToastTemplateComponent }),
                            ngBootstrap.NgbDatepickerModule,
                            ngxBootstrap.ModalModule.forRoot(),
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function CoreModuleConfig() { }
    if (false) {
        /** @type {?} */
        CoreModuleConfig.prototype.api;
        /** @type {?} */
        CoreModuleConfig.prototype.storage;
        /** @type {?} */
        CoreModuleConfig.prototype.language;
    }
    /**
     * @record
     */
    function AuthModuleConfig() { }
    if (false) {
        /** @type {?} */
        AuthModuleConfig.prototype.loginEndPoint;
        /** @type {?} */
        AuthModuleConfig.prototype.logoutEndPoint;
        /** @type {?} */
        AuthModuleConfig.prototype.loginTokenName;
        /** @type {?} */
        AuthModuleConfig.prototype.headerPrefix;
        /** @type {?} */
        AuthModuleConfig.prototype.useTokenVerify;
        /** @type {?} */
        AuthModuleConfig.prototype.tokenVerifyEndPoint;
        /** @type {?} */
        AuthModuleConfig.prototype.guards;
    }
    /**
     * @record
     */
    function UiModuleConfig() { }
    if (false) {
        /** @type {?} */
        UiModuleConfig.prototype.breadcrumb;
        /** @type {?} */
        UiModuleConfig.prototype.dialog;
        /** @type {?} */
        UiModuleConfig.prototype.toast;
    }
    /**
     * @record
     */
    function LoginParams() { }
    /**
     * @record
     */
    function LocalStorageConfig() { }
    if (false) {
        /** @type {?|undefined} */
        LocalStorageConfig.prototype.prefix;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DataInfo() { }
    if (false) {
        /** @type {?} */
        DataInfo.prototype.url;
        /** @type {?|undefined} */
        DataInfo.prototype.errors;
        /** @type {?|undefined} */
        DataInfo.prototype.result;
    }
    /**
     * @record
     */
    function DataGridParams() { }
    if (false) {
        /** @type {?|undefined} */
        DataGridParams.prototype.pageIndex;
        /** @type {?|undefined} */
        DataGridParams.prototype.pageCount;
        /** @type {?|undefined} */
        DataGridParams.prototype.sort;
        /** @type {?|undefined} */
        DataGridParams.prototype.skip;
        /** @type {?|undefined} */
        DataGridParams.prototype.filter;
    }
    /**
     * @record
     */
    function FilterItems() { }
    if (false) {
        /** @type {?} */
        FilterItems.prototype.condition;
        /** @type {?} */
        FilterItems.prototype.filters;
    }
    /**
     * @record
     */
    function FilterItem() { }
    if (false) {
        /** @type {?|undefined} */
        FilterItem.prototype.field;
        /** @type {?|undefined} */
        FilterItem.prototype.operator;
        /** @type {?|undefined} */
        FilterItem.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IBaseModal() { }
    if (false) {
        /** @type {?} */
        IBaseModal.prototype.type;
        /** @type {?} */
        IBaseModal.prototype.data;
        /**
         * @param {?=} data
         * @return {?}
         */
        IBaseModal.prototype.onSave = function (data) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DataSource() { }
    if (false) {
        /** @type {?} */
        DataSource.prototype.dataObservable;
        /** @type {?} */
        DataSource.prototype.currentData;
        /**
         * @param {?=} remoteDataParams
         * @param {?=} dataParameters
         * @return {?}
         */
        DataSource.prototype.loadData = function (remoteDataParams, dataParameters) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function ServerResponse() { }
    if (false) {
        /** @type {?|undefined} */
        ServerResponse.prototype.result;
        /** @type {?|undefined} */
        ServerResponse.prototype.message;
        /** @type {?|undefined} */
        ServerResponse.prototype.errors;
        /** @type {?|undefined} */
        ServerResponse.prototype.status_code;
        /** @type {?|undefined} */
        ServerResponse.prototype.success;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        Base.prototype.isAlive;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () { return [
            { type: ngxBootstrap.BsModalService },
            { type: core.ComponentFactoryResolver },
            { type: ngxBootstrap.BsModalRef },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: ['uiConfig',] }] }
        ]; };
        /** @nocollapse */ ModalService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(core.ɵɵinject(modal.BsModalService), core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(modal.BsModalRef), core.ɵɵinject(core.INJECTOR), core.ɵɵinject("uiConfig")); }, token: ModalService, providedIn: "root" });
        return ModalService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ModalService.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        ModalService.prototype.resolver;
        /** @type {?} */
        ModalService.prototype.modalRef;
        /**
         * @type {?}
         * @private
         */
        ModalService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ModalService.prototype.config;
    }
    /**
     * @record
     */
    function IModalConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IModalConfig.prototype.title;
        /** @type {?|undefined} */
        IModalConfig.prototype.type;
        /** @type {?|undefined} */
        IModalConfig.prototype.data;
        /** @type {?|undefined} */
        IModalConfig.prototype.class;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Modal = /** @class */ (function (_super) {
        __extends(Modal, _super);
        function Modal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            InjectToken(ModalService),
            __metadata("design:type", ModalService)
        ], Modal.prototype, "modalService", void 0);
        return Modal;
    }(Base));
    if (false) {
        /** @type {?} */
        Modal.prototype.type;
        /** @type {?} */
        Modal.prototype.data;
        /** @type {?} */
        Modal.prototype.modalService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        LocalStorage.prototype._prefix;
    }

    exports.AUTH_CONFIG_DEFAULTS = AUTH_CONFIG_DEFAULTS;
    exports.AuthModule = AuthModule;
    exports.AuthenticationService = AuthenticationService;
    exports.Base = Base;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.BreadcrumbsService = BreadcrumbsService;
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
    exports.Modal = Modal;
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
    exports.crumbCleaner = crumbCleaner;
    exports.initializeApp = initializeApp;
    exports.isEmpty = isEmpty;
    exports.isString = isString;
    exports.routePathExtract = routePathExtract;
    exports.translateModuleOptions = translateModuleOptions;
    exports.ɵa = AppLoadService;
    exports.ɵb = CoreHttpInterceptor;
    exports.ɵc = TokenService;
    exports.ɵd = JwtInterceptor;
    exports.ɵe = formDirectiveProvider;
    exports.ɵf = NgFormDirective;
    exports.ɵg = ProgressButtonDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=core.umd.js.map
