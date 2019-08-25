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
  loginEndPoint?: string;
  guards?: {
    loggedInGuard: {
      redirectUrl: string;
    };
    loggedOutGuard: {
      redirectUrl: string;
    };
  };
}

export interface LoginParams {
  [key: string]: string;
}


export interface LocalStorageConfig {
  prefix?: string;
}

