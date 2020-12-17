import { ActionContext, ActionTree } from 'vuex';
import { finalize, first } from 'rxjs/operators';

import { IAuthCreds, IAuthStatus } from '@/interfaces';
import authService from '@/services/common/auth';
import { Mutations, MutationType } from './mutations';
import { RootState } from './state';

export enum ActionTypes {
  INCREMENT_LOADING = 'INCREMENT_LOADING',
  DECREMENT_LOCADING = 'DECREMENT_LOCADING',
  LOGIN = 'LOGIN',
}

type ActionArguments = Omit<ActionContext<RootState, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}

export type Actions = {
  [ActionTypes.INCREMENT_LOADING](context: ActionArguments): void;
  [ActionTypes.DECREMENT_LOCADING](context: ActionArguments): void;
  [ActionTypes.LOGIN](context: ActionArguments, payload: IAuthCreds): void;
}

export const actions: ActionTree<RootState, RootState> & Actions = {
  [ActionTypes.INCREMENT_LOADING]({ commit }) {
    commit(MutationType.INCREMENT_LOADING);
  },

  [ActionTypes.DECREMENT_LOCADING]({ commit }) {
    commit(MutationType.DECREMENT_LOADING);
  },

  [ActionTypes.LOGIN]({ commit }, payload) {
    commit(MutationType.INCREMENT_LOADING);

    authService
      .login(payload)
      .pipe(
        first(),
        finalize(() => commit(MutationType.DECREMENT_LOADING)),
      ).subscribe((data: IAuthStatus) => {
        commit(MutationType.SET_AUTH_STATUS, data);
      });
  },
};
