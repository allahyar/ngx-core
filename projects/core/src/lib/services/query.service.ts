import {Injectable, Injector} from '@angular/core';
import {Query} from './query.class';
import {Observable} from 'rxjs';
import {DataInfo} from '../interfaces/data-info.model';
import {ServerResponse} from '../interfaces/server-response.model';
import {HttpProvider} from './httpProvider.class';
import {Inject} from '../decorators/inject.decorator';

@Injectable({
  providedIn: 'root'
})
export class QueryService<T> extends Query<T> {

  @Inject(HttpProvider) http: HttpProvider;

  constructor(private injector: Injector) {
    super();
  }

  delete(info: DataInfo): Observable<ServerResponse<T>> {
    return new Observable((observer) => {
      observer.next({success: true});
      observer.complete();
    });
  }

  get(info: DataInfo): Observable<ServerResponse<T>> {
    return undefined;
  }

  list(info: DataInfo): Observable<ServerResponse<T>> {
    return undefined;
  }

  post(info: DataInfo): Observable<ServerResponse<T>> {
    return undefined;
  }

  grid(info: DataInfo): Observable<ServerResponse<T>> {
    return undefined;
  }

}
