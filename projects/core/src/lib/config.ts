import {NgxCoolDialogsBaseConfig} from 'ngx-cool-dialogs';

export const MODULE_CONFIG_DEFAULTS = {};

export const LOCAL_STORAGE_CONFIG_DEFAULTS = {
	prefix: 'ZarsamErp'
};

export const AUTH_CONFIG_DEFAULTS = {
	loginEndPoint: '/login'
};

export const DIALOG_CONFIG_DEFAULTS: NgxCoolDialogsBaseConfig = {
	theme: 'material', // available themes: 'default' | 'material' | 'dark'
	okButtonText: 'Yes',
	cancelButtonText: 'No',
	color: '#8030c3',
};

