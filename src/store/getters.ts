import { GetterTree } from 'vuex';
import { RootState } from './state';

export enum GetterType {
  IS_LOADING = 'IS_LOADING',
  IS_AUTHORIZED = 'IS_AUTHORIZED',
}

export type Getters = {
  [GetterType.IS_LOADING](state: RootState): boolean;
  [GetterType.IS_AUTHORIZED](state: RootState): boolean;
}

export const getters: GetterTree<RootState, RootState> & Getters = {
  [GetterType.IS_LOADING]({ isLoading }) {
    return isLoading > 0;
  },

  [GetterType.IS_AUTHORIZED]({ authStatus }) {
    return authStatus.isAuthorized;
  },
};
