export interface CoreModuleConfig {
  storage?: {
    perfix: string
  };
}

export interface AuthModuleConfig {
  token: any;
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

export interface AuthConfig {
  prefix?: string;
}
