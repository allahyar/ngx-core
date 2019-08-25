import {InjectionToken, Type} from '@angular/core';
import {Query} from './classes/query.class';

export const QUERY_SERVICE_TOKEN = new InjectionToken<Type<Query<any>>>('QueryService');

export const DEFAULT_LANG = new InjectionToken<string>('DefaultLang');
export const SUPPORT_LANG = new InjectionToken<string>('SupportLang');
