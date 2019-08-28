import {Inject, Injectable} from '@angular/core';
import {CoreTranslateService} from './core-translate.service';
import {UiModuleConfig} from '../interfaces/config.model';
import {Toast, Toaster} from 'ngx-toast-notifications';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	constructor(private _translateService: CoreTranslateService,
				private _toast: Toaster,
				@Inject('uiConfig') private config: UiModuleConfig) {
	}

	success(text: string, replace?: Object, duration?: number): Toast {

		duration = duration || this.config.toast.duration;
		const caption = this._translateService.instant('GLOBAL.OK_TITLE', replace);
		text = this._translateService.instant(text, replace);

		return this._toast.open({text, type: 'success', caption, duration});
	}

	warning(text: string, replace?: Object, duration?: number): Toast {

		duration = duration || this.config.toast.duration;
		const caption = this._translateService.instant('GLOBAL.OK_TITLE', replace);
		text = this._translateService.instant(text, replace);

		return this._toast.open({text, type: 'warning', caption, duration});
	}

	error(text: string, replace?: Object, duration?: number): Toast {

		duration = duration || this.config.toast.duration;
		const caption = this._translateService.instant('GLOBAL.ERROR_TITLE', replace);
		text = this._translateService.instant(text, replace);

		return this._toast.open({text, type: 'danger', caption, duration});
	}

	info(text: string, replace?: Object, duration?: number): Toast {

		duration = duration || this.config.toast.duration;
		const caption = this._translateService.instant('GLOBAL.INFO_TITLE', replace);
		text = this._translateService.instant(text, replace);

		return this._toast.open({text, type: 'info', caption, duration});
	}

}
