import {AuthModuleConfig, CoreModuleConfig} from 'core/lib/interfaces/config.model';
import {UiModuleConfig} from '../../projects/core/src/lib/interfaces/config.model';

export const CORE_CONFIG: CoreModuleConfig = {
	storage: {
		prefix: 'ZarsamErpAPP'
	},
	language: {
		default: 'en',
		support: ['en', 'fa']
	}
};


export const AUTH_CONFIG: AuthModuleConfig = {
	loginEndPoint: 'http://localhost:5000/connect/token',
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
	}
};
