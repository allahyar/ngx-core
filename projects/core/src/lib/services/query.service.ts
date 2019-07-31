import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {CoreQuery} from './query.class';
import {Observable} from 'rxjs';
import {DataInfo} from '../interfaces/data-info.model';
import {ServerResponse} from '../interfaces/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService<T> extends CoreQuery<T> implements OnDestroy {

  delete(info: DataInfo): Observable<ServerResponse<any>> {
    return undefined;
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

  ngOnDestroy(): void {
    console.log('OnDestroy ...');
  }
}
