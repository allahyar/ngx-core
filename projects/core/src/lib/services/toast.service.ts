import {Injectable} from '@angular/core';
import {CoreTranslateService} from './core-translate.service';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	constructor(private _translateService: CoreTranslateService) {
	}


}
