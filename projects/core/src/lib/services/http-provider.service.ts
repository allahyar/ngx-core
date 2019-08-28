import {Observable} from 'rxjs';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Inject, Injectable, Injector} from '@angular/core';
import {ServerResponse} from '../interfaces/server-response.model';
import {CoreModuleConfig} from '../interfaces/config.model';

@Injectable({
	providedIn: 'root'
})
export class HttpProvider<T> {

	public _baseUrl = null;

	constructor(
		@Inject('config') private config: CoreModuleConfig,
		private http: HttpClient,
		private injector: Injector) {

		if (!this.config.api.useInterceptor) {
			this._baseUrl = this.config.api.baseUrl;
		}

	}

	get(url: string, options?: any)
		: Observable<any> {
		// this.http.get<any>(data.url);
		// return new Observable((observer) => {
		// 	observer.next({success: true});
		// 	observer.complete();
		// });
		return this.http.get<ServerResponse<T>>(this._baseUrl + url, options);
	}

	post(url: string, body: any, options?: any): Observable<any> {
		return this.http.post(this._baseUrl + url, body, options);
	}

}
