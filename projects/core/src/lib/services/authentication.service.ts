import {Inject, Injectable} from '@angular/core';
import {HttpProvider} from './http-provider.service';
import {Observable, ReplaySubject} from 'rxjs';
import {InjectToken} from '../decorators/inject.decorator';
import {AuthModuleConfig} from '../interfaces/config.model';
import {UserRespone} from '../interfaces/auth.model';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

	@InjectToken(HttpProvider) http: HttpProvider<UserRespone>;

	private _currentUserSubject = new ReplaySubject<UserRespone>(1);
	private _currentUserValue: UserRespone;

	constructor(@Inject('authConfig') private config: AuthModuleConfig,
				private router: Router) {
	}

	get currentUserValue(): UserRespone {
		return this._currentUserValue;
	}

	get currentUser(): Observable<any> {
		return this._currentUserSubject.asObservable();
	}

	setting(prop: string): any {
		if (prop.indexOf('.') > 0) {
			const split = prop.split('.');
			// return this.currentUserValue.setting.bind(split);
		}
		return this.currentUserValue.setting[prop];
	}

	verifyToken(token?: string): Observable<boolean> {
		return this.http.get(this.config.loginEndPoint).pipe(map(res => {
			if (res.success) {
				console.log(res.success);
				this._currentUserValue = res.result;
				this._currentUserSubject.next(res.result);
				return true;
			}
			return false;
		}));
	}

	loggedIn(): boolean {
		return this._currentUserValue !== null;
	}

	logout(endPoint: string): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.http.get(endPoint || this.config.logoutEndPoint).subscribe(res => {
				this._currentUserSubject.next(null);
				this._currentUserValue = null;
				this.router.navigateByUrl(this.config.guards.loggedOutGuard.redirectUrl);
				resolve(true);
			}, (err) => reject);
		});
	}
}
