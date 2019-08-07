import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataInfo} from '../interfaces/data-info.model';
import {Injectable, Injector, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpProvider implements OnDestroy {

  constructor(
    private http: HttpClient,
    private injector: Injector) {
  }

  getData(data: DataInfo): Observable<object> {
    // this.http.get<any>(data.url);
    return new Observable((observer) => {
      observer.next({success: true});
      observer.complete();
    });
  }

  ngOnDestroy(): void {
    console.log('asassa');
  }

}
