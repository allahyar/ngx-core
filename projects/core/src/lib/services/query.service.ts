import {Injectable, Injector} from '@angular/core';
import {Query} from '../classes/query.class';
import {Observable} from 'rxjs';
import {DataInfo} from '../interfaces/data-info.model';
import {InjectToken} from '../decorators/inject.decorator';
import {HttpProvider} from './http-provider.service';

@Injectable({
	providedIn: 'root'
})
export class QueryService<T> extends Query<T> {

	@InjectToken(HttpProvider) http: HttpProvider<T>;

	constructor(private injector: Injector) {
		super();
	}

	delete(info: DataInfo): Observable<T> {
		return this.http.get('dadad');
	}

	get(info: DataInfo): Observable<T> {
		return undefined;
	}

	list(info: DataInfo): Observable<T> {
		return undefined;
	}

	post(info: DataInfo): Observable<T> {
		return undefined;
	}

	grid(info: DataInfo): Observable<T> {
		return undefined;
	}

}
