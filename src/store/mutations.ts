import { IAuthStatus } from '@/interfaces';
import { MutationTree } from 'vuex';
import { RootState } from './state';

export enum MutationType {
  INCREMENT_LOADING = 'INCREMENT_LOADING',
  DECREMENT_LOADING = 'DECREMENT_LOADING',
  SET_AUTH_STATUS = 'SET_AUTH_STATUS',
  RESET_AUTH_STATUS = 'RESET_AUTH_STATUS',
}

export type Mutations = {
  [MutationType.INCREMENT_LOADING](state: RootState): void;
  [MutationType.DECREMENT_LOADING](state: RootState): void;
  [MutationType.SET_AUTH_STATUS](state: RootState, payload: IAuthStatus): void;
  [MutationType.RESET_AUTH_STATUS](state: RootState): void;
}

export const mutations: MutationTree<RootState> & Mutations = {

  [MutationType.INCREMENT_LOADING](state: RootState) {
    state.isLoading += 1;
  },

  [MutationType.DECREMENT_LOADING](state) {
    state.isLoading -= 1;
  },

  [MutationType.SET_AUTH_STATUS](state, payload) {
    localStorage.authStatus = JSON.stringify(payload);
    state.authStatus = payload;
  },

  [MutationType.RESET_AUTH_STATUS](state) {
    localStorage.authStatus = null;
    state.authStatus = {
      isAuthorized: false,
      username: null,
      permissions: [],
    };
  },
};
