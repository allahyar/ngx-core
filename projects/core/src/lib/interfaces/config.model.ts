import {NgxCoolDialogTheme} from 'ngx-cool-dialogs';

export interface CoreModuleConfig {
	storage?: {
		prefix: string
	};
	language?: {
		default: string;
		support: string[];
	};
}

export interface AuthModuleConfig {
	loginEndPoint: string;
	guards: {
		loggedInGuard: {
			redirectUrl: string;
		};
		loggedOutGuard: {
			redirectUrl: string;
		};
	};
}

export interface UiModuleConfig {
	dialog: {
		theme?: NgxCoolDialogTheme;
		titles?: {
			alert?: string;
			confirm?: string;
			prompt?: string;
		} | string;
		defaultText?: string;
		okButtonText: string;
		cancelButtonText: string;
		color: string;
	};
}

export interface LoginParams {
	[key: string]: string;
}


export interface LocalStorageConfig {
	prefix?: string;
}

