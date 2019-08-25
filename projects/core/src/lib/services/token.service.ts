import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Token} from '../classes/token.class';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token: BehaviorSubject<Token>;

  constructor() {
    this._token = new BehaviorSubject(new Token(localStorage.getItem('satellizer_token')));
  }

  /**
   * Get the current token.
   */
  getToken(): Token {
    const token = this._token.getValue();
    return (token && token.token) ? token : null;
  }

  /**
   * Returns an stream of tokens.
   */
  getTokenStream(): Observable<Token> {
    return this._token.asObservable();
  }

  /**
   * Update the current token.
   */
  setToken(token: string) {
    this._token.next(new Token(token));
  }

  /**
   * Remove the current token.
   */
  removeToken() {
    this._token.next(null);
  }

}
