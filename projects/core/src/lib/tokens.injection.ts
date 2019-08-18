import {InjectionToken, Type} from '@angular/core';
import {Query} from './classes/query.class';

export const QUERY_SERVICE_TOKEN = new InjectionToken<Type<Query<any>>>('QUERY_SERVICE_TYPE');
export const LOCAL_STORAGE_TOKEN = new InjectionToken<LOCAL_STORAGE_CONFIG>('LOCAL_STORAGE_CONFIG');


export interface LOCAL_STORAGE_CONFIG {
  prefix?: string;
}
