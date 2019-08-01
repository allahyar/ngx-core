import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataInfo} from '../interfaces/data-info.model';
import {Injectable, Injector, OnDestroy} from '@angular/core';

@Injectable()
export class HttpProvider implements OnDestroy {

  constructor(
    private http: HttpClient,
    private injector: Injector) {
  }

  getData(data: DataInfo): Observable<any> {
    return this.http.get<any>(data.url);
  }

  ngOnDestroy(): void {
    console.log('asassa');
  }

}
