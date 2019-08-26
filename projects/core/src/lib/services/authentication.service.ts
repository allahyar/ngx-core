import {Inject, Injectable} from '@angular/core';
import {HttpProvider} from './http-provider.service';
import {Observable, ReplaySubject} from 'rxjs';
import {InjectToken} from '../decorators/inject.decorator';
import {AuthModuleConfig} from '../interfaces/config.model';

@Injectable()
export class AuthenticationService {

  @InjectToken(HttpProvider) http: HttpProvider;

  private _currentUserValue = new ReplaySubject<any>();

  constructor(@Inject('authConfig') private config: AuthModuleConfig) {
  }

  get currentUserValue() {
    return this._currentUserValue;
  }

  get currentUser(): Observable<any> {
    return this._currentUserValue.asObservable();
  }

  verifyToken(token: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.config.loginEndPoint + token).subscribe(res => {
        if (res.success) {
          resolve(res);
          return true;
        }
      }, err => reject(err));
    });
  }

  loggedIn(): boolean {
    return this.currentUser !== null;
  }

  logout(): Observable<any> {
    this._currentUserValue.next(null);
    return this._currentUserValue.asObservable();
  }
}
