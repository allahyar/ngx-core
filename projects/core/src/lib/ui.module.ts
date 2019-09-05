import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxCoolDialogsModule} from 'ngx-cool-dialogs';
import {UiModuleConfig} from './interfaces/config.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DIALOG_CONFIG_DEFAULTS} from './config';
import {DialogService} from './services/dialog.service';
import {ToastNotificationsModule} from 'ngx-toast-notifications';
import {ToastTemplateComponent} from './components/toast-template.component';
import {ToastService} from './services/toast.service';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {BsModalRef, ModalModule} from 'ngx-bootstrap';
import {ModalTemplateComponent} from './components/modal-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFormDirective} from './directives/ng-form.directive';
import {ProgressButtonDirective} from './directives/progress-button.directive';


@NgModule({
	declarations: [
		ModalTemplateComponent,
		ToastTemplateComponent,
		NgFormDirective,
		ProgressButtonDirective
	],
	imports: [
		BrowserAnimationsModule,
		NgxCoolDialogsModule.forRoot(DIALOG_CONFIG_DEFAULTS),
		ToastNotificationsModule.forRoot({component: ToastTemplateComponent}),
		NgbDatepickerModule,
		ModalModule.forRoot(),
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	entryComponents: [
		ModalTemplateComponent,
		ToastTemplateComponent
	]
})
export class UIModule {

	static forRoot(config: UiModuleConfig): ModuleWithProviders {

		return {
			ngModule: UIModule,
			providers: [
				{provide: 'uiConfig', useValue: config},
				DialogService,
				ToastService,
				BsModalRef
			]
		};
	}
}

