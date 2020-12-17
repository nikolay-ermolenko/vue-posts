export type IAuthCreds = {
  username: string;
  password: string;
}

export type IAuthStatus = {
  isAuthorized: boolean;
  username: string | null;
  permissions: string[];
}
