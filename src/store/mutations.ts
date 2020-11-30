import { MutationTree } from 'vuex';
import { RootState } from './state';

export enum MutationType {
  INCREMENT_LOADING = 'INCREMENT_LOADING',
  DECREMENT_LOADING = 'DECREMENT_LOADING',
}

export type Mutations = {
  [MutationType.INCREMENT_LOADING](state: RootState): void;
  [MutationType.DECREMENT_LOADING](state: RootState): void;
}

export const mutations: MutationTree<RootState> & Mutations = {

  [MutationType.INCREMENT_LOADING](state: RootState) {
    state.isLoading += 1;
  },

  [MutationType.DECREMENT_LOADING](state) {
    state.isLoading -= 1;
  },
};
