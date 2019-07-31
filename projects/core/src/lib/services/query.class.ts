import {Observable} from 'rxjs';
import {ServerResponse} from '../interfaces/server-response.model';
import {DataInfo} from '../interfaces/data-info.model';

export abstract class CoreQuery<T> {
  abstract get(info: DataInfo): Observable<ServerResponse<T>>;
  abstract list(info: DataInfo): Observable<ServerResponse<T>>;
  abstract post(info: DataInfo): Observable<ServerResponse<T>>;
  abstract delete(info: DataInfo): Observable<ServerResponse<any>>;
}




