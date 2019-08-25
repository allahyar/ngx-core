import {AuthModuleConfig, CoreModuleConfig} from 'core/lib/interfaces/config.model';

export const CORE_CONFIG: CoreModuleConfig = {
  storage: {
    prefix: 'ZarsamErpAPP'
  },
  language: {
    default: 'fa',
    support: ['en', 'fa']
  }
};
export const AUTH_CONFIG: AuthModuleConfig = {
  loginEndPoint: 'http://localhost:5000/connect/token'
};
