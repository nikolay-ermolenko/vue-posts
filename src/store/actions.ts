import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { RootState } from './state';

export enum ActionTypes {
  INCREMENT_LOADING = 'INCREMENT_LOADING',
  DECREMENT_LOCADING = 'DECREMENT_LOCADING',
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
}

export const actions: ActionTree<RootState, RootState> & Actions = {
  [ActionTypes.INCREMENT_LOADING]({ commit }) {
    commit(MutationType.INCREMENT_LOADING);
  },

  [ActionTypes.DECREMENT_LOCADING]({ commit }) {
    commit(MutationType.DECREMENT_LOADING);
  },
};
