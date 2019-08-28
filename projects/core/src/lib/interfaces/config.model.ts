import {NgxCoolDialogTheme} from 'ngx-cool-dialogs';

export interface CoreModuleConfig {
	api: {
		baseUrl: string;
		useInterceptor: boolean;
	};
	storage: {
		prefix: string
	};
	language: {
		default: string;
		support: string[];
	};
}

export interface AuthModuleConfig {
	loginEndPoint: string;
	logoutEndPoint: string;
	loginTokenName: string;
	headerPrefix: string;
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
	toast: {
		duration: number;
	};
}

export interface LoginParams {
	[key: string]: string;
}


export interface LocalStorageConfig {
	prefix?: string;
}

