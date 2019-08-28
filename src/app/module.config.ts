import {AuthModuleConfig, CoreModuleConfig, UiModuleConfig} from 'core/lib/interfaces/config.model';

export const CORE_CONFIG: CoreModuleConfig = {
	api: {
		baseUrl: 'http://sp.bluetooth.ir/api/v1/',
		useInterceptor: false
	},
	storage: {
		prefix: 'ZarsamErpAPP'
	},
	language: {
		default: 'en',
		support: ['en', 'fa']
	}
};


export const AUTH_CONFIG: AuthModuleConfig = {
	loginEndPoint: 'auth/verify_token',
	logoutEndPoint: 'auth/asas',
	headerPrefix: 'Bearer',
	loginTokenName: 'satellizer_token',
	guards: {
		loggedInGuard: {
			redirectUrl: '/login'
		},
		loggedOutGuard: {
			redirectUrl: '/connect/token'
		}
	}
};


export const UI_CONFIG: UiModuleConfig = {
	dialog: {
		theme: 'default', // available themes: 'default' | 'material' | 'dark'
		defaultText: 'HOME',
		okButtonText: 'HOME',
		cancelButtonText: 'No',
		color: '#8030c3',
	},
	toast: {
		duration: 2000
	}
};
