import {Injectable, Injector} from '@angular/core';
import {Query} from '../classes/query.class';
import {Observable} from 'rxjs';
import {DataInfo} from '../interfaces/data-info.model';
import {ServerResponse} from '../interfaces/server-response.model';
import {Inject} from '../decorators/inject.decorator';
import {HttpProvider} from './http-provider.service';

@Injectable({
  providedIn: 'root'
})
export class QueryService<T> extends Query<T> {

  @Inject(HttpProvider) http: HttpProvider;

  constructor(private injector: Injector) {
    super();
  }

  delete(info: DataInfo): Observable<ServerResponse<T>> {
    return this.http.getData({url: ''});
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
