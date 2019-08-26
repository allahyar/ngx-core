import {Inject, Injectable} from '@angular/core';
import {NgxCoolDialogResult, NgxCoolDialogsLocalConfig, NgxCoolDialogsService} from 'ngx-cool-dialogs';
import {UiModuleConfig} from '../interfaces/config.model';
import {InjectToken} from '../decorators/inject.decorator';
import {CoreTranslateService} from './core-translate.service';

@Injectable({
	providedIn: 'root'
})
export class DialogService {

	@InjectToken(NgxCoolDialogsService)
	_dialogService: NgxCoolDialogsService;

	private _config: NgxCoolDialogsLocalConfig;

	constructor(@Inject('config') private config: UiModuleConfig,
				private _translateService: CoreTranslateService) {
		this._translateService.loaded.subscribe(res => {
			if (res) {
				console.log('asasas');
			}
		});
		this.refactorConfig();

	}

	prompt(prompt: string): NgxCoolDialogResult {
		prompt = this._translateService.instant(prompt);
		return this._dialogService.prompt(prompt, this._config);
	}

	confirm(message: string) {
		message = this._translateService.instant(message);
		return this._dialogService.confirm(message, this._config);
	}


	alert(message: string) {
		return this._dialogService.alert(message, this._config);
	}

	refactorConfig() {

		const {theme, defaultText, cancelButtonText, okButtonText, color} = this.config.dialog;
		// console.log(theme);

		this._config = {
			theme,
			color,
			defaultText: this._translateService.instant(defaultText),
			cancelButtonText: this._translateService.instant(cancelButtonText),
			okButtonText: this._translateService.instant(okButtonText),
		};

	}
}
