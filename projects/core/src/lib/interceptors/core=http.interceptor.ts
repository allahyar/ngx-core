import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoreModuleConfig} from '../interfaces/config.model';

@Injectable({
	providedIn: 'root'
})
export class CoreHttpInterceptor implements HttpInterceptor {

	constructor(@Inject('config') private config: CoreModuleConfig) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let changeHeader;
		if (this.config.api.useInterceptor) {
			changeHeader = {url: `${this.config.api.baseUrl}${req.url}`};
		}
		const apiReq = req.clone(changeHeader);
		return next.handle(apiReq);

	}

}
