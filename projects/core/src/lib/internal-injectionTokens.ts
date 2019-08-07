import {InjectionToken, Type} from '@angular/core';
import {Query} from './classes/query.class';

export const QUERY_SERVICE_TYPE = new InjectionToken<Type<Query<any>>>('QUERY_SERVICE_TYPE');
