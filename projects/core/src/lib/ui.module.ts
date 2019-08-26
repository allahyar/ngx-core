import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxCoolDialogsModule} from 'ngx-cool-dialogs';
import {UiModuleConfig} from './interfaces/config.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DIALOG_CONFIG_DEFAULTS} from './config';
import {DialogService} from './services/dialog.service';


@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
		NgxCoolDialogsModule.forRoot(DIALOG_CONFIG_DEFAULTS),
		CommonModule
	]
})
export class UIModule {

	static forRoot(config: UiModuleConfig): ModuleWithProviders {

		return {
			ngModule: UIModule,
			providers: [
				{provide: 'config', useValue: config},
				DialogService
			]
		};
	}
}
