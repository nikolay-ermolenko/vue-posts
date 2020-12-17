import { IAuthStatus } from '@/interfaces/common/auth';

export enum RootStateFields {
  IS_LOADING = 'isLoading',
  AUTH_STATUS = 'authStatus',
}

export type RootState = {
  [RootStateFields.IS_LOADING]: number;
  [RootStateFields.AUTH_STATUS]: IAuthStatus;
}

export const state: RootState = {
  [RootStateFields.IS_LOADING]: 0,
  [RootStateFields.AUTH_STATUS]: {
    isAuthorized: false,
    username: null,
    permissions: [],
  },
};
