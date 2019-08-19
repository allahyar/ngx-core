import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {ServerResponse} from '../interfaces/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private injector: Injector) {
  }

  get(url: string): Observable<any> {
    // this.http.get<any>(data.url);
    return new Observable((observer) => {
      observer.next({success: true});
      observer.complete();
    });
  }

  post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post(url, body, options);
  }

}
