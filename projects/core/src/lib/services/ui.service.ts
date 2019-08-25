import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {InjectToken} from '../decorators/inject.decorator';

@Injectable()
export class UiService {

  @InjectToken(DOCUMENT)
  document: Document;

  constructor() {
  }

  setDirection(dir: any) {
    this.document.dir = dir;
  }

  get direction(): any {
    return this.document.dir;
  }


}
