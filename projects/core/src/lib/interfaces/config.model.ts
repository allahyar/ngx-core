export interface ModuleConfig {
  auth: {
    loginEndPoint: string,
    logoutUrl
    guards?: {
      loggedInGuard: {
        redirectUrl: string;
      },
      loggedOutGuard: {
        redirectUrl: string;
      },
    }
  };
  storage: {
    perfix: string
  };
}

export interface ILoginParams {
  [key: string]: string;
}
