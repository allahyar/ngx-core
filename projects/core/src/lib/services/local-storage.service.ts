import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE_CONFIG_DEFAULTS} from '../module.config';
import {LOCAL_STORAGE_TOKEN} from '../tokens.injection';
import {LocalStorageConfig} from '../interfaces/config.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  _prefix: string;

  constructor(@Inject(LOCAL_STORAGE_TOKEN) config?: LocalStorageConfig) {
    if (config) {
      this._prefix = config.prefix || LOCAL_STORAGE_CONFIG_DEFAULTS.prefix;
      console.log(this._prefix);
    }
  }

  set(key: string, value: string, expiredAt?: number, prefix?: string) {

    if (value !== null) {
      const data = {
        expire: expiredAt || 0,
        data: value
      };
      localStorage.setItem(`${prefix || this._prefix}.${key}`, JSON.stringify(data));
    }

  }

  getKey(index: number): string | null | undefined {
    if (index < 0) {
      console.error(new Error('index has to be 0 or greater'));
    }
    try {
      return localStorage.key(index);
    } catch (error) {
      console.error(error);
    }
  }

  has(key: string, prefix?: string): boolean {
    return (`${prefix || this._prefix}.${key}` in localStorage);
  }

  get(key: string, prefix?: string): string | null | undefined {
    try {
      return localStorage.getItem(`${prefix || this._prefix}.${key}`);
    } catch (error) {
      console.error(error);
    }
  }

  remove(key: string, prefix?: string): void {
    try {
      localStorage.removeItem(`${prefix || this._prefix}_${key}`);
    } catch (error) {
      console.error(error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }

}
