import {InjectionToken, Type} from '@angular/core';
import {Query} from './classes/query.class';
import {AuthConfig, LocalStorageConfig} from './interfaces/config.model';

export const QUERY_SERVICE_TOKEN = new InjectionToken<Type<Query<any>>>('QueryService');
export const AUTH_SERVICE_TOKEN = new InjectionToken<AuthConfig>('AuthConfig');
export const LOCAL_STORAGE_TOKEN = new InjectionToken<LocalStorageConfig>('LocalStorageConfig');
