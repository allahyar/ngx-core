import {Observable} from 'rxjs';
import {DataGridParams} from './data-info.model';

export interface DataSource<T> {
  dataObservable: Observable<T[]>;
  currentData: T[];
  loadData(remoteDataParams?: DataGridParams, dataParameters?: any);
}
